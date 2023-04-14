import Todo from "../Todo";
import doneIcon from "../../assets/icons/done.svg";

const Todos = ({ todos, complete }) => {
  return (
    <div className="w-full  shadow-2xl shadow-slate-700/25 overflow-hidden bg-slate-200 rounded-[5px]">
      {todos.map((todo, index) => {
        return (
          <div
            key={index}
            className={`flex bg-white  group flex-row p-5 gap-3 ${
              index !== todos.length - 1 ? "mb-[1px]" : ""
            }`}
          >
            <div
              onClick={() => {
                complete(todo.id);
              }}
              className={`w-6 h-6 relative rounded-full p-[1px] flex justify-center items-center transition-all bg-[#E3E4F1] group-hover:bg-gradient-to-br from-[#3710BD] to-[#A42395] ${
                todo.completed ? "bg-gradient-to-br" : ""
              } `}
            >
              <div
                className={`bg-white w-full left-0 top-0 h-full rounded-full ${
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
              } transition-all md:text-lg capitalize`}
            >
              {todo.text}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
