import React from 'react'
import bg1 from './assets/bg1.svg';
import bg2 from './assets/bg2.svg';
import bg3 from './assets/bg3.svg';
import bg4 from './assets/bg4.svg';
import bg5 from './assets/bg5.svg';
import bg6 from './assets/bg6.svg';
import bg7 from './assets/bg7.svg';
import bg8 from './assets/bg8.svg';
import bg9 from './assets/bg9.svg';
import bg10 from './assets/bg10.svg';
export default function Top() {
    return (
        <div className='w-[1047px] h-[107px] absolute top-[36px] left-[246px] text-center text-white leading-[13.2px]  font-bold text-[11px]'>
            <div className='absolute w-[193px] h-[78px] top-[32px] left-[6px] text-center text-white' style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'contain',backgroundSize: '208px 78.1px',backgroundPosition: '-8px 0px', backgroundRepeat: 'no-repeat' , }}>
                <p className='mt-[22px] ml-[36px] text-[#FFFFFF]'>Workforce<br />Development</p>
            </div>
            <div className='w-[140px] h-[66px] absolute top-[12px] left-[148px]'style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'contain',backgroundSize: '155.64px 72px',backgroundPosition: '-11px -6px', backgroundRepeat: 'no-repeat' , }}>
                <p className='mt-[11px] ml-[29px]'> Durable<br />Medical<br />Equipments</p>
            </div>
            <div className='w-[112px] h-[60px] absolute top-[1px] left-[254px]' style={{ backgroundImage: `url(${bg3})`, backgroundSize: 'contain',backgroundSize: '125.44px 76px',backgroundPosition: '-16px -16px', backgroundRepeat: 'no-repeat' , }}>
               <p className='mt-[16px] ml-[14px]'> Research & <br />Technology</p>
            </div>
            <div className='w-[93px] h-[52.95px] absolute -top-[1px] left-[349px]' style={{ backgroundImage: `url(${bg4})`, backgroundSize: 'contain',backgroundSize: '93px 52px',backgroundPosition: '0px 0px', backgroundRepeat: 'no-repeat' , }}>
                <p className='mt-[12px] ml-[10px]'>Pharmaceu-<br />ticals</p>
            </div>
            <div className='w-[82.07px] h-[49.44px] absolute -top-[4px] left-[437px]' style={{ backgroundImage: `url(${bg5})`, backgroundSize: 'contain',backgroundSize: '82.07px  49.44px',backgroundPosition: '0px 0px', backgroundRepeat: 'no-repeat' , }}>
                <p className='mt-[4px] ml-[9px]'>Health<br />Information<br />System</p>
            </div>
            <div className='w-[82.07px] h-[49.44px] absolute -top-[4px] left-[526px]' style={{ backgroundImage: `url(${bg6})`, backgroundSize: 'contain',backgroundSize: '82.07px  49.44px',backgroundPosition: '0px 0px', backgroundRepeat: 'no-repeat' , }}>
                <p className='mt-[17px] ml-[0px]'>Insurance</p>
            </div>
            <div className='w-[93px] h-[52.95px] absolute left-[603px]' style={{ backgroundImage: `url(${bg7})`, backgroundSize: 'contain',backgroundSize: '93px  52.94px',backgroundPosition: '0px 0px', backgroundRepeat: 'no-repeat' , }}>
               <p className='mt-[12px] -ml-[7px]'> Policy &<br />Regulations</p>

            </div>
            <div className='w-[110px] h-[59px] absolute top-[2px] left-[679px]' style={{ backgroundImage: `url(${bg8})`, backgroundSize: 'contain',backgroundSize: '125px  75px',backgroundPosition: '0px -16px', backgroundRepeat: 'no-repeat' , }}>
               <p className='mt-[15px] -ml-[10px]'> Health<br />Financing</p>
            </div>
            <div className='w-[137px] h-[64px] absolute top-[13px] left-[759px]' style={{ backgroundImage: `url(${bg9})`, backgroundSize: 'contain',backgroundSize: '155.14px  72px',backgroundPosition: '-6px -8px', backgroundRepeat: 'no-repeat' , }}>
                <p className='mt-[9px] -ml-[19px]'>Physical &<br />Digital<br />Infrastructure</p>
            </div>
            <div className='w-[191px] h-[78px] absolute top-[29px] left-[852px] text-center' style={{ backgroundImage: `url(${bg10})`, backgroundSize: 'contain',backgroundSize: '207.5px  78.1px',backgroundPosition: '-8px 0px', backgroundRepeat: 'no-repeat' , }}>
                <p className='mt-[16px] -ml-[18px]'>Epidemiology <br />& Emergency<br /> Preparedness</p>
            </div>
        </div>
    )
}

