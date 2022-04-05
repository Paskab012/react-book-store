import { createStore, combineReducers } from 'Redux';
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';

const rootReducer = combineReducers({ categoriesReducer, booksReducer });
const store = createStore(rootReducer);

export default store;