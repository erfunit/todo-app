import Header from "./components/Header";
import Container from "./components/HOC/Container";
import { useState, useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos !== null ? JSON.parse(storedTodos) : [];
  });

  const completeToggleHandler = (todoID) => {
    let updatedTodos = [...todos];
    let todoTargetIndex = updatedTodos.findIndex((item) => todoID === item.id);
    updatedTodos[todoTargetIndex].completed =
      !updatedTodos[todoTargetIndex].completed;
    setTodos([...updatedTodos]);
  };

  const createTodo = (e, text) => {
    e.preventDefault();
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

  return (
    <main className="bg-[#FAFAFA] dark:bg-[#171823] h-screen w-full">
      <Header />
      <Container
        todos={todos}
        complete={completeToggleHandler}
        create={createTodo}
      />
    </main>
  );
};

export default App;
