import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { Label } from "@mui/icons-material";

function FSelect({ name, children, label, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <>
            <div style={{ marginBottom: 4 }}>{label}</div>
            <TextField
              {...field}
              select
              fullWidth
              SelectProps={{ native: true }}
              error={!!error}
              helperText={error?.message}
              size="small"
              {...other}
            >
              {children}
            </TextField>
          </>
        );
      }}
    />
  );
}

export default FSelect;
