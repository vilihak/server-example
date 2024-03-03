import express from 'express';
import { body, validationResult } from 'express-validator';
import {
  getUserById,
  getUsers,
  postUser,
  putUser,
  deleteUser,
} from '../controllers/user-controller.mjs';
import { authenticateToken } from '../middlewares/authentication.mjs';

const userRouter = express.Router();

userRouter
  .route('/')
  .get(authenticateToken, getUsers)
  .put(authenticateToken, putUser)
  .post(
    [
      body('username').trim().isLength({ min: 3, max: 20 }).isAlphanumeric(),
      body('password').trim().isLength({ min: 8, max: 128 }),
      body('email').trim().isEmail(),
    ],
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next({ statusCode: 400, message: errors.array() });
      }
      postUser(req, res, next);
    },
  );

userRouter
  .route('/:id')
  .get(authenticateToken, getUserById)
  .delete(authenticateToken, deleteUser);

export default userRouter;
