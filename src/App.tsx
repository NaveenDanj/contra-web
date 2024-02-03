import { motion } from 'framer-motion';
import Card from './components/Game/Card';
import HelthBar from './components/Game/HelthBar';
import UserCard from './components/Game/UserCard';


function App() {

  return (
    <div 
      className="tw-flex tw-justify-between tw-items-center tw-w-screen tw-min-h-screen tw-flex-col" 
      style={{ background : 'url(\'./background/astral.jpg\')' , backgroundSize:'cover' , backgroundRepeat : 'no-repeat' , backgroundPosition: 'center' }}
    >
      
      <div className="tw-w-full tw-flex tw-justify-center tw-items-center tw-py-5 tw-px-1">
        <HelthBar />
      </div>

      <div className="tw-w-full tw-flex tw-justify-center tw-items-center tw-py-5 tw-px-1">
        <Card />
      </div>

      <div className="tw-w-full tw-flex tw-justify-center tw-items-center tw-py-5 tw-px-1">
        <UserCard />
      </div>

      <div className="tw-w-full tw-flex tw-justify-center tw-items-center tw-p-1 tw-gap-10 sm:tw-pt-1">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className='tw-my-auto tw-ml-1 tw-bg-white tw-backdrop-filter hover:tw-border-[#733750] tw-flex tw-justify-center tw-items-center tw-backdrop-blur-lg tw-bg-opacity-10  tw-w-[48px]  tw-h-[48px] tw-rounded-full tw-cursor-pointer tw-border-[2px]'>
          <img className='tw-w-[24px]' src='./icons/defense.png' />
        </motion.div>

        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className='tw-my-auto tw-ml-1 tw-bg-white tw-backdrop-filter hover:tw-border-[#733750] tw-flex tw-justify-center tw-items-center tw-backdrop-blur-lg tw-bg-opacity-10  tw-w-[48px]  tw-h-[48px] tw-rounded-full tw-cursor-pointer tw-border-[2px]'>
          <img className='tw-w-[24px]' src='./icons/defense.png' />
        </motion.div>

        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className='tw-my-auto tw-ml-1 tw-bg-white tw-backdrop-filter hover:tw-border-[#733750] tw-flex tw-justify-center tw-items-center tw-backdrop-blur-lg tw-bg-opacity-10  tw-w-[48px]  tw-h-[48px] tw-rounded-full tw-cursor-pointer tw-border-[2px]'>
          <img className='tw-w-[24px]' src='./icons/defense.png' />
        </motion.div>
      </div>

      <div className="tw-w-full tw-flex tw-justify-center tw-items-center tw-py-5 tw-px-1">
        <HelthBar />
      </div>

      

    </div>
  );
}

export default App;
