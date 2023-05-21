import { useState } from "react";
import { useDispatch } from "react-redux";

import { Box, TextField } from "@mui/material";

import { updateFilter } from "../../redux/slices/filterSlice";

const Filter = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;

    setValue(value);

    dispatch(updateFilter(value.trim()));
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mb: "40px" }}>
      <TextField
        type="text"
        variant="outlined"
        placeholder="Find the country..."
        size="small"
        value={value}
        onChange={handleChange}
        sx={{
          width: "300px",
        }}
      />
    </Box>
  );
};

export default Filter;
