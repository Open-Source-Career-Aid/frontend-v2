import * as React from 'react';
import { motion } from 'framer-motion';

type BasicModalProps = {
  children: React.ReactNode;
  height: string;
  width: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BasicModal({ children, height, width, open, setOpen }: BasicModalProps) {
  const handleClose = () => setOpen(false);

  if (!height || !width || !height.endsWith('px') || !width.endsWith('px')) {
    throw new Error('height and width must be provided');
  }

  return (
    <div>
      {open ? (
        <React.Fragment>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50" onClick={handleClose}></div>
            <motion.div className="bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 z-50 overflow-hidden"
            style={{
              height: height,
              width: width,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            >
              {children}
            </motion.div>
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
}