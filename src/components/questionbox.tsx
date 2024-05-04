import React from 'react';

const test_data = {
    message: "Hello World",
    "question": "What is the capital of France?",
    "options": [
        "Paris",
        "London",
        "Berlin",
        "Madrid"
    ]
}

export default function QuestionBox() {
    const questionBoxHeader = React.useRef<HTMLDivElement>(null);
    return (
        <div className="flex flex-col border border-1 border-black flex-grow rounded-lg overflow-hidden">
            <div className="border border-b-1 bg-gray-200 w-full" ref={questionBoxHeader}>
                <span>Topic of the day:</span>
                <span className="font-bold">General Knowledge</span>
            </div>
            <div className="overflow-y-scroll p-4 flex flex-col gap-4 justify-start items-left"
                style={{ height: `calc(100% - ${questionBoxHeader.current?.clientHeight}px)` }}
            >
                <div className="text-left text-lg font-bold">{test_data.message}</div>
                <div className="text-left font-bold text-lg">{test_data.question}</div>
                {/* make the list numbered */}
                <ol className="flex flex-col gap-4">
                    {test_data.options.map((option, index) => {
                        return (
                            <li key={index} className="text-left">
                                <span className="">{index + 1}. </span>
                                {option}
                            </li>
                        )
                    })}
                </ol>
            </div>
        </div>
    )
}