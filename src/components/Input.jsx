import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/atoms/todos.atoms";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const createNewTodoHanlder = (e) => {
    e.preventDefault();
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        completed: false,
      },
    ]);

    setInputValue("");
  };

  return (
    <>
      <div
        className={`w-full mb-4 flex flex-row transition-all items-center p-5 rounded-[5px] gap-3 bg-white dark:bg-[#25273D] `}
      >
        <div className="w-6 aspect-square rounded-full border-[1px] border-[#E3E4F1] dark:border-[#393A4B] dark:placeholder-[#767992]"></div>
        <form onSubmit={createNewTodoHanlder} className="w-full">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            autoComplete="false"
            // onFocus={handleFocus}
            // onBlur={handleBlur}
            placeholder="Create a new todo..."
            type="text"
            name="todoText"
            id="todoText"
            className={`caret-[#3A7CFD] w-full  dark:text-[#C8CBE7]  bg-white/0 transition-all outline-none text-[#393A4B] text-lg`}
          />
          <button className="hidden"></button>
        </form>
      </div>
    </>
  );
};

let id = 0;
function getId() {
  return `${id++}-${new Date().getMilliseconds()}`;
}

export default Input;
