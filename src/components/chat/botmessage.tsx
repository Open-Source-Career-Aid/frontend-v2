import { ReactNode } from "react";

interface BotMessageProps {
    children: ReactNode;
    fullwidth?: boolean;
}

export default function BotMessage({ children , fullwidth = false }: BotMessageProps) {
    return (
        <div className="flex flex-col items-start w-full">
            <div className="flex flex-row items-center gap-2">
                <img
                    className="size-8"
                    src="/icons/ChatBot-small.png"
                    alt="Profile"
                />
                <span className="text-text-secondary font-light">
                    DUMBSPLAIN BOT
                </span>
            </div>
            <div className={"w-full" + (fullwidth ? "" : " pl-10")}>
                <div className="text-left w-full">
                    {children}
                </div>
            </div>
        </div>
    );
}