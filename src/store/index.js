import reducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import loggingMiddleware from '../middleware/loggingMiddleware';

const initialState = {
  tech: 'Redux ',
};

export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(loggingMiddleware, logger)
);
