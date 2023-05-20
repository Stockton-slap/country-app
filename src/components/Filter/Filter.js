import { useState } from "react";
import { useDispatch } from "react-redux";

import { TextField } from "@mui/material";

import { updateFilter } from "../../redux/slices/filterSlice";

const Filter = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;

    setValue(value);

    dispatch(updateFilter(value));
  };
  return (
    <TextField
      type="text"
      variant="outlined"
      placeholder="Find the country..."
      size="small"
      value={value}
      onChange={handleChange}
      sx={{ width: "300px" }}
    />
  );
};

export default Filter;
