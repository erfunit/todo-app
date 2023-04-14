import { useEffect, useRef, useState } from "react";

const Input = ({ create }) => {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    return () => {
      inputEl.current.focus();
    };
  }, []);

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  const inputEl = useRef(null);
  function focusTodo() {
    inputEl.current.focus();
  }
  return (
    <>
      <div
        className={`w-full mb-4 flex flex-row transition-all items-center p-4 rounded-[5px] gap-3 bg-white dark:bg-[#25273D] `}
        onClick={() => focusTodo()}
      >
        <div className="w-6 h-6 rounded-full border-[1px] border-[#E3E4F1] dark:border-[#393A4B] dark:placeholder-[#767992]"></div>
        <form
          onSubmit={(e) => create(e, e.target.elements.todoText.value)}
          className="w-full"
        >
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={inputEl}
            placeholder="Create a new todo..."
            type="text"
            name="todoText"
            id="todoText"
            className={`caret-[#3A7CFD] w-full bg-transparent dark:text-[#C8CBE7] transition-all outline-none text-[#393A4B] text-lg`}
          />
          <button className="hidden"></button>
        </form>
      </div>
    </>
  );
};

export default Input;
