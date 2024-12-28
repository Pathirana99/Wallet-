import React from 'react'
import './topicbox.css'

export default function TopicBox(props) {
  

  return (
    <div>
      <div className="topicBox">
        <span className="text">My fav is {props.food} the price is {props.price}</span>
        {props.children}
      </div>
    </div>
  )
}
