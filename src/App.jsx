import menu from './assets/Menu.png';
import chat from './assets/Chat.svg';
import project from './assets/project.png';
import eye from './assets/Context.png';
import { IoIosArrowForward } from "react-icons/io";
import option1 from './assets/option1.png';
import option2 from './assets/option2.png';
import option3 from './assets/option3.png';
import left from './assets/left.png';
import './App.css';
import Ecosystem from './Ecosystem';
import Cloud from './Cloud';
import start from './assets/start.svg';
import cross from './assets/cross.svg';
export default function App() {
  return (
    <>
      <div className="w-[2400px] h-[900px] bgcolor relative">
        <Cloud />
        {/* Header */}
        <div className="w-full h-[128px] flex flex-col items-center justify-center">
          <div className='w-full h-[72px] flex justify-center headerBg text-[#ffffff]'>
            <div className="w-[2320px] h-full flex justify-between items-center">
              <div className='w-[250px] h-[72px] flex items-center justify-start space-x-3 z-10'>
                <div className='flex h-[24px] items-center space-x-2'>
                  <div>
                    <img src={menu} className='w-[24px] h-[24px]' />
                  </div>
                  <div className='text-[16px]'>HEALTH LANDSCAPE</div>
                </div>

              </div>
              <div className='w-[354px] h-[36.76px]  flex justify-between items-center'>
                <div className='w-[90px] h-[24px] text-center text-[#C0F7FF]'>EXPLORE</div>
                <div className='w-[90px] h-[24px] text-center'>MONITOR</div>
                <div className='w-[90px] h-[24px] text-center  text-[#C0F7FF]'>ANALYSE</div>
                
              </div>
              <div className='w-[250px] h-[72px] flex items-center justify-end space-x-3 z-10'>
                <div className='flex h-[24px] items-center space-x-2'>
                  <div>
                    <img src={chat} className='w-[24px] h-[24px] ' />
                  </div>
                  <div className='text-[16px]'>Chat</div>
                </div>

              </div>
            </div>


          </div>
          <div className='w-[603px] h-[56px] flex justify-center items-end text-[#ffffff] relative' style={{ backgroundImage: `url(${project})` }}>
            <div className='w-[245px] h-[38px] flex justify-between'>
              <div className='w-[95px] h-[38px] flex items-start justify-center'>
                PROJECT
              </div>
              <div className='w-[43px] h-[38px] flex items-start justify-center'>
                KPT
              </div>
              <div className='w-[78px] h-[38px] flex items-start justify-center'>
                BUDGET
              </div>
              <div className='absolute top-[17px] left-[512px]'>
                <img src={cross} alt='cross' />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[796px]  opacity-60 -mt-[24px] flex">
          <div className='w-[431px] h-full '>
            <div className='w-[366px] h-[60px] ml-[40px] flex justify-between items-center'>
              <div className='w-[60px] h-[60px] bg-[#043B5A] rounded-full flex justify-center items-center'>
                <img src={left} alt='left' />
              </div>
              <div className='w-[286px] h-[30px] text-white text-[20px]'>
                Health Ecosystem
              </div>
            </div>
            <div className='w-[367px] h-[611px] leftside rounded-2xl ml-[40px] mt-[28px] flex justify-center items-center '>
              <div className='w-[367px] h-[480px] flex flex-col justify-between items-center '>
                <div className='w-full h-[224px]  flex flex-col justify-between items-center'>
                  <div className='w-[48px] h-[48px] '>
                    <img src={eye} alt='eye' />
                  </div>
                  <div className='w-[317px] h-[136px] '>
                    <div className='w-full h-[38px] text-center text-white text-[32px] font-bold'>Context Explorer</div>
                    <div className='w-full h-[90px] text-center text-white text-[22px] leading-[30px]'><p>Expore insights by strategic <br></br> objectives, topics and<br></br> by personas.</p></div>
                  </div>
                </div>
                <div className='w-[225px] h-[66px] rounded-[120px] leftside border-[1px] border-[#239DA9] flex justify-center items-center'>
                  <div className='w-[215px] h-[56px] rounded-[120px] bg-[#239DA9]  flex justify-around items-center text-white text-[25px]'><div>START</div>

                  <div>
                    <img src={start} alt='start' />
                  </div>

                  </div>
                 
                </div>
              </div>
            </div>
          </div>
          <Ecosystem />
          <div className='w-[431px] h-full'>
            <div className='w-[367px] h-[76px] flex justify-around items-center rounded-[64px] rightside'>
              <div className='w-[6px] h-[12px] text-white'>
                <img src={left} alt='left' />
              </div>
              <div className='relative w-[60px] h-[60px] rounded-full flex justify-center items-center bg-[#045F6C] border-[2px] border-[#5396AB]'>
                 <div className='absolute w-[10px] h-[10px] bg-[#2DC85D] rounded-full  left-[47px] top-[5px]'></div> 
                <img src={option1} alt='option1' className='w-[39.46px] h-[42.36px]' />
              </div>
              <div className='w-[60px] h-[60px] rounded-full flex justify-center items-center bg-[#045F6C] relative'>
              <div className='absolute w-[10px] h-[10px] bg-[#2DC85D] rounded-full  left-[47px] top-[5px]'></div> 
                <img src={option2} alt='option1' className='w-[39.46px] h-[42.36px]' />
              </div>
              <div className='w-[60px] h-[60px] rounded-full flex justify-center items-center bg-[#045F6C] relative'>
              <div className='absolute w-[10px] h-[10px] bg-[#2DC85D] rounded-full  left-[47px] top-[5px]'></div> 
                <img src={option3} alt='option1' className='w-[39.46px] h-[42.36px]' />
              </div>
              <div className='w-[6px] h-[12px] text-white'>
                <IoIosArrowForward className='w-[12px] h-[24px] ' />
              </div>
            </div>

          </div>
        </div>

      </div>

    </>
  )
}