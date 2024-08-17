import { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';

const getAllCards = asyncHandler(async (req: Request, res: Response) => {
  res.json('Heelo');
});

const addCard = asyncHandler(async (req: Request, res: Response) => {});

const getByTitle = asyncHandler(async (req: Request, res: Response) => {});

export { getAllCards, addCard, getByTitle };
