import { TextField } from '@mui/material';
import { ForwardedRef, forwardRef } from 'react';
import classes from "./TextFieldCities.module.scss"


interface IPropsTextField {
  label: string,
  ref?: ForwardedRef<HTMLInputElement>
  error?: boolean
  onChange: (e: any) => void
  value: string
  placeholder?: string,
  className?: string
}

export const TextFieldCities = forwardRef(({ className, error, label, onChange, value, placeholder, ...rest }: IPropsTextField, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {

  return (
    <div>
      <label className={classes.label}>{label}</label>
      <div className={classes.fieldWrapper}>
        <TextField
          className={className}
          ref={ref}
          {...rest}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  )
})

