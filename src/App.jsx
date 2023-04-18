import Header from "./components/Header";
import Container from "./components/HOC/Container";
import { useState, useEffect } from "react";

const App = () => {
  const [filter, setFilter] = useState("All");
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos !== null ? JSON.parse(storedTodos) : [];
  });

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const themeToggler = () => {
    setDarkMode((prev) => !prev);
  };

  const changeFilterHandler = (x) => {
    setFilter(x);
    if (filter === "Active") {
      let storedTodos = localStorage.getItem("todos");
      storedTodos = storedTodos !== null ? JSON.parse(storedTodos) : [];
      let filteredTodos = storedTodos.filter(
        (todo) => todo.completed === false
      );
      setTodos(filteredTodos);
    } else if (filter === "Completed") {
      let storedTodos = localStorage.getItem("todos");
      storedTodos = storedTodos !== null ? JSON.parse(storedTodos) : [];
      let filteredTodos = storedTodos.filter((todo) => todo.completed === true);
      setTodos(filteredTodos);
    } else if (filter === "All") {
      setTodos(() => {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos !== null ? JSON.parse(storedTodos) : [];
      });
    }
    console.log(todos);
  };

  const clearCompletedHandler = () => {
    let updatedTodos = [...todos];
    let newupdatedTodos = updatedTodos.filter(
      (item) => item.completed === false
    );
    setTodos([...newupdatedTodos]);
    localStorage.clear("todos");
    localStorage.setItem("todos", JSON.stringify(newupdatedTodos));
  };

  const deleteTaskHandler = (todoID) => {
    let updatedTodos = [...todos];
    let newupdatedTodos = updatedTodos.filter((item) => todoID !== item.id);
    setTodos([...newupdatedTodos]);
    localStorage.clear("todos");
    localStorage.setItem("todos", JSON.stringify(newupdatedTodos));
  };

  const completeToggleHandler = (todoID) => {
    let updatedTodos = [...todos];
    let todoTargetIndex = updatedTodos.findIndex((item) => todoID === item.id);
    updatedTodos[todoTargetIndex].completed =
      !updatedTodos[todoTargetIndex].completed;
    setTodos([...updatedTodos]);
    localStorage.clear("todos");
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
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
    <main className="bg-[#FAFAFA] transition-all duration-200 dark:bg-[#171823] h-screen w-full">
      <Header dark={darkMode} />
      <Container
        dark={darkMode}
        themeToggler={themeToggler}
        clearCompleted={clearCompletedHandler}
        delete={deleteTaskHandler}
        todos={todos}
        complete={completeToggleHandler}
        create={createTodo}
        changeFilter={changeFilterHandler}
      />
    </main>
  );
};

export default App;
