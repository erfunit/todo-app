import { createContext, useState } from "react";

const todosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  //create todo:
  const createTodo = (e, text) => {
    e.preventDefault();
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
      const updatedTodos = [...prevTodos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
    e.target.elements.todoText.value = "";
  };

  //delete one special task:
  const deleteTaskHandler = (todoID) => {
    let updatedTodos = [...todos];
    let newupdatedTodos = updatedTodos.filter((item) => todoID !== item.id);
    setTodos([...newupdatedTodos]);
    localStorage.clear("todos");
    localStorage.setItem("todos", JSON.stringify(newupdatedTodos));
  };

  //task completed toggler function:
  const completeToggleHandler = (todoID) => {
    let updatedTodos = [...todos];
    let todoTargetIndex = updatedTodos.findIndex((item) => todoID === item.id);
    updatedTodos[todoTargetIndex].completed =
      !updatedTodos[todoTargetIndex].completed;
    setTodos([...updatedTodos]);
    localStorage.clear("todos");
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  //clear completed tasks:
  const clearCompletedHandler = () => {
    let updatedTodos = [...todos];
    let newupdatedTodos = updatedTodos.filter(
      (item) => item.completed === false
    );
    setTodos([...newupdatedTodos]);
    localStorage.clear("todos");
    localStorage.setItem("todos", JSON.stringify(newupdatedTodos));
  };

  return (
    <todosContext.Provider
      value={[
        todos,
        setTodos,
        createTodo,
        deleteTaskHandler,
        completeToggleHandler,
        clearCompletedHandler,
      ]}
    >
      {children}
    </todosContext.Provider>
  );
};

export default todosContext;
