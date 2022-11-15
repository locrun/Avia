import { FC } from 'react'

import { useAppSelector } from '../../../Hooks/redux-hooks'
import bag from "../../../images/bag.svg"
import baggage from "../../../images/baggage.svg"
import classes from "./OneWay.module.scss"

export const OneWay: FC = () => {
  const { data } = useAppSelector(state => state.form)
  const { time } = useAppSelector(state => state.time)

  return (
    <div className={classes.body}>
      <div className={classes.endpointOrigin}>
        <div className={classes.time}>{time.before}</div>
        <div className={classes.city}>{data.fromCity}</div>
        <div className={classes.date}>{data.dateFrom}</div>
      </div>
      <div className={classes.duration}>
        <div className={classes.durationText}>В пути 1 ч 55 мин</div>
      </div>
      <div className={classes.endpointDestination}>
        <div className={classes.time}>{time.after}</div>
        <div className={classes.city}>{data.toCity}</div>
        <div className={classes.date}>{data.dateFrom}</div>
      </div>
      <div className={classes.icons}>
        <img src={bag} alt="bag" />
        <img src={baggage} alt="baggage" />
      </div>
    </div>
  )
}
