import Heading from "../Heading";
import Input from "../Input";
import Todos from "./Todos";

const Container = ({
  create,
  todos,
  complete,
  delete: deleteTask,
  clearCompleted,
  changeFilter,
  themeToggler,
  dark,
}) => {
  return (
    <div className="flex justify-center  py-14 px-5 md:py-20 absolute left-0 top-0 h-screen w-full">
      <div className=" h-full flex flex-col max-w-[650px] w-full ">
        <Heading dark={dark} themeToggler={themeToggler} />
        <Input create={create} />
        <Todos
          complete={complete}
          delete={deleteTask}
          clearCompleted={clearCompleted}
          todos={todos}
          changeFilter={changeFilter}
        />
      </div>
    </div>
  );
};

export default Container;
