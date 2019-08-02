const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    subtitle: { type: String },
    authors: { type: String, required: true },
    link: { type: String, required: true },
    description: { type: string, required: true },
    image: { type: string, required: true },
    googleId: { type: string, required: true, unique: true }
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;