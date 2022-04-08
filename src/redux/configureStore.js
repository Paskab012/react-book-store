import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';

const rootReducer = combineReducers({ categoriesReducer, booksReducer });
const store = createStore(rootReducer,
  applyMiddleware(thunk));

export default store;
