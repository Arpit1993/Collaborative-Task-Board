import { atom } from "recoil";
import type { TodosState } from "./types/common";

export const TRELLO_TODO = "TRELLO_TODO";

const localStorageTodo = localStorage.getItem(TRELLO_TODO) || "{}";
const parsedLocalStorageTodo = JSON.parse(localStorageTodo);

export const boardsState = atom({
  key: "boardsState",
  default: [],
});

export const todosState = atom<TodosState>({
  key: "todosState",
  default: parsedLocalStorageTodo,
});

export const boardModalState = atom<boolean>({
  key: "boardModalState",
  default: false,
});
