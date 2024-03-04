export type Status = "completed" | "current";

export interface ToDo {
  text: string;
  status: Status;
  id: string;
  title: string;
}

export type ToDoForm = {
  title: string;
  text: string;
};

export type Filter = Status | "all";
