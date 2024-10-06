import * as React from "react";
import { TOOLS_MULTI_OPTION } from "../../constants/list.constants";
import { Controller, useFormContext } from "react-hook-form";

import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import { FormControl } from "@mui/material";

import "./ToolsMultipleSelect.scss";

const ToolsMultipleSelect = ({
  name,
  field,
  isSubmitting,
  label,
  ...other
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <FormControl sx={{ width: "100%" }}>
            <div style={{ marginBottom: 4 }}>{label}</div>
            <Select
              className="toolOption_box"
              {...field}
              multiple
              displayEmpty
              disabled={isSubmitting}
              renderValue={
                field.value?.length > 0 || other.label
                  ? undefined
                  : () => <p>Select your tool(s)</p>
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
          </FormControl>
        </>
      )}
    />
  );
};

export default ToolsMultipleSelect;
