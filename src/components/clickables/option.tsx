import React from 'react';
import { motion } from 'framer-motion';

type OptionProps = {
    children: React.ReactNode;
    onClick: () => void;
    selected: boolean;
    delay: number;
};

type OptionsProps = {
    options: string[];
    onChange: (index: number) => void;
};

const optionClasses = {
    base: 'flex items-center justify-between w-full py-2 px-4 text-left text-text-primary rounded-lg border-blue-primary border cursor-pointer',
    basebg: 'bg-white',
    selected: 'bg-blue-selected',
    onhover: 'bg-blue-hover',
};

export function Option({
  children,
  onClick,
  selected = false,
  delay,
  ...props
}: OptionProps) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2 , delay: delay }}
    exit={{ opacity: 0 }}
    >
        <motion.button
        whileHover={{ backgroundColor: 'rgba(132, 163, 250, 1)' }}
        className={`${optionClasses.base} ${selected ? optionClasses.selected : optionClasses.basebg}`}
        onClick={onClick}
        {...props}
        >
        {children}
        </motion.button>
    </motion.div>
  );
}

export default function Options({ options, onChange }: OptionsProps) {
    const [selected, setSelected] = React.useState<number | null>(null);

    const handleChange = (index: number) => {
        setSelected(index);
        onChange(index);
    }

    return (
        <div className="flex flex-col gap-3 py-4">
            {options.map((option, index) => (
                <Option
                key={index}
                onClick={() => handleChange(index)}
                selected={selected === index}
                delay={index * 0.1}
                >
                    {option}
                </Option>
            ))}
        </div>
    );
}