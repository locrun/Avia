import { FC } from 'react'
import { FlightCard } from '../../components/FlightСard/FlightCard'
import { useAppSelector } from '../../Hooks/redux-hooks'

import classes from "./AviaInfo.module.scss"
export const AviaInfo: FC = () => {
  const { data } = useAppSelector(state => state.form)
  console.log(data)
  return (
    <div className={classes.container}>
      <FlightCard />
    </div>
  )
}
