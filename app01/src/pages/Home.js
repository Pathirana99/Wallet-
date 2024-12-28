import React from 'react'
import TopicBox from '../components/TopicBox'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <TopicBox food="Kottu" price="Rs 200"><br></br>
        <span>this is the description</span>
      </TopicBox>
      <TopicBox food="Rice" price="Rs 1200"><br></br>
        <button>This is a button</button>
      </TopicBox>
      <TopicBox food="Noodless" price="Rs 2200"><br></br>
        <p>wertk bckcjd ylkjea hc,mljeksdzk jhcfnem nlka fg </p>
      </TopicBox>
    </div>
  )
}
