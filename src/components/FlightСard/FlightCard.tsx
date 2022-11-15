import { FC } from 'react'
import { useAppSelector } from '../../Hooks/redux-hooks';
import { Logo } from './Logo/Logo';
import { OneWay } from './OneWay/OneWay';
import { Reversed } from './Reversed/Reversed';
import { TotalPrice } from './TotalPrice/TotalPrice';
import { TimeButton } from '../TimeButton/TimeButton';

import cn from "classnames"
import classes from "./FlightCard.module.scss"

export const FlightCard: FC = () => {

  const { data } = useAppSelector(state => state.form)
  const checked = data.dateTo === null || data.dateTo === '' ? false : true

  return (
    <div className={cn(classes.card, {
      [classes.cardHeight]: checked
    })}>
      <div className={classes.main}>
        <div className={cn(classes.flex, {
          [classes.h]: checked
        })}>
          <Logo />
          <OneWay />
        </div>
        {checked &&
          <div className={cn(classes.flex, classes.border, {
            [classes.h]: checked
          })}>
            <Logo />
            <Reversed />
          </div>
        }
        {!checked && <TimeButton />}
      </div>
      <TotalPrice />
    </div>

  )
}
