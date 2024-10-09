import * as React from "react";
import { MATERIAL_MULTI_OPTION } from "../../constants/list.constants";
import { Controller, useFormContext } from "react-hook-form";

import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";

import "./MaterialMultipleSelect.scss";

const MaterialMultipleSelect = ({ name, field, label, ...other }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl sx={{ width: "100%" }}>
          <div style={{ marginBottom: 4 }}>{label}</div>
          <Select
            className="materialOption_box"
            {...field}
            multiple
            displayEmpty
            renderValue={
              field.value?.length > 0 || other.label
                ? undefined
                : () => <p style={{ letterSpacing: 1.2 }}>Select material(s)</p>
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
        </FormControl>
      )}
    />
  );
};

export default MaterialMultipleSelect;
