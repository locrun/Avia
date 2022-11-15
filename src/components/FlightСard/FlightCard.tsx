import { FC } from 'react'


import { Logo } from './Logo/Logo';
import { TimeButton } from '../TimeButton/TimeButton';

import classes from "./FlightCard.module.scss"
import dayjs from 'dayjs';
import { Body } from './Body/Body';
import { TotalPrice } from './TotalPrice/TotalPrice';


export const FlightCard: FC = () => {
  //const format = 'DD.MM.YYYY';
  // const fromDate = dateFrom?.toString()
  // const parseFromDate = dayjs(fromDate).format(format)
  // const toDate = dateTo?.toString()
  // const parseToDate = dayjs(toDate).format(format)
  //console.log(new Date().toLocaleDateString());
  return (

    <div className={classes.card}>
      <Logo />
      <div className={classes.main}>
        <Body />
        <TimeButton />
      </div>
      <TotalPrice />
    </div>

  )
}
