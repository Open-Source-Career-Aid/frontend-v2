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
    'disabled': 'pointer-events-none',
    'loading': 'bg-card-outlining-strong text-white',  
    'hover': 'bg-blue-hover', 
    'blueOutline': 'text-blue-primary bg-transparent border border-blue-primary hover:bg-blue-hover',
    'blueOutlineHover': 'hover:bg-blue-hover', 
    'blueOutlineDisabled': 'bg-transparent text-disabled-button border-disabled-button cursor-not-allowed',
    'blueOutlineLoading': 'bg-card-outlining-strong text-white border-transparent'
}

const anumationAfterVariants: Record<string, string> = {
    "default": 'rgba(76, 123, 254, 1)',
    "blueOutline": 'transparent',
}

const anumationBeforeVariants: Record<string, string> = {
    "default": 'rgba(176, 184, 205, 1)',
    "blueOutline": 'rgba(76, 123, 254, 1)'
}

const Button: React.FC<ButtonProps> = ({ type = 'default', loading = false, children, onClick }) => {

    const ButtonContent = (
        <motion.button 
            className={`${buttonclasses.base} ${buttonclasses[type]} ${ !loading ? '': buttonclasses.disabled }`}
            animate={{ backgroundColor: loading ? anumationBeforeVariants[type]: anumationAfterVariants[type] }}
            transition={{ duration: 0.5 }}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );

    return ButtonContent;
};


export default Button;
