import { Router } from 'express';
import { required } from '../middlewares';
import { item } from './item';
import { search } from './search';

const api = Router();

api.get('/items', required({ query: ['q'] }), search);
api.get('/items/:id', required({ params: ['id'] }), item);

export { api };
