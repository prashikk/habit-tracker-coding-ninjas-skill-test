import React from 'react'
import Habit from './Habit'
import { useSelector } from "react-redux";

const Habits = () => {
  let habitsState=useSelector((state)=>state["habits"])
  
  return (
    <div className='habits'>
      {habitsState.map((habit)=><Habit habit={habit} key={habit.id}/>)}
    </div>
  )
}

export default Habits
