import express from 'express';
import {getUserById, getUsers, postUser, postLogin, putUser} from '../controllers/user-controller.mjs';

const userRouter = express.Router();

// USER ENDPOINT
userRouter.route('/')
//List users
    .get(getUsers)
// USER REGISTRATION
    .post(postUser);

// get info of a user
userRouter.route('/:id')
// GET INFO OF A USER
    .get(getUserById)
// UPDATE USER
    .put(putUser);


// user login
userRouter.post('/login', postLogin);


// update user
userRouter.put('/:id', putUser);

export default userRouter;
