import { ReactNode } from "react";
import IconComponent from '../icon';

interface BotMessageProps {
  children: ReactNode;
}

export default function BotMessage({ children }: BotMessageProps) {
    return (
        <div className="flex flex-col items-start w-full">
            <div className="flex flex-row items-center gap-2">
                <IconComponent
                name="ChatBot-small"
                classNames="size-8"
                />
                <span className="text-text-secondary font-light">
                    DUMBSPLAIN BOT
                </span>
            </div>
            <div className="pl-10 w-full">
                <div className="text-left w-full">
                    {children}
                </div>
            </div>
        </div>
    );
}