import { ReactNode } from "react";

interface BotMessageProps {
  children: ReactNode;
}

export default function BotMessage({ children }: BotMessageProps) {
    return (
        <div className="flex flex-row items-center gap-2">
        <img
            className="w-8 h-8 rounded-full"
            src="icons/ChatBot-small.png"
            alt="Profile"
        />
        <div className="flex flex-col p-2 bg-gray-100 rounded-lg">
            {children}
        </div>
        </div>
    );
}