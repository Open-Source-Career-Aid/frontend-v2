import { ReactNode } from "react";

interface HintMessageProps {
  children: ReactNode;
}

export default function HintMessage({ children }: HintMessageProps) {
    return (
        <div className="flex flex-col items-start w-full">
            <div className="flex flex-row items-center gap-2">
                <img
                    className="size-8"
                    src="/icons/Lightbulb.png"
                    alt="Profile"
                />
                <span className="text-text-secondary font-light">
                    HINT
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