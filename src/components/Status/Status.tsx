import { Tag } from "antd";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "../../store/todos/selectors";

export const Status = () => {
  const todos = useSelector(selectTodos);

  const info = useMemo(() => {
    const completed = todos.filter(({ status }) => status === "completed").length;
    const current = todos.filter(({ status }) => status === "current").length;
    return { completed, current };
  }, [todos]);

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Tag color="green">Completed: {info.completed} </Tag>
      <Tag color="red">Current: {info.current}</Tag>
    </div>
  );
};
