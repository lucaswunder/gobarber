import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'lucas',
    email: 'lucas2',
    password_hash: '123',
  });
  return res.json({ message: user });
});

export default routes;
