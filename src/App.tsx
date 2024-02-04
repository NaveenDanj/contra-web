import { motion } from 'framer-motion';
import Card from './components/Game/Card';
import HelthBar from './components/Game/HelthBar';
import UserCard from './components/Game/UserCard';
import ChooseDeck from './components/Game/Dialog/ChooseDeck';


function App() {

  return (
    <div 
      className="tw-flex tw-justify-between tw-items-center tw-w-screen tw-h-[100vh] tw-flex-col tw-overflow-x-hidden tw-overflow-y-hidden" 
      style={{ background : 'url(\'./background/astral.jpg\')' , backgroundSize:'cover' , backgroundRepeat : 'no-repeat' , backgroundPosition: 'center' }}
    >
      
      <div className="tw-w-full tw-flex tw-justify-center tw-items-center tw-py-1 tw-px-1 tw-overflow-x-hidden tw-overflow-y-hidden ">
        <HelthBar />
      </div>

      <div className="tw-w-full tw-flex tw-justify-center tw-items-center tw-py-5 tw-gap-10 tw-px-1 tw-overflow-x-hidden tw-overflow-y-hidden">
        <Card />
        {/* <Card /> */}
      </div>

      <div className="tw-w-full tw-flex tw-justify-center tw-items-center tw-py-5 tw-px-1 tw-overflow-x-hidden tw-overflow-y-hidden">
        <UserCard />
      </div>

      <div className="tw-w-full tw-flex tw-justify-center tw-items-center tw-p-1 tw-gap-10 sm:tw-pt-1 tw-overflow-x-hidden tw-overflow-y-hidden ">
        <ChooseDeck />

        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className='tw-my-auto tw-ml-1 tw-bg-white tw-backdrop-filter hover:tw-border-[#733750] tw-flex tw-justify-center tw-items-center tw-backdrop-blur-lg tw-bg-opacity-10  tw-w-[48px]  tw-h-[48px] tw-rounded-full tw-cursor-pointer tw-border-[2px]'>
          <img className='tw-w-[24px]' src='./icons/defense.png' />
        </motion.div>

        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className='tw-my-auto tw-ml-1 tw-bg-white tw-backdrop-filter hover:tw-border-[#733750] tw-flex tw-justify-center tw-items-center tw-backdrop-blur-lg tw-bg-opacity-10  tw-w-[48px]  tw-h-[48px] tw-rounded-full tw-cursor-pointer tw-border-[2px]'>
          <img className='tw-w-[24px]' src='./icons/defense.png' />
        </motion.div>
      </div>

      <div className="tw-w-full tw-flex tw-justify-center tw-items-center tw-py-1 tw-px-1">
        <HelthBar />
      </div>

    </div>
  );
}

export default App;
