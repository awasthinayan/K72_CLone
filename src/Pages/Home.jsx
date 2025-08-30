import React from 'react'
import Video from '../Component/Home/Video'
import HomeBottomText from '../Component/Home/HomeBottomText'
import HomeHeroText from '../Component/Home/HomeHeroText'


function Home() {
  return (
    <div className='text-white'>
      <div className='h-screen w-screen fixed'>
        <Video/>
      </div>
      <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home