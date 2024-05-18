import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    type?: string;
    loading?: boolean;
    children: React.ReactNode; 
    onClick?: () => void;
}

const buttonclasses: Record<string, string> = {
    'base': 'w-full py-2 px-4 rounded-full flex items-center justify-center gap-2',
    'default': 'text-white',
    'disabled': 'pointer-events-none'
}

const Button: React.FC<ButtonProps> = ({ type = 'default', loading = false, children, onClick }) => {

    const ButtonContent = (
        <motion.button 
            className={`${buttonclasses.base} ${buttonclasses[type]} ${ !loading ? '': buttonclasses.disabled }`}
            animate={{ backgroundColor: loading ? 'rgba(176, 184, 205, 1)' : 'rgba(76, 123, 254, 1)' }}
            transition={{ duration: 0.5 }}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );

    return ButtonContent;
};


export default Button;
