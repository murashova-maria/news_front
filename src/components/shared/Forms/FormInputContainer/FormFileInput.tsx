import { useFormContext, useController } from "react-hook-form";
import { Input } from '@mui/material';

export const FormFileContainer = ({
  disabled = false,
  name,
}: any) => {
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
    <Input
    className="filee"
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
      name={name}
      type="file"
    />
  );
};
