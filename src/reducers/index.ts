import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import { StoreState } from '../interfaces';
const rootReducer = combineReducers<StoreState>({
  todos: todoReducer,
});

export default rootReducer;
