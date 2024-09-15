import React from 'react'
import User from './User'

const UserContiner = () => {
  return (
    <div className='overflow-auto flex flex-col rounded-lg py-2 sm:h-[350px] md:h-[390px]' style={{background:"#ffd700"}}>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
    </div>
  )
}

export default UserContiner
