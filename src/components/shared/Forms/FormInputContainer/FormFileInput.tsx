import { useFormContext, useController } from "react-hook-form";

export const FormFileContainer = ({ disabled = false, name }: any) => {
  const formContext = useFormContext();
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    control: formContext.control,
    name,
  });
  formContext.register(name, { disabled });

  return (
    <label className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-md26zr-MuiInputBase-root-MuiOutlinedInput-root">
      <input
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        name={name}
        type="file"
      />
    </label>
  );
};
