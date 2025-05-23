import { atom } from "jotai";
import type { TodosState } from "./types/common";

export const TRELLO_TODO = "TRELLO_TODO";

const localStorageTodo = localStorage.getItem(TRELLO_TODO) || "{}";
const parsedLocalStorageTodo = JSON.parse(localStorageTodo);

export const boardsState = atom({
  default: [],
});

export const todosState = atom<TodosState>({
  default: parsedLocalStorageTodo,
});

export const boardTitleState = atom<string>("");

export const boardModalState = atom<boolean>(false);

export const boardTitleModalState = atom<boolean>(false);

export const cardState = atom<object>({});

export const cardModalState = atom<boolean>(false);
