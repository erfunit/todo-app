import { useRef, useState } from "react";

const Input = () => {
  const [isFocused, setIsFocused] = useState(false);

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
    <div
      className={`w-full mb-5 flex flex-row transition-all items-center p-4 rounded-[5px] gap-3 ${
        isFocused ? "bg-slate-100" : "bg-white"
      }`}
      onClick={() => focusTodo()}
    >
      <div className="w-6 h-6 rounded-full border-[1px] border-[#E3E4F1]"></div>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={inputEl}
        placeholder="Create a new todo..."
        type="text"
        name="todoText"
        id="todoText"
        className={`caret-[#3A7CFD] w-full bg-transparent outline-none text-[#393A4B] text-lg`}
      />
    </div>
  );
};

export default Input;
