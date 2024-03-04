import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { Filter, ToDo } from "../../types";

const selectFilter = (state: RootState): Filter => state.todos.filter;

const selectTodos = (state: RootState): ToDo[] => state.todos.data;

const selectFilteredTodos = createSelector([selectFilter, selectTodos], (filter, todos) => {
  if (filter === "all") {
    // If there's no filter, return all todos
    return todos;
  } else {
    // Filter todos based on the selected status
    return todos.filter((todo) => todo.status === filter);
  }
});

export { selectFilter, selectTodos, selectFilteredTodos };
