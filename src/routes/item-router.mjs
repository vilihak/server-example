import express from 'express';
import {deleteItem, getItemById, getItems, postItem, putItem} from '../controllers/item-controller.mjs';
const  itemRouter = express.Router(
    getItems,
    getItemById,
    postItem,
    putItem,
    deleteItem
);

// DEFINE ROUTERS HERE
// GET http://127.0.0.1:3000/items
itemRouter.get('/', getItems);
// GET http://127.0.0.1:3000/items/<ID>
itemRouter.get('/:id', getItemById);
// POST http://127.0.0.1:3000/items/ (Itemin lisäys)
itemRouter.post('/', postItem);
// PUT
itemRouter.put('/:id', putItem);
// DELETE
itemRouter.delete('/:id', deleteItem);

export default itemRouter;
