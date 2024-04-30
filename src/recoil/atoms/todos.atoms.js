import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const todoListState = atom({
  key: "TodoList",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

const todoListFilterState = atom({
  key: "TodoListFilter",
  default: "All",
});

export { todoListFilterState, todoListState };
