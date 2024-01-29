import React, { FC } from 'react'
import './style.scss'
type propsIconTitle = {
  title: string
}

const IconTitle: FC<propsIconTitle> = ({ title }) => {
  return (
    <div className="IconTitleContainer">
      <div className="imageContainer">
        <img src={'/images/teatro.png'} />
      </div>

      <h1>{title}</h1>
    </div>
  )
}

export default IconTitle
