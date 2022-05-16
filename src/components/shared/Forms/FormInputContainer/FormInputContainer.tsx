import { useFormContext, useController } from 'react-hook-form';

import { IFormInputContainerProps } from './FormInputContainer.types';
import { Input } from "../../Input/Input";

export const
    FormInputContainer = ({
  disabled = false,
  readOnly = false,
  fullWidth = true,
  label = '',
  name,
  multiline = false,
  rows = 1,
}: IFormInputContainerProps) => {
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
    <Input onChange={onChange}
           onBlur={onBlur}
           value={value === null ? '' : value}
           disabled={disabled}
           error={!!error}
           label={label}
           name={name}
           readOnly={readOnly}
           type={"text"}
           multiline={multiline}
           rows={rows}
           fullWidth={fullWidth}
           message={error?.message}
    />
  );
};
