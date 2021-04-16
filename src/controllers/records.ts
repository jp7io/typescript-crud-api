import { Request, Response } from 'express';

export const recordsController = () => {
  const findAll = async (req: Request, res: Response) => {
    // return all records
    res.send('all records will be returned');
  };

  const findOne = async (req: Request, res: Response) => {
    // return one record by id
  };

  const create = async (req: Request, res: Response) => {
    // create a new record
  };

  const update = async (req: Request, res: Response) => {
    // update a record by a given id
  };

  const remove = async (req: Request, res: Response) => {
    // delete a record by a given id
  };

  return { findAll, findOne, create, update, remove };
};
