import { selector } from "recoil";
import { todoListFilterState, todoListState } from "../atoms/todos.atoms";

const filteredTodoListState = selector({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Completed":
        return list.filter((item) => item.completed);
      case "Active":
        return list.filter((item) => !item.completed);
      default:
        return list;
    }
  },
});

const todoListCountState = selector({
  key: "TodoListStats",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    return totalNum;
  },
});

export { filteredTodoListState, todoListCountState };
