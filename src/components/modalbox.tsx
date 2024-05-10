import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
};

export default function BasicModal({ buttonchildren, children }: { buttonchildren: React.ReactNode, children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>
        {buttonchildren}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        className="flex justify-center items-center bg-[rgba(255,255,255,0.7)]"
      >
        <Box sx={style} className='rounded-md dark:bg-gray-800 dark:text-white w-[400px] h-[600px] overflow-hidden focus:outline-none'>
         {children}
        </Box>
      </Modal>
    </div>
  );
}