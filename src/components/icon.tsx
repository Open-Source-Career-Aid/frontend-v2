import React from 'react';
const iconPaths: { [key: string]: string } = {
  'Arrow-continue': 'icons/Arrow-continue.svg',
  'Award': 'icons/Award.svg',
  'ChatBot-large': 'icons/ChatBot-large.svg',
  'ChatBot-small': 'icons/ChatBot-small.svg',
  'Check': 'icons/Check.svg',
  'Help': 'icons/Help.svg',
  'Lightbulb': 'icons/Lightbulb.svg',
  'Logo': 'icons/Logo.svg',
  'User': 'icons/User.svg',
  'World': 'icons/World.svg',
  'X': 'icons/X.svg',
};

interface IconComponentProps {
  name: string;
  classNames?: string;
}

const IconComponent: React.FC<IconComponentProps> = ({ name, classNames }) => {
  const path = iconPaths[name];

  if (!path) {
    console.error(`Icon "${name}" does not exist.`);
    return null;
  }

  return (
    <img src={path} alt={name} className={classNames} />
  );
};

export default IconComponent;
