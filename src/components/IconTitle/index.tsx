import React, { FC } from 'react'

type PropsIconTitle = {
  title: string
}

const IconTitle: FC<PropsIconTitle> = ({ title }) => {
  return (
    <div className="IconTitleContainer flex items-center">
      <div className="imageContainer mr-4 flex items-center">
        <img src={'/images/teatro.png'} className="max-h-6em max-w-full" alt="Teatro" />
      </div>

      <h1 className="m-0">{title}</h1>
    </div>
  )
}

export default IconTitle
