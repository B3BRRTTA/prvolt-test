import { Button, Input } from "antd";
import { ChangeEvent, useCallback, useState } from "react";
import { ToDo, ToDoForm } from "../../types";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { add } from "../../store/todos/slice";

const MAX_LENGTH = 20;
const MAX_TITLE_LENGTH = 10;

export const Add = () => {
  const dispatch = useDispatch();
  const { TextArea } = Input;

  const [data, setData] = useState<ToDoForm>({ title: "", text: "" });

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined, key: keyof ToDoForm) => {
      const text = e?.target.value || "";

      if (
        (text.length > MAX_LENGTH && key === "text") ||
        (key === "title" && text.length > MAX_TITLE_LENGTH)
      ) {
        return;
      }

      setData((prev) => ({ ...prev, [key]: text }));
    },
    [setData]
  );

  const handleAdd = useCallback(() => {
    if (!data.text.length || !data.title.length) {
      return;
    }

    const todo: ToDo = {
      id: uuidv4(),
      text: data.text,
      title: data.title,
      status: "current",
    };

    dispatch(add(todo));
    setData({ text: "", title: "" });
  }, [data, setData, dispatch, add]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "1.5rem",
        alignItems: "flex-end",
        marginBottom: "1.5rem",
      }}
    >
      <Input
        value={data.title}
        placeholder="Type title here..."
        onChange={(e) => handleChange(e, "title")}
      />
      <TextArea
        value={data.text}
        onChange={(e) => handleChange(e, "text")}
        placeholder="Type text here..."
      />
      <Button disabled={!!!data.text.length || !!!data.title.length} onClick={handleAdd}>
        Add
      </Button>
    </div>
  );
};
