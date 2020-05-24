import axios from 'axios';
import { ActionTypes } from '../types';
import { Dispatch } from 'redux';
import { TodoData, FetchTodoAction } from '../interfaces';

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await axios.get<TodoData[]>(url);
    dispatch<FetchTodoAction>({
      type: ActionTypes.FETCH_TODOS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
