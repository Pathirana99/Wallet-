import React from 'react'
import './topicbox.css'

export default function TopicBox() {
    const topic = "my fav.."
    const item = "sunith"

  return (
    <div>
      <div className="topicBox">
        <span className="text">{topic} {item}</span>
      </div>
    </div>
  )
}
