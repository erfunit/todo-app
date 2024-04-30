import { createContext, useState, useCallback } from "react";

const todosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const createTodo = useCallback((e, text) => {
    e.preventDefault();
    console.log("hello world");
    if (text === "") {
      alert("please enter something");
      return;
    }
    const newTodo = {
      text,
      completed: false,
      id: Math.floor(Math.random() * Date.now()),
    };
    setTodos((prevTodos) => {
      const updatedTodos = [newTodo, ...prevTodos];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
    e.target.elements.todoText.value = "";
  }, []);

  const deleteTaskHandler = useCallback((todoID) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== todoID);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }, []);

  const completeToggleHandler = useCallback((todoID) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) => {
        if (todo.id === todoID) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }, []);

  const clearCompletedHandler = useCallback(() => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => !todo.completed);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }, []);

  const contextValue = useCallback(
    [
      todos,
      setTodos,
      createTodo,
      deleteTaskHandler,
      completeToggleHandler,
      clearCompletedHandler,
    ],
    [
      todos,
      setTodos,
      createTodo,
      deleteTaskHandler,
      completeToggleHandler,
      clearCompletedHandler,
    ]
  );

  return (
    <todosContext.Provider value={contextValue}>
      {children}
    </todosContext.Provider>
  );
};

export default todosContext;
