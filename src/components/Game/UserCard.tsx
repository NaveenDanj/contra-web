import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

function UserCard() {
  return (
    <div className='tw-flex tw-gap-3'>
        
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className='tw-my-auto tw-bg-white tw-backdrop-filter tw-flex hover:tw-border-[#D7C08A] tw-justify-center tw-items-center tw-backdrop-blur-lg tw-bg-opacity-10 sm:tw-w-16 tw-w-14 sm:tw-h-16 tw-h-14 tw-rounded-full tw-cursor-pointer tw-border-[2px]'>
        <img className='tw-w-[30px]' src='./icons/attack.png' />
      </motion.div>

      <Tilt>
        <div 
          style={{ background : 'url(\'./cards/Ace.png\')' , backgroundSize:'contain' , backgroundRepeat : 'no-repeat'}} 
          className="sm:tw-w-[190px] tw-w-[200px] sm:tw-h-[235px] tw-h-[250px]"
        >
        </div>
      </Tilt>

      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className='tw-my-auto tw-bg-white tw-backdrop-filter hover:tw-border-[#733750] tw-flex tw-justify-center tw-items-center tw-backdrop-blur-lg tw-bg-opacity-10  sm:tw-w-16 tw-w-14 sm:tw-h-16 tw-h-14 tw-rounded-full tw-cursor-pointer tw-border-[2px]'>
        <img className='tw-w-[30px]' src='./icons/defense.png' />
      </motion.div>

    </div>
  );
}

export default UserCard;