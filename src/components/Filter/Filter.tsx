import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../store/todos/selectors";
import { useCallback } from "react";
import { Filter as TFilter } from "../../types";
import { setFilter } from "../../store/todos/slice";

const options = [
  { value: "current", label: "Current" },
  { value: "completed", label: "Completed" },
  { value: "all", label: "All" },
];

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChangeFilter = useCallback((value: TFilter) => {
    dispatch(setFilter(value));
  }, []);

  return <Select options={options} value={filter} onChange={handleChangeFilter} />;
};
