import React, { useState } from 'react';
import top from './assets/top.png';
import ltop from './assets/ltop.png';
import mid from './assets/mid.png';
import low from './assets/low.png';
import Circle from './Circle';

export default function Ecosystem() {
  const [imageStyles, setImageStyles] = useState({
    top: { width: '1047px', height: '107px', opacity: 1 },
    ltop: { width: '802px', height: '353px', opacity: 1 },
    mid: { width: '160.09px', height: '86.82px', opacity: 1 },
    low: { width: '1297px', height: '353px', opacity: 1 }
  });

  const handleResilientHealthClick = () => {
    if (imageStyles.top.width === '1047px') {
      setImageStyles({
        ...imageStyles,
        top: { ...imageStyles.top, width: '1100px', height: '130px', opacity: 1 },
        ltop: { ...imageStyles.ltop, opacity: 0.2 },
        mid: { ...imageStyles.mid, opacity: 0.2 },
        low: { ...imageStyles.low, opacity: 0.2 }
      });
    } else {
      setImageStyles({
        ...imageStyles,
        top: { ...imageStyles.top, width: '1047px', height: '107px', opacity: 1 },
        ltop: { ...imageStyles.ltop, opacity: 1 },
        mid: { ...imageStyles.mid, opacity: 1 },
        low: { ...imageStyles.low, opacity: 1 }
      });
    }
  };

  const handleAccessQualityCareClick = () => {
    if (imageStyles.ltop.width === '802px') {
      setImageStyles({
        ...imageStyles,
        ltop: { ...imageStyles.ltop, width: '850px', height: '400px', opacity: 1 },
        top: { ...imageStyles.top, opacity: 0.2 },
        mid: { ...imageStyles.mid, opacity: 0.2 },
        low: { ...imageStyles.low, opacity: 0.2 }
      });
    } else {
      setImageStyles({
        ...imageStyles,
        ltop: { ...imageStyles.ltop, width: '802px', height: '353px', opacity: 1 },
        top: { ...imageStyles.top, opacity: 1 },
        mid: { ...imageStyles.mid, opacity: 1 },
        low: { ...imageStyles.low, opacity: 1 }
      });
    }
  };

  const handlePublicHealthClick = () => {
    if (imageStyles.low.width === '1297px') {
      setImageStyles({
        ...imageStyles,
        low: { ...imageStyles.low, width: '1330px', height: '365px', opacity: 1 },
        top: { ...imageStyles.top, opacity: 0.2 },
        ltop: { ...imageStyles.ltop, opacity: 0.2 },
        mid: { ...imageStyles.mid, width: '180px', height: '90px', opacity: 1 }
      });
    } else {
      setImageStyles({
        ...imageStyles,
        low: { ...imageStyles.low, width: '1297px', height: '353px', opacity: 1 },
        top: { ...imageStyles.top, opacity: 1 },
        ltop: { ...imageStyles.ltop, opacity: 1 },
        mid: { ...imageStyles.mid, width: '160px', height: '86px', opacity: 1 }
      });
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
          <Circle len='8.56px'/>
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
      <div className='absolute top-[36px] left-[246px]'>
        <img src={top} alt='Top' className='w-[1047px] h-[107px] transition-all duration-1000' style={imageStyles.top} />
      </div>
      <div className='absolute top-[50px] left-[379px]'>
        <img src={ltop} alt='Top' className='w-[802px] h-[353px] transition-all duration-1000' style={imageStyles.ltop} />
      </div>
      <div className='absolute top-[356px] left-[689px]'>
        <img src={mid} alt='Top' className='w-[160.09px] h-[86.82px] transition-all duration-1000' style={imageStyles.mid} />
      </div>
      <div className='absolute top-[435px] left-[121px]'>
        <img src={low} alt='Top' className='w-[1297px] h-[353px] transition-all duration-1000' style={imageStyles.low} />
      </div>
    </div>
  );
}
