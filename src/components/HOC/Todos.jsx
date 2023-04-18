import { useEffect, useState, useCallback } from "react";
import doneIcon from "../../assets/icons/done.svg";
import { motion } from "framer-motion";

const Todos = ({
  todos,
  complete,
  delete: deleteTask,
  clearCompleted,
  changeFilter,
}) => {
  const [itemsLeft, setItemsLeft] = useState(0);
  const [JSONtodos, setJSONtodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) !== null
      ? JSON.parse(localStorage.getItem("todos"))
      : [];
  });
  useEffect(() => {
    setJSONtodos(() => {
      return JSON.parse(localStorage.getItem("todos")) !== null
        ? JSON.parse(localStorage.getItem("todos"))
        : [];
    });
    let sum = 0;
    todos.forEach((todo) => {
      if (!todo.completed) {
        sum++;
      }
      setItemsLeft(sum);
    });
  }, [todos]);

  const handleFilterChange = useCallback(
    (filter) => {
      changeFilter(filter);
    },
    [changeFilter]
  );

  return (
    <>
      <div className="w-full shadow-2xl shadow-black/25 overflow-hidden transition-all bg-gray-200 dark:bg-[#393A4B] rounded-[5px]">
        {todos.map((todo, index) => {
          return (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              key={index}
              className={`flex bg-white overflow-hidden dark:bg-[#25273D] dark:text-[#C8CBE7] transition-all items-center  group flex-row p-5 justify-between ${
                index !== todos.length - 1 ? "mb-[1px]" : "mb-[1px]"
              }`}
            >
              <div className="flex items-center flex-row gap-3">
                <div
                  onClick={() => {
                    complete(todo.id);
                  }}
                  className={`w-6 cursor-pointer h-6 relative rounded-full p-[1px] flex justify-center items-center transition-all bg-[#E3E4F1] dark:bg-[#393A4B] group-hover:bg-gradient-to-br from-[#55DDFF] to-[#C058F3] ${
                    todo.completed ? "bg-gradient-to-br" : ""
                  } `}
                >
                  <div
                    className={`bg-white dark:bg-[#25273D] transition-all w-full left-0 top-0 h-full rounded-full ${
                      todo.completed ? "hidden" : ""
                    }`}
                  ></div>
                  <img
                    src={doneIcon}
                    className={`${todo.completed ? "" : "hidden"} w-3 `}
                    alt=""
                  />
                </div>
                <span
                  onClick={() => {
                    complete(todo.id);
                  }}
                  className={`${
                    todo.completed ? "line-through text-[#D1D2DA]" : ""
                  } transition-all md:text-lg cursor-pointer capitalize`}
                >
                  {todo.text}
                </span>
              </div>
              <div>
                <button
                  onClick={() => {
                    deleteTask(todo.id);
                  }}
                  className="h-full 2xl:opacity-0 transition-all active:scale-90 group-hover:opacity-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          );
        })}
        {JSONtodos.length > 0 ? (
          <div className="bg-white dark:bg-[#25273D] transition-all  flex flex-row justify-between p-5 text-sm font-semibold  text-[#9495A5]">
            <div>{itemsLeft} items left</div>
            <div className="sm:flex hidden gap-4">
              <button
                onClick={() => handleFilterChange("All")}
                className="active:text-black  transition-all"
              >
                All
              </button>
              <button
                onClick={() => handleFilterChange("Active")}
                className="active:text-black transition-all"
              >
                Active
              </button>
              <button
                onClick={() => handleFilterChange("Completed")}
                className="active:text-black transition-all"
              >
                Completed
              </button>
            </div>
            <div>
              <button
                onClick={clearCompleted}
                className="hover:text-black transition-all"
              >
                Clear Completed
              </button>
            </div>
          </div>
        ) : null}
      </div>
      {JSONtodos.length > 0 ? (
        <div className="bg-white sm:hidden transition-all dark:bg-[#25273D] rounded-[5px] my-4 flex flex-row justify-center p-4 text-base font-semibold  text-[#9495A5]">
          <div className="flex gap-4">
            <button
              onClick={() => handleFilterChange("All")}
              className="active:text-black  transition-all"
            >
              All
            </button>
            <button
              onClick={() => handleFilterChange("Active")}
              className="active:text-black transition-all"
            >
              Active
            </button>
            <button
              onClick={() => handleFilterChange("Completed")}
              className="active:text-black transition-all"
            >
              Completed
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Todos;
