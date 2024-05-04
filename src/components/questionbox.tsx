import React from 'react';

export default function QuestionBox() {
    const questionBoxHeader = React.useRef<HTMLDivElement>(null);
    return (
        <div className="border border-1 border-black flex-grow rounded-lg overflow-hidden">
            <div className="border border-b-1 bg-gray-200 w-full" ref={questionBoxHeader}>
                <span>Topic of the day:</span>
                <span className="font-bold">General Knowledge</span>
            </div>
            <div className="overflow-y-scroll p-4"
                style={{ height: `calc(100% - ${questionBoxHeader.current?.clientHeight}px)` }}
            >
                <span>Question:</span>
                <span className="font-bold">What is the capital of France?</span>
            </div>
        </div>
    )
}