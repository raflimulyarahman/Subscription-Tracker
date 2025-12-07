import { Router } from 'express';
import authorize from '../middlewares/auth.middleware.js';
import { createSubscription } from '../controllers/subscription.controller.js';
import { getUserSubscriptions } from '../controllers/subscription.controller.js';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({ title: 'GET all subscriptions' }));

subscriptionRouter.get('/:id', (req, res) => res.send({ title: 'GET subscription details' }));

// NOTE: Fixed Issue - "Cannot read properties of undefined (reading '_id')" error
// Problem: createSubscription controller tried to access req.user._id but req.user was undefined
// Solution: Added authorize middleware before createSubscription to populate req.user from JWT token

subscriptionRouter.post('/', authorize, createSubscription );

subscriptionRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE subscription' }));

subscriptionRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE subscription' }));

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions );

subscriptionRouter.put('/:id/cancel', (req, res) => res.send({ title: 'CANCEL subscription' }));

subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({ title: 'GET upcoming renewals' }));

export default subscriptionRouter;