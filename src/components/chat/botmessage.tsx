import { ReactNode } from "react";

interface BotMessageProps {
  children: ReactNode;
}

export default function BotMessage({ children }: BotMessageProps) {
    return (
        <div className="flex flex-col items-start">
            <div className="flex flex-row items-center gap-2">
                <img
                    className="size-8"
                    src="/icons/ChatBot-small.png"
                    alt="Profile"
                />
                <span>
                    DUMBSPLAIN BOT
                </span>
            </div>
            <div className="pl-10">
                <div className="">
                    {children}
                </div>
            </div>
        </div>
    );
}