import React from 'react'
import SideBar from '../../components/SideBar'
import MessageBox from '../../components/MessageBox'
import WelcomeMessage from '../../components/WelcomeMessage'

const Homepage = () => {
  return (
    <div className=' p-7 min-w-[120px] sm:h-[400px] md:h-[510px]  mx-auto flex flex-row bg-cyan-50 gap-2 rounded-2xl' style={{background:'#FFF2E6 '}}>
     <SideBar/>
      {/* <MessageBox/> */}
     {/* <WelcomeMessage/> */}
    </div>
  )
}

export default Homepage
