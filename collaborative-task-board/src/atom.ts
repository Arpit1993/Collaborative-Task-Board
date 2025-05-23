import { atom } from "recoil";
import { TodosState } from "./types/common";

export const TRELLO_TODO = "TRELLO_TODO";

const localStorageTodo = localStorage.getItem(TRELLO_TODO) || "{}";
const parsedLocalStorageTodo = JSON.parse(localStorageTodo);