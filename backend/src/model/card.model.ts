import mongoose, { Schema } from 'mongoose';

interface ICard extends Document {
  title: string;
  description: string;
}

const CardSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Card = mongoose.model<ICard>('Card', CardSchema);
export default Card;
