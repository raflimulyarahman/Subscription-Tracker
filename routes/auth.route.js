import { Router } from 'express';

const authRouter = Router();

authRouter.post('/sign-up', (req, res) => req.send({ title: 'Sign Up' }));
authRouter.post('/sign-in', (req, res) => req.send({ title: 'Sign In' }));
authRouter.post('/sign-out', (req, res) => req.send({ title: 'Sign Out' }));

export default authRouter;