import { FC, useState } from 'react'

import cn from "classnames"
import classes from "./TimeButton.module.scss"


const data = [
  { id: 0, before: "09:20", after: "11:05" },
  { id: 1, before: "10:20", after: "12:05" },
  { id: 2, before: "11:20", after: "13:05" }

]
export const TimeButton: FC = () => {

  const [active, setActive] = useState(0)

  const onClickHandler = (id: number) => {
    setActive(id)
  }

  return (
    <ul className={classes.list}>
      {data.map((item) => {
        return (
          <li
            key={item.id}
            className={cn(classes.listItem, {
              [classes.active]: item.id === active
            })}
            onClick={() => onClickHandler(item.id)}
          >
            <div>
              <span>{item.before}&nbsp;</span>
              -
              <span>&nbsp;{item.after}</span>
            </div>
          </li>)
      })}
    </ul>

  )
}
