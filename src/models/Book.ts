import { Schema, model } from 'mongoose';

const BookSchema = new Schema({
  title: { type: String },
  author: { type: String },
  genre: { type: String },
  read: { type: Boolean, default: false }
});

export default model('Book', BookSchema);
