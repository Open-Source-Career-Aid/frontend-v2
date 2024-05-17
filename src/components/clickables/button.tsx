import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lightbulb } from 'lucide-react'; 

interface ButtonProps {
    to?: string;
    loading: boolean;
    children?: React.ReactNode; 
    className?: string;
    animate?: any;
    transition?: any;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ to, loading, children, className, animate, transition, onClick }) => {
    const defaultClasses = `text-white py-2 px-4 rounded-full shadow-lg flex items-center justify-center space-x-2`;
    const buttonClasses = `${defaultClasses} ${className}`;

    const ButtonContent = (
        <motion.button 
            className={buttonClasses}
            animate={animate}
            transition={transition}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );

    return to ? <Link to={to}>{ButtonContent}</Link> : ButtonContent;
};


export default Button;
