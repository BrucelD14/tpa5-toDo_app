import React from "react";
import style from '../styles/modules/title.module.scss'

function PageTitle({ children }) {
  return <h1 className={style.title}>{children}</h1>
}

export default PageTitle;
