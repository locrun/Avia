import { FC } from 'react'

import bag from "../../../images/bag.svg"
import baggage from "../../../images/baggage.svg"
import classes from "./Body.module.scss"

export const Body: FC = () => {
  return (
    <div className={classes.body}>
      <div className={classes.endpointOrigin}>
        <div className={classes.time}>09:20</div>
        <div className={classes.city}>Москва</div>
        <div className={classes.date}>19.05.2022</div>
      </div>
      <div className={classes.duration}>
        <div className={classes.flex}>
          <span>SVO</span>
          <span>ROV</span>
        </div>
        <div className={classes.line}>В пути 1 ч 55 мин</div>
      </div>
      <div className={classes.endpointDestination}>
        <div className={classes.time}>09:20</div>
        <div className={classes.city}>Ростов на Дону</div>
        <div className={classes.date}>19.05.2022</div>
      </div>
      <div className={classes.icons}>
        <img src={bag} alt="bag" />
        <img src={baggage} alt="baggage" />
      </div>
    </div>
  )
}
