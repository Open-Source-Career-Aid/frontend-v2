import * as React from 'react';

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
            <div className={`h-[${height}] w-[${width}] bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-70 z-50`}>
              {children}
            </div>
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
}