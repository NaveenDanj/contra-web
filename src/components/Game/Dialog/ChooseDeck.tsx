import * as React from 'react';
import { motion } from 'framer-motion';
import Card from '../Card';
import CloseIcon from '@mui/icons-material/Close';


export default function ChooseDeck() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className=' tw-z-50'>
      
      <motion.div onClick={handleClickOpen} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className='tw-my-auto tw-ml-1 tw-bg-white tw-backdrop-filter hover:tw-border-[#733750] tw-flex tw-justify-center tw-items-center tw-backdrop-blur-lg tw-bg-opacity-10  tw-w-[48px]  tw-h-[48px] tw-rounded-full tw-cursor-pointer tw-border-[2px]'>
        <img className='tw-w-[24px]' src='./icons/defense.png' />
      </motion.div>

      {open && (
        <div style={{ background : 'url(\'./background/landing.jpg\')' , backgroundSize:'cover' , backgroundRepeat : 'no-repeat' , backgroundPosition: 'center' }} className="transparent-dialog">
          <div className='tw-bg-white tw-backdrop-filter tw-backdrop-blur-md tw-flex-col tw-bg-opacity-0 tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center'>

            <div className='tw-flex tw-flex-col tw-my-2 tw-gap-5'>

              <motion.button onClick={handleClose} whileHover={{ scale: 1.0 }} whileTap={{ scale: 0.8 }} className='tw-bg-[#6C4BB8]  tw-mx-auto'>
                <CloseIcon />
              </motion.button>

              <center><label className='tw-font-rajdhani tw-text-5xl tw-my-10'>Choose your <span className='tw-text-[#6C4BB8]'>Battle</span> Cards</label></center>
              
            </div>
            <center>
              <div className='tw-flex tw-flex-col tw-justify-center tw-items-center md:tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-16 xl:tw-grid-cols-4 tw-w-full tw-max-w-[100vw] tw-p-10 tw-overflow-x-hidden tw-overflow-y-auto tw-h-[calc(100vh-175px)]  tw-py-5'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

              </div>
            </center>

          </div>
        </div>
      )}

    </div>
  );
}