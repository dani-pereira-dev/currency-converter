import { FC } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { styles } from './style';
import { DropdownProps } from './types';

export const Dropdown: FC<DropdownProps> = ({
  label,
  onChange,
  options,
  disabled,
  value,
}) => (
  <FormControl variant="standard" className="input" style={styles.container}>
    <InputLabel>{label}</InputLabel>
    <Select value={value} onChange={onChange} label={label} disabled={disabled}>
      {options.map(opt => (
        <MenuItem key={opt.value} value={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);
