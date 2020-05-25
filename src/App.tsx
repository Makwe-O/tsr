import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './actions';
import { TodoData, StoreState } from './interfaces';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state: StoreState) => state);
  const [loading, setLoading] = useState(false);

  const getTodos = async (): Promise<void> => {
    setLoading(true);
    await dispatch(fetchTodos());
    setLoading(false);
  };
  return (
    <div className='App'>
      <button onClick={getTodos}>Click me</button>

      {loading ? (
        <h1> loading</h1>
      ) : (
        <ol>
          {todos.map((todo: TodoData) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default App;
