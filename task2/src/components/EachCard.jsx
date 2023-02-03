import React from 'react'

const EachCard = ({el}) => {
  return (
    <div>
        <img src={el.image}/>
        <p>{el.title}</p>
        <p>Rs {el.price}</p>
        <p>12GB+64GB</p>
    </div>
  )
}

export default EachCard