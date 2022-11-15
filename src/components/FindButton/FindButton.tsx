import { FC } from 'react'

import Button from '@mui/material/Button';

import classes from "./FindButton.module.scss"

interface IButton {
  isValid?: boolean,
  onClick: () => void
}
export const FindButton: FC<IButton> = ({ isValid, onClick }) => {
  return (
    <>
      <Button
        disabled={isValid}
        type="button"
        className={classes.Button}
        onClick={onClick}
      >
        Найти билеты
      </Button>
    </>
  )

}
