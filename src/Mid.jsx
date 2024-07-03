import React from 'react'
import digital from './assets/digital.svg';
import Telehealth from './assets/Telehealth.svg';
import virtual from './assets/virtual.svg';
import consu from './assets/consu.svg';
import care from './assets/care.svg';
import first from './assets/first.svg';
import second from './assets/second.svg';
import leftimg from './assets/leftimg.svg';
import virtualcare from './assets/virtualcare.svg';
import word1 from './assets/word1.svg';
import rightimg from './assets/rightimg.svg';
import midimg from './assets/midimg.svg';
import lastone from './assets/lastone.svg';
import ring from './assets/ring.svg';
import primary from './assets/primary.svg';
import tertairy from './assets/tertairy.svg';
import secondary from './assets/secondary.svg';
export default function Mid() {
    return (
        <div className='w-[802px] h-[353px] absolute top-[50px] left-[379px] '>
            <div className='w-[301px] h-[130px]  absolute top-[53px] left-[245px] z-20'>
                <div className='w-[146px] h-[90px] absolute top-[40px] left-[77px] flex justify-center items-center'>
                    <div className='w-[117.46px] h-[72.98px] ' style={{ backgroundImage: `url(${digital})`, backgroundSize: 'contain', backgroundSize: '117.46px  72.98px', backgroundPosition: '0px 0px', backgroundRepeat: 'no-repeat', }}>
                        <p className='text-[11px] text-center font-bold mt-[51px]'>Digital Health</p>
                    </div>
                </div>
                <div className='w-[146px] h-[90px] absolute -left-[8px]  flex justify-center items-end'>
                    <div className='w-[112px] h-[66px] ' style={{ backgroundImage: `url(${Telehealth})`, backgroundSize: 'contain', backgroundSize: '112px  66px', backgroundPosition: '0px 0px', backgroundRepeat: 'no-repeat', }}>
                        <p className='text-[11px] text-center font-bold mt-[38px]'> Telehealth</p>
                    </div>
                </div>
                <div className='w-[146px] h-[90px] absolute  left-[155px]   flex justify-center items-end'>
                    <div className='w-[115.31px] h-[76.87px] ' style={{ backgroundImage: `url(${virtual})`, backgroundSize: '115.31px  76.87px', backgroundPosition: '0px 0px', backgroundRepeat: 'no-repeat', }}>
                        <p className='text-[11px] text-center font-bold mt-[42px] leading-[13.2px]'> Virtual Health<br />Monitoring</p>
                    </div>
                </div>

            </div>

            <div className='w-[316px] h-[109px] absolute top-[195px] left-[233px] flex justify-center items-center z-20'>
                <div className='w-[292.13px] h-[86.96px]' style={{ backgroundImage: `url(${consu})`, backgroundSize: '292.13px  86.96px', backgroundPosition: '0px 0px', backgroundRepeat: 'no-repeat', }}>
                    <div className='w-[242.52px] h-[29.06px] absolute top-[62.26px] left-[39.09px] flex justify-between text-white font-bold'>
                        <div className='text-[12px]'>Consultation</div>
                        <div className='text-[12px] leading-[14.4px]'>Outpatient<br />Setups</div>
                        <div className='text-[12px]'>Diagnostics</div>
                    </div>
                </div>
            </div>
            <div className='w-[608.81px] h-[75.1px] absolute top-[24px] left-[107px]' style={{ backgroundImage: `url(${care})`, backgroundSize: '608.81px 75.1px', backgroundPosition: '0px 0px', backgroundRepeat: 'no-repeat', }}>

            </div>

            <div className='w-[28.81px] h-[174.85px] absolute -top-[40px] left-[376px]' style={{ backgroundImage: `url(${first})`, backgroundSize: '28.81px 174.85px', backgroundPosition: '0px 0px', backgroundRepeat: 'no-repeat', }}></div>

            <div className='w-[28.81px] h-[174.85px] absolute top-[130px] left-[376px]' style={{ backgroundImage: `url(${second})`, backgroundSize: '28.81px 174.85px', backgroundPosition: '0px 0px', backgroundRepeat: 'no-repeat', }}></div>
            <div className='w-[28.81px] h-[174.85px] absolute top-[170px] left-[376px]' style={{ backgroundImage: `url(${lastone})`, backgroundSize: '28.81px 174.85px', backgroundPosition: '0px 0px', backgroundRepeat: 'no-repeat', }}></div>

            <div className='w-[282px] h-[238px] absolute top-[53px] -left-[6px]' >
                <div className='w-[189.53px] h-[197.02px] absolute top-[20px] left-[75px]' style={{ backgroundImage: `url(${leftimg})`, backgroundSize: '189.53px 197.02px', backgroundPosition: '0px 0px', backgroundRepeat: 'no-repeat', }}>
                </div>
                <div className='w-[64px] h-[14px] absolute top-[189px] left-[155px] text-white font-bold text-[12px] leading-[14.4px]' >Home Care</div>
                <div className='w-[61px] h-[27px] absolute top-[78px] left-[54px] text-white font-bold text-[11px] leading-[13.4px]  text-right' >Long Term<br />Care</div>
                <div className='w-[91px] h-[28px] absolute top-[28.88px] left-[64px] text-white font-bold text-[11px] leading-[13.4px]  text-right' >Rehabilitation &<br />Care Transition</div>
                <div className='w-[83px] h-[14px] absolute top-[140px] left-[29px] text-white font-bold text-[11px] leading-[13.4px]  text-right' >Palliative Care</div>
            </div>

            <div className='w-[192px] h-[118.41px] absolute top-[101px] left-[294px] z-0' style={{ backgroundImage: `url(${virtualcare})`, backgroundSize: '192px 118.41px', backgroundPosition: '0px 0px', backgroundRepeat: 'no-repeat', }}>
                <div className='w-[70.9px] h-[8.99px] absolute top-[81px] left-[63px]'>
                    <img src={word1} alt='word1' />
                </div>
            </div>


            <div className='w-[282px] h-[238px] absolute top-[51px] left-[514px]' >
                <div className='w-[214.25px] h-[189.54px] absolute top-[35px] left-[18px]' style={{ backgroundImage: `url(${rightimg})`, backgroundSize: '189.53px 197.02px', backgroundPosition: '0px 0px', backgroundRepeat: 'no-repeat', }}>
                    <div className='w-[58px] h-[14px] absolute top-[3px] left-[100.27px] text-white font-bold text-[12px] leading-[14.4px]' >Advanced<br />Diagnostics</div>
                    <div className='w-[65px] h-[28px] absolute top-[145.44px] left-[110.25px] text-white font-bold text-[11px] leading-[13.4px]  text-left' >Emergency<br />Services</div>
                    <div className='w-[59px] h-[14px] absolute top-[101.44px] left-[152.25px] text-white font-bold text-[11px] leading-[13.4px]  text-right' >Inpatients</div>
                    <div className='w-[67px] h-[28px] absolute top-[43.62px] left-[144.25px] text-white font-bold text-[11px] leading-[13.4px]  text-left' >Specialized<br />Services</div>
                </div>

            </div>

            <div className='w-[441.58px] h-[190.76px] absolute top-[81px] left-[169px]' style={{ backgroundImage: `url(${midimg})`, backgroundSize: '441.58px 190.76px', backgroundPosition: '0px 0px', backgroundRepeat: 'no-repeat', }}>
            </div>

            <div className='w-[683px] h-[226.32px] absolute top-[97px] left-[56px]' style={{ backgroundImage: `url(${ring})`, backgroundSize: '683px 226.32px', backgroundPosition: '0px 0px', backgroundRepeat: 'no-repeat', }}>

                <div className='w-[77px] h-[12.5px] absolute top-[210.31px] left-[294.07px]' style={{ backgroundImage: `url(${primary})`, backgroundSize: '77px 12.5px', backgroundPosition: '0px 0px', backgroundRepeat: 'no-repeat', }}></div>

                <div className='w-[71.31px] h-[40.59px] absolute top-[160.97px] left-[55.43px]' style={{ backgroundImage: `url(${tertairy})`, backgroundSize: '71.31px 40.59px', backgroundPosition: '0px 0px', backgroundRepeat: 'no-repeat', }}></div>

                <div className='w-[85.57px] h-[56.68px] absolute top-[148.64px] left-[555.91px]' style={{ backgroundImage: `url(${secondary})`, backgroundSize: '85.57px 56.68px', backgroundPosition: '0px 0px', backgroundRepeat: 'no-repeat', }}></div>


            </div>
        </div>
    )
}

