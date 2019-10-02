import Book from "../models/Book";
import { Request, Response } from 'express';

async function post(req: Request, res: Response) {
  const book = new Book(req.body);
  try {
    await book.save();
    return res.json(book);
  }
  catch (err) {
    res.status(404);
    return res.send(err);
  }
}

async function get(req: Request, res: Response) {
  try {
    const books = await Book.find();
    return res.json(books);
  }
  catch (err) {
    res.status(404);
    return res.send(err);
  }
}

async function getById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.json(book);
  }
  catch (err) {
    res.status(404);
    return res.send(err);
  }
}

async function put(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { title, author, genre, read } = req.body;
    const book = await Book.findByIdAndUpdate(id, { title, author, genre, read });
    return res.json(book);
  }
  catch (err) {
    res.status(404);
    return res.send(err);
  }
}

async function patch(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, { $set: req.body });
    return res.json(book);
  }
  catch (err) {
    res.status(404);
    return res.send(err);
  }
}

async function remove(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const bookDeleted = await Book.findByIdAndDelete(id);
    return res.json(bookDeleted);
  }
  catch (err) {
    res.status(404);
    return res.send(err);
  }
}

export default { get, getById, post, remove, put, patch };
