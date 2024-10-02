import * as React from "react";
import { TOOLS_OPTION } from "../../constants/hompage.constants";
import { Controller, useFormContext } from "react-hook-form";
import "./ToolsMultipleSelect.scss";

import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";

const ToolsMultipleSelect = ({ name, field, ...other }) => {
  const [toolName, setToolName] = React.useState([]);
  const { control } = useFormContext();

  const handleChange = (event) => {
    console.log("🚀 Puritin ~ handleChange ~ event:", event.target.value);
    setToolName(event.target.value);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Select
          className="toolOption_box"
          {...field}
          multiple
          displayEmpty
          error={!!error}
          value={toolName}
          onChange={handleChange}
          renderValue={
            toolName.length > 0 ? undefined : () => <em>Select your tool(s)</em>
          }
          {...other}
        >
          {TOOLS_OPTION.map((tool) => (
            <MenuItem key={tool.value} value={tool.value}>
              {/* <Checkbox checked={toolName.includes(tool.label)} /> */}
              <ListItemText primary={tool.label} />
            </MenuItem>
          ))}
        </Select>
      )}
    />
  );
};

export default ToolsMultipleSelect;
