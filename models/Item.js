import { model, Schema } from 'mongoose';

const itemSchema = new Schema({
    title: String,
    price: String,
    instock: Boolean,
    photo: String,
    desc: String,
    category: String,
    updatedAt: String,
    createdAt: String
})

module.exports = model('Item', itemSchema)