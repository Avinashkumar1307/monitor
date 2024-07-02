import React from 'react'
import cloud1 from './assets/cloud1.png';
import cloud2 from './assets/cloud2.png';
import cloud3 from './assets/cloud3.png';
import cloud4 from './assets/cloud4.png';
import cloud5 from './assets/cloud5.png';
import cloud6 from './assets/cloud6.png';
import cloud7 from './assets/cloud7.png';
export default function Cloud() {
  return (
    <>
    <div className='w-[601px] h-[279px] absolute top-[646px] left-[1577px] '>
          <img src={cloud1} alt='cloud1' />
        </div>
        <div className='w-[602.76px] h-[279px] absolute top-[267px] left-[1797.24px] opacity-75'>
          <img src={cloud2} alt='cloud1' />
        </div>
        <div className='w-[432.26px] h-[272px] absolute top-[110px] left-[70.2px] opacity-60'>
          <img src={cloud3} alt='cloud1' />
        </div>
        <div className='w-[78.23px] h-[34px] absolute top-[71px] left-[525.53px] opacity-75'>
          <img src={cloud4} alt='cloud1' />
        </div>
        <div className='w-[95.28px] h-[49px] absolute top-[36px] left-[1424.15px] opacity-65'>
          <img src={cloud5} alt='cloud1' />
        </div>
        <div className='w-[139.41px] h-[81px] absolute top-[165px] left-[1906.56px] opacity-80 transform rotate-[-180deg]'>
          <img src={cloud6} alt='cloud1' />
        </div>
        <div className='w-[94.27px] h-[48px] absolute top-[220px] left-[1621.73px] opacity-35 '>
          <img src={cloud7} alt='cloud1' />
        </div>
    </>
  )
}
