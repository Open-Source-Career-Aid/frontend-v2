import React from "react";
import { ReactDOM } from "react";

const icons = ['arrow', 'award', 'chatbot_lg', 'chatbot_sm', 'check', 'help', 'lightbulb', 'logo', 'user', 'world', 'x']

export default function Icon({ id }: { id: string }, { ...props }) {
  return (
    <svg {...props}>
      <use href={`/sprite.svg#${id}`} />
    </svg>
  );
}