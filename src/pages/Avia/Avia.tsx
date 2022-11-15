import { FC, useState } from 'react'
import { useForm } from "react-hook-form";
import { useAppDispatch } from '../../Hooks/redux-hooks';

import { TextFieldCities } from '../../components/TextFieldCities/TextFieldCities';
import { FindButton } from '../../components/FindButton/FindButton'

import { getFormData } from '../../store/slices/FormDataSlice';

import cn from "classnames"
import classes from "./Avia.module.scss"

import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

export interface IFormFields {
  fromCity: string;
  toCity: string;
  dateFrom: string,
  dateTo: string
}

const useStyles = makeStyles({
  root: {
    "& .MuiInputBase-root": {
      fontWeight: "700",
      fontSize: "14px",
      background: "White",
      borderRadius: "10px",
      width: "209px",
      color: "#5C5C5C",
    },
    "& .MuiInputBase-input": {
      padding: "10.5px 12px",
    },
  }
});

export const Avia: FC = () => {
  const cl = useStyles()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [fromCity, setFromCity] = useState('')
  const [toCity, setToCity] = useState('')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')

  const { register, formState: { isValid } } =
    useForm<IFormFields>()

  const onClickHandler = () => {
    dispatch(getFormData({ fromCity, toCity, dateFrom, dateTo }))
    navigate("/info")
  }

  return (
    <div className={classes.container}>
      <form
        className={classes.form}
      >
        <div className={cn(classes.flex, classes.bluePlate)}>
          <TextFieldCities
            label="Откуда"
            {...register("fromCity", {
              required: true,
              minLength: 3,
              pattern: /^[А-Яа-яЁё\s]+/
            })}
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
            placeholder="Город вылета"
            className={cl.root}
          />
          <TextFieldCities
            label="Куда"
            {...register("toCity", {
              required: true,
              minLength: 3,
              pattern: /^[А-Яа-яЁё\s]+/
            })}
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
            placeholder="Город прилёта"
            className={cl.root}
          />
          <div className={classes.mr}>
            <div className={classes.label}>Туда</div>
            <TextField
              {...register("dateFrom", {
                required: true,
                minLength: 6,
              })}
              type="date"
              onChange={(e) => setDateFrom(e.target.value)}
              defaultValue="дд.мм.гг"
              className={cn(cl.root, classes.input)}
            />
          </div>
          <div>
            <div className={classes.label}>Обратно</div>
            <TextField
              {...register("dateTo")}
              type="date"
              onChange={(e) => setDateTo(e.target.value)}
              defaultValue="дд.мм.гг"
              className={cl.root}
            />
          </div>
        </div>
        <div className={classes.whitePlate}>
          <FindButton
            isValid={!isValid}
            onClick={onClickHandler}
          />
        </div>
      </form>
    </div >
  )
}

