import React from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

type OptionProps = {
    children: React.ReactNode;
    onClick: () => void;
    selected: boolean;
    delay: number;
    disabled: boolean;
    isCorrect?: boolean;
    [x: string]: any;
};

type OptionsProps = {
    options: string[];
    onChange: (index: number) => void;
    disabled: boolean;
    correctOption: number;
    [x: string]: any;
};

const optionClasses = {
    base: 'flex items-center justify-between w-full py-2 px-4 text-left text-text-primary rounded-lg border-blue-primary border cursor-pointer',
    basebg: 'bg-white',
    selected: 'bg-blue-selected',
    onhover: 'bg-blue-hover',
    disabled: 'bg-disabled-button'
};

const disabledClasses = {
    "baseDisabled": "flex items-center justify-between w-full py-2 px-4 text-left text-text-primary rounded-lg",
    "grayDisabled": "bg-unselected-option",
    "correctDisabled": "bg-green-lite",
    "wrongDisabled": "bg-red-lite",
    "correctHighlightDisabled": "border-green-lite border-2"
};

export function Option({
  children,
  onClick,
  selected = false,
  disabled = false,
  isCorrect = false,
  delay,
  ...props
}: OptionProps) {
  const [disabledClass, setDisabledClass] = React.useState('');

  useEffect(() => {
    if (disabled) {
      if (isCorrect && selected) {
        setDisabledClass(disabledClasses.correctDisabled);
      } else if (!isCorrect && selected) {
        setDisabledClass(disabledClasses.wrongDisabled);
      } else if (isCorrect) {
        setDisabledClass(disabledClasses.correctHighlightDisabled);
      } else {
        setDisabledClass(disabledClasses.grayDisabled);
      }
    }
  }, [disabled, isCorrect, selected]);

  const handleAnimationEnd = () => {
    if (props.isLastOption) {
      props.onAnimationEnd();
    }
  }

  return (
    <motion.div
    initial={{ opacity: 0 , y: '100%' }}
    animate={{ opacity: 1 , y: 0 }}
    transition={{ duration: 0.2 , delay: delay * 3 }}
    exit={{ opacity: 0 }}
    onAnimationComplete={handleAnimationEnd}
    >
        { !disabled ?
        <motion.button
        whileHover={{ backgroundColor: 'rgba(132, 163, 250, 1)' }}
        className={`${optionClasses.base}`}
        onClick={onClick}
        animate={{ backgroundColor: selected ? 'rgba(132, 163, 250, 1)' : 'rgba(255, 255, 255, 1)' }}
        transition={{ duration: 0.2 }}
        {...props}
        >
        {children}
        </motion.button> :
        <motion.div
        className={`${disabledClass} ${disabledClasses.baseDisabled}`}
        {...props}
        >
        {children}
        </motion.div>
        }
    </motion.div>
  );
}

export default function Options({ options, disabled, correctOption, onChange, ...props }: OptionsProps) {
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
                selected={selected === index}
                isCorrect={correctOption === index}
                onClick={() => handleChange(index)}
                delay={index * 0.1}
                disabled={disabled}
                isLastOption={index === options.length - 1}
                {...props}
                >
                    {option}
                </Option>
            ))}
        </div>
    );
}