import Header from "./components/Header";
import Container from "./components/HOC/Container";
import { useState, useEffect, useContext } from "react";
import todosContext from "./contexts/todosContext";

const App = () => {
  const [filter, setFilter] = useState("All");
  const [todos, setTodos] = useContext(todosContext);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setTodos(() => {
      const storedTodos = localStorage.getItem("todos");
      return storedTodos !== null ? JSON.parse(storedTodos) : [];
    });

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
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
  }, [darkMode, filter]);

  const themeToggler = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <main className="bg-[#FAFAFA] transition-all duration-200 dark:bg-[#171823] h-screen w-full">
      <Header dark={darkMode} />
      <Container
        dark={darkMode}
        themeToggler={themeToggler}
        changeFilter={changeFilterHandler}
      />
    </main>
  );
};

export default App;
