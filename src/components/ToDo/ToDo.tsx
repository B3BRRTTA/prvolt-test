import { Card } from "antd";
import { ToDo as IToDo } from "../../types";
import { Badge } from "../Badge";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { toggleStatus } from "../../store/todos/slice";

interface ToDoProps {
  todo: IToDo;
}

export const ToDo: React.FC<ToDoProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const handleClickTitle = useCallback(() => {
    dispatch(toggleStatus(todo.id));
  }, [todo, dispatch, toggleStatus]);

  return (
    <Badge status={todo.status}>
      <Card
        size="small"
        title={
          <h3 style={{ margin: 0 }} onClick={handleClickTitle}>
            {todo.title}
          </h3>
        }
      >
        <p>{todo.text}</p>
      </Card>
    </Badge>
  );
};
