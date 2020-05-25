import { ActionTypes } from '../types';
export interface TodoData {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodoAction {
  type: ActionTypes.FETCH_TODOS;
  payload: TodoData[];
}

export interface StoreState {
  todos: TodoData[];
}
