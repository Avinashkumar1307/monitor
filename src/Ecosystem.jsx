import React, { useState } from 'react';
import Circle from './Circle';
import Top from './Top';
import Mid from './Mid';
import Low from './Low';

export default function Ecosystem() {
  const [opacity, setOpacity] = useState({ top: 100, mid: 100, low: 100 });

  const handleResilientHealthClick = () => {
      setOpacity({ top: 100, mid: 20, low: 20 });
  };

  const handleAccessQualityCareClick = () => {
    if (opacity.mid !== 100) {
      setOpacity({ top: 20, mid: 100, low: 20 });
    } else {
      setOpacity({ top: 100, mid: 100, low: 100 });
    }
  };

  const handlePublicHealthClick = () => {
    if (opacity.low !== 100) {
      setOpacity({ top: 20, mid: 20, low: 100 });
    } else {
      setOpacity({ top: 100, mid: 100, low: 100 });
    }
  };

  return (
    <div className='w-[1538px] h-full z-50 relative brightness-95'>
      <div className='w-[202.6px] h-[52px] flex justify-between items-center absolute top-[90px] left-[14px] cursor-pointer' onClick={handleResilientHealthClick}>
        <div className='w-[167px] h-[52px] flex justify-between items-center bg-[#3DA3B5] rounded-[50px]'>
          <p className='text-[12px] font-bold w-full text-center text-white'>Resilient Health <br /> Ecosystem</p>
        </div>
        <div className='w-[25.6px] h-[8.56px] flex justify-between items-center'>
          <Circle len='1.22px' />
          <Circle len='8.56px' />
          <Circle len='5.51px' />
        </div>
      </div>
      <div className='w-[336px] h-[52px] absolute top-[257px] left-[14px] flex justify-between items-center cursor-pointer' onClick={handleAccessQualityCareClick}>
        <div className='w-[144px] h-[52px] flex justify-between items-center bg-[#3DA3B5] rounded-[50px]'>
          <p className='text-[12px] font-bold w-full text-center text-white'>Access & <br /> QUALITY CARE</p>
        </div>
        <div className='w-[182.56px] h-[8.56px] flex justify-between items-center'>
          <div className='w-[1.22px] h-[1.22px] '></div>
          <Circle len='1.22px' />
          <Circle len='2.45px' />
          <Circle len='5.51px' />
          <Circle len='2.45px' />
          <Circle len='2.45px' />
          <Circle len='3.67px' />
          <Circle len='2.45px' />
          <Circle len='2.45px' />
          <Circle len='2.45px' />
          <Circle len='3.67px' />
          <Circle len='2.45px' />
          <Circle len='2.45px' />
          <Circle len='2.45px' />
          <Circle len='1px' />
          <Circle len='2.45px' />
        </div>
      </div>
      <div className='w-[294.69px] h-[36px] flex justify-between items-center  absolute top-[470px] left-[14px] cursor-pointer' onClick={handlePublicHealthClick}>
        <div className='w-[150px] h-[36px] flex justify-between items-center bg-[#3DA3B5] rounded-[50px]'>
          <p className='text-[12px] font-bold w-full text-center text-white'>Public Health</p>
        </div>
        <div className='w-[134.69px] h-[8.56px] flex justify-between items-center'>
          <Circle len='1.22px' />
          <Circle len='2.45px' />
          <Circle len='8.56px' />
          <Circle len='5.51px' />
          <Circle len='2.45px' />
          <Circle len='2.45px' />
          <Circle len='3.67px' />
          <Circle len='2.45px' />
          <Circle len='2.45px' />
          <Circle len='2.45px' />
          <Circle len='3.67px' />
          <Circle len='2.45px' />
        </div>
      </div>
      <Top op={opacity.top} />
      <Mid op={opacity.mid} />
      <Low op={opacity.low} />
    </div>
  );
}
