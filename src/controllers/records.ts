import { Repository } from 'typeorm';
import { Request, Response } from 'express';
import { validate } from 'class-validator';

export const recordsController = <T>(repository: Repository<T>) => {
  const wrap = (fn: Function) => {
    return (req: Request, res: Response) => {
      fn(req, res).catch((e: Error) => {
        res.status(400).send(e);
      });
    };
  };

  const findAll = wrap(async (req: Request, res: Response) => {
    // return all records
    const results = await repository.find(req.query);
    return res.send(results);
  });

  const findOne = wrap(async (req: Request, res: Response) => {
    // return one record by id
    const results = await repository.findOne(req.params.id, req.query);
    return res.send(results);
  });

  const create = wrap(async (req: Request, res: Response) => {
    // create a new record
    const record = repository.create(req.body);

    const validation = await validate(record);
    if (validation.length) {
      return res.status(422).send({ validation });
    }

    const results = await repository.save(record);
    return res.send(results);
  });

  const update = wrap(async (req: Request, res: Response) => {
    // update a record by a given id
    const record = await repository.findOne(req.params.id);
    repository.merge(record, req.body);
    const results = await repository.save(record);
    return res.send(results);
  });

  const remove = wrap(async (req: Request, res: Response) => {
    // delete a record by a given id
    const results = await repository.delete(req.params.id);
    return res.send(results);
  });

  return { findAll, findOne, create, update, remove };
};
