import jwt from 'jsonwebtoken';
import { selectEntryById, selectUserById } from '../models/user-model.mjs'; // adjust this import according to your project structure

const checkOwnership = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, 'your-secret-key');
  const userId = decodedToken.id;

  if (req.path.startsWith('/api/entries')) {
    const entry = await selectEntryById(req.params.id);
    if (entry.userId !== userId) {
      return res.status(403).json({ message: 'Forbidden' });
    }
  } else if (req.path.startsWith('/api/users')) {
    if (req.params.id !== userId) {
      return res.status(403).json({ message: 'Forbidden' });
    }
  }

  next();
};

export default checkOwnership;
