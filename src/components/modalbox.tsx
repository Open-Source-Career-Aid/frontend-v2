import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  p: 4,
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
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center rounded-md drop-shadow-lg"
      >
        <Box sx={style} className='rounded-md dark:bg-gray-800 dark:text-white w-[400px] h-[600px]'>
         {children}
        </Box>
      </Modal>
    </div>
  );
}