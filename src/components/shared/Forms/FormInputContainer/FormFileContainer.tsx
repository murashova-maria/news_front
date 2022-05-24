import { useFormContext, useController } from "react-hook-form";
import { Input } from "../../Input/Input";

export const FormFileContainer = ({
  disabled = false,
  name,
  label = "",
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

  const changeFile = (e:any)=> {
    onChange(e.target.files[0])
  }
  return (
    <div className="addnewsModal__image-input">
      <Input
        onChange={changeFile}
        onBlur={onBlur}
        label={label}
        disabled={disabled}
        name={name}
        type="file"
      />
    </div>
  );
};
