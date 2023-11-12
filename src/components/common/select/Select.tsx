'use client';

import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from '@mui/material';
import { DEFAULT_SELECT_WIDTH } from './constants';
import type {
  SelectProps as MuiSelectProps,
  InputLabelProps as MuiInputLabelProps,
  FormControlProps as MuiFormControlProps,
} from '@mui/material';

interface SelectProps extends Omit<MuiSelectProps, 'placeholder'> {
  label?: string;
  labelId?: string;
  formControlProps?: MuiFormControlProps;
  inputLabelProps?: MuiInputLabelProps;
  placeholder?: string;
  children?: React.ReactNode;
}
const Select = (props: SelectProps) => {
  const {
    children,
    inputLabelProps,
    formControlProps,
    label,
    labelId,
    placeholder,
    ...rest
  } = props;
  return (
    <FormControl {...formControlProps} sx={{ minWidth: DEFAULT_SELECT_WIDTH }}>
      <InputLabel {...inputLabelProps} id={labelId}>
        {label}
      </InputLabel>
      <MuiSelect
        {...rest}
        defaultValue='SELECT_DEFAULT_VALUE'
        sx={{
          borderRadius: 2,
          backgroundColor: '#E5E7EB',
        }}
        labelId={labelId}
        label={label}
      >
        <MenuItem disabled value={'SELECT_DEFAULT_VALUE'}>
          {placeholder}
        </MenuItem>
        {children}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
