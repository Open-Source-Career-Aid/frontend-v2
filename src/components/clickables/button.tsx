import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps {
    to: string;
    type?: string;
    loading?: boolean;
    children: React.ReactNode; 
    onClick?: () => void;
}

const buttonclasses: Record<string, string> = {
    'base': 'w-full py-2 px-4 rounded-full flex items-center justify-center',
    'default': 'text-white'
}

const Button: React.FC<ButtonProps> = ({ to, type = 'default', loading = false, children, onClick }) => {

    const ButtonContent = (
        <motion.button 
            className={`${buttonclasses.base} ${buttonclasses[type]}`}
            animate={{ backgroundColor: loading ? 'rgba(176, 184, 205, 1)' : 'rgba(76, 123, 254, 1)' }}
            transition={{ duration: 0.5 }}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );

    return to ? <Link to={to}>{ButtonContent}</Link> : ButtonContent;
};


export default Button;
