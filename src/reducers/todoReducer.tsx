import { TodoData, FetchTodoAction } from '../interfaces';
import { ActionTypes } from '../types';
const initialState: TodoData[] = [];
const todoReducer = (
  state: TodoData[] = initialState,
  action: FetchTodoAction,
) => {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
export default todoReducer;
