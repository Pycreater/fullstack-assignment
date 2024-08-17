import { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import Card from '../model/card.model';
import { ApiResponse } from '../utils/ApiResponse';
import { ApiError } from '../utils/ApiError';

const getAllCards = asyncHandler(async (req: Request, res: Response) => {
  try {
    const cards = await Card.find();
    if (cards.length === 0) {
      throw new ApiError(404, 'No cards found.');
    }
    res
      .status(200)
      .json(new ApiResponse(200, cards, 'Cards fetched Successfully.'));
  } catch (error) {
    throw new ApiError(500, 'Something went wrong while retrieving cards.');
  }
});

const addCard = asyncHandler(async (req: Request, res: Response) => {
  const { title, description } = req.body;

  if (!(title && description)) {
    throw new ApiError(404, 'All fields are required!!.');
  }

  const existedCard = await Card.findOne({ title });

  if (existedCard) {
    throw new ApiError(409, 'Card with this title already exists!!');
  }

  const card = await Card.create({
    title,
    description,
  });

  return res
    .status(201)
    .json(new ApiResponse(200, card, 'Card created Successfully'));
});

const getByTitle = asyncHandler(async (req: Request, res: Response) => {
  const { title } = req.params;

  const card = await Card.findOne({ title });

  if (!card) {
    throw new ApiError(404, 'Card with this title does not exist.');
  }

  return res
    .status(200)
    .json(new ApiResponse(200, card, 'Card fetched Successfully'));
});

export { getAllCards, addCard, getByTitle };
