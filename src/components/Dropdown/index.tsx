import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect } from "react";

interface IDropdown {
  label: string;
  options: { value: string; name: string }[];
  handleChange: (value: string, name: string) => void;
  predefinedValue?: string;
}

const emptyValue = { value: "", name: "" };

export const Dropdown: React.FC<IDropdown> = ({
  label,
  options,
  handleChange,
  predefinedValue,
}) => {
  const [selected, setSelected] = React.useState({ value: "", name: "" } );

  const handleChg = (event: SelectChangeEvent) => {
    setSelected({ value: event.target.value, name: event.target.name });
  };

  useEffect(() => {
    const select = options.find((item) => item.value === selected?.value);
    if (select) handleChange(select.value, select.name);
  }, [selected]);


  useEffect(() => {
      const val = options.find((i) => i.value === predefinedValue)
      setSelected(val || { value: "", name: "" });
  }, [predefinedValue, options]);

  return (
    <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
      <InputLabel id="demo-select-small">{label}</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={selected?.value}
        name={selected?.name}
        label="Tabs"
        onChange={handleChg}
      >
        {options.map((item) => (
          <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
