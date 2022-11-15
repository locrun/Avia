import React from 'react'
import logo from "../../../images/logo.svg"
import classes from "./Logo.module.scss"

export const Logo = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.logo}>
        <img className={classes.logoImage} src={logo} alt="logo" />
        <div className={classes.logoText}>S7 Airlines</div>
      </div>
    </div>
  )
}
