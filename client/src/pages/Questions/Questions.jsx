//questions.jsx
import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'

const Questions = () => {
  return (
    <div className='min-h-screen max-w-[1250px] w-full flex justify-between mx-auto'>
      <LeftSidebar />
      <div className='max-w-[1100px] w-[calc(100%-164px)] p-6 box-border sm:max-w-full sm:w-full'>
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  )
}

export default Questions