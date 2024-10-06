import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

function FTextField({ name, label, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <div style={{ marginBottom: 4 }}>{label}</div>
          <TextField
            {...field}
            fullWidth
            error={!!error}
            helperText={error?.message}
            size="small"
            {...other}
          />
        </>
      )}
    />
  );
}

export default FTextField;
