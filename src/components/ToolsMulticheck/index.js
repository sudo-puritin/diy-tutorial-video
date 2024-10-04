import * as React from "react";
import { TOOLS_MULTI_OPTION } from "../../constants/list.constants";
import { Controller, useFormContext } from "react-hook-form";
import "./ToolsMultipleSelect.scss";

import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";

const ToolsMultipleSelect = ({ name, field, isSubmitting, ...other }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <Select
            className="toolOption_box"
            {...field}
            multiple
            displayEmpty
            disabled={isSubmitting}
            renderValue={
              field.value.length > 0
                ? undefined
                : () => <em>Select your tool(s)</em>
            }
            {...other}
          >
            {TOOLS_MULTI_OPTION.map((tool) => (
              <MenuItem key={tool.value} value={tool.value}>
                <ListItemText primary={tool.label} />
              </MenuItem>
            ))}
          </Select>
          <p
            style={{
              color: "#d32f2f",
              fontSize: "0.75rem",
              fontWeight: 400,
              margin: "4px 14px 0 14px",
            }}
          >
            {error?.message}
          </p>
        </>
      )}
    />
  );
};

export default ToolsMultipleSelect;
