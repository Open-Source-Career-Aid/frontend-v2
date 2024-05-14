import React from 'react';

type OptionProps = {
    children: React.ReactNode;
    onClick: () => void;
    selected: boolean;
};

type OptionsProps = {
    options: string[];
    onChange: (index: number) => void;
};

const optionClasses = {
    base: 'flex items-center justify-between w-full py-2 px-4 text-left text-text-primary bg-white rounded-lg border-blue-primary border',
    selected: 'bg-blue-selected',
};

export function Option({
  children,
  onClick,
  selected = false,
  ...props
}: OptionProps) {
  return (
    <>
        <button
        className={`${optionClasses.base} ${selected ? optionClasses.selected : ''}`}
        onClick={onClick}
        {...props}
        >
        {children}
        </button>
    </>
  );
}

export default function Options({ options, onChange }: OptionsProps) {
    const [selected, setSelected] = React.useState<number | null>(null);

    const handleChange = (index: number) => {
        setSelected(index);
        onChange(index);
    }

    return (
        <div className="flex flex-col gap-3">
            {options.map((option, index) => (
                <Option
                key={index}
                onClick={() => handleChange(index)}
                selected={selected === index}
                >
                    {option}
                </Option>
            ))}
        </div>
    );
}