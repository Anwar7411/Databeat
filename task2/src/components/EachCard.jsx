import React from 'react'
import "./EachCard.css";


const EachCard = ({el}) => {
  
  return (
    <div>
        <div className='card-container'>
            <div className='image-class'>
              <img src={el.image}/>
            </div>
            <div>
              <p className='fields'>BRAND : <span className='values'>{el.brand}</span></p>
              <p className='fields'>TYPE : <span className='values'>{el.title}</span></p>
              <p className='fields'>PRICE : <span className='values'>Rs {el.price}</span><del className='strike_off'>Rs {el.strike_off}</del></p>
            </div>
        </div>
    </div>
  )
}

export default EachCard