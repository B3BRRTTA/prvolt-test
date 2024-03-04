import { useSelector } from "react-redux";
import { ToDo } from "../ToDo";
import { selectFilteredTodos } from "../../store/todos/selectors";

export const List = () => {
  const todos = useSelector(selectFilteredTodos);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {todos.map((todo) => (
        <ToDo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
