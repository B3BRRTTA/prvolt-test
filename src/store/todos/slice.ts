import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Filter, ToDo } from "../../types";

export interface TodosState {
  data: ToDo[];
  filter: Filter;
}

const initialState: TodosState = {
  data: [],
  filter: "all",
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ToDo>) => {
      state.data.push(action.payload);
    },
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
    toggleStatus: (state, action: PayloadAction<string>) => {
      const updated: ToDo[] = state.data.map((todo) =>
        todo.id === action.payload
          ? { ...todo, status: todo.status === "current" ? "completed" : "current" }
          : todo
      );
      state.data = updated;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, toggleStatus, setFilter } = todosSlice.actions;

export default todosSlice.reducer;
