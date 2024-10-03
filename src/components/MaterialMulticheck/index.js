import * as React from "react";
import {
  MATERIAL_MULTI_OPTION,
  MATERIAL_OPTION,
} from "../../constants/list.constants";
import { Controller, useFormContext } from "react-hook-form";
import "./MaterialMultipleSelect.scss";

import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";

const MaterialMultipleSelect = ({ name, field, ...other }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <Select
            className="materialOption_box"
            {...field}
            multiple
            displayEmpty
            renderValue={
              field.value.length > 0
                ? undefined
                : () => <em>Select material(s)</em>
            }
            {...other}
          >
            {MATERIAL_MULTI_OPTION.map((mat) => (
              <MenuItem key={mat.value} value={mat.value}>
                <ListItemText primary={mat.label} />
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

export default MaterialMultipleSelect;
