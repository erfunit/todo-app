import Header from "./components/Header";
import Container from "./components/container/Container";
import { useState, useEffect, useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocalStorage } from "use-termite";
import { RecoilRoot, useSetRecoilState } from "recoil";
import { todoListFilterState } from "./recoil/atoms/todos.atoms";

const App = () => {
  const setFilter = useSetRecoilState(todoListFilterState);

  const [darkMode, setDarkMode] = useLocalStorage(false);
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

  return (
    <RecoilRoot>
      <AnimatePresence>
        <main className="bg-[#FAFAFA] transition-all duration-200 dark:bg-[#171823] h-screen w-full">
          <Header dark={darkMode} />
          <Container dark={darkMode} themeToggler={themeToggler} />
        </main>
      </AnimatePresence>
    </RecoilRoot>
  );
};

export default App;
