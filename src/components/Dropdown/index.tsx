import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect } from "react";

interface IDropdown {
  value?: string;
  label: string;
  options: { value: string; name: string }[];
  handleChange: (value: string, name: string) => void;
}

export const Dropdown: React.FC<IDropdown> = ({
  value,
  label,
  options,
  handleChange,
}) => {
  const [selected, setSelected] = React.useState({
    value: "",
    name: "",
  });

  const handleChg = (event: SelectChangeEvent) => {
    setSelected({ value: event.target.value, name: event.target.name });
  };

  useEffect(() => {
    const select = options.find((item) => item.value === value);
    if (select) setSelected({ value: select.value, name: select.name });
  }, [value]);

  useEffect(() => {
    const select = options.find((item) => item.value === selected.value);
    if (select) {
      handleChange(select.value, select.name);
    }
  }, [selected, value]);

  return (
    <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
      <InputLabel id="demo-select-small">{label}</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={selected.value}
        name={selected.name}
        label="Tabs"
        onChange={handleChg}
      >
        {options.map((item) => (
          <MenuItem value={item.value}>{item.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
