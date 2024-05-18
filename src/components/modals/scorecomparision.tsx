import BasicModal from "./modalbox";
import { useState } from "react";
import Button from "../clickables/button";

const titles = {
    "globalaverage": "Pretty average!",
    "greaterglobalaverage": "Not bad for a human!",
    "lesserglobalaverage": "Yikes, human!",
    "perfect": "Wow, I'm impressed!",
    "one": "Participation points!",
    "zero": "Try again tomorrow!",
}

const messages = {
    "globalaverage": "Guess you’re as smart as the average dummy. Keep working to stand out!",
    "greaterglobalaverage": "You beat the average dummy, but you’ll still need time to beat AI.",
    "lesserglobalaverage": "It’s hard to beat AI, but how did you lose to the average dummy?",
    "perfect": "Looks like you’re as smart as AI, for now...",
    "one": "You might not have that many brain cells, but at least you have some!",
    "zero": "It’s honestly surprising you have made it this far through life with just a brain stem.",
}

function ScoreBar({ score }: { score: number }) {
    return (
        <div className="w-full h-4 bg-blue-illustration rounded-lg">
            <div className="rounded-lg" style={{ width: `${score * 10}%` }}></div>
        </div>
    );
}

export default function ScoreComparision({ score , globalAverage }: { score: number, globalAverage: number }) {
    const [open, setOpen] = useState(false);

    const title = score === 0 ? "zero" : score === 1 ? "one" : score === globalAverage ? "globalaverage" : score > globalAverage ? "greaterglobalaverage" : "lesserglobalaverage";

    return (
        <div className="w-full">
            <Button
            onClick={() => setOpen(true)}
            >
                Compare Score
            </Button>
            <BasicModal
            height='356px'
            width='320px'
            open={open}
            setOpen={setOpen}
            >
            <div className="w-full relative">
                <div className="absolute top-0 right-0 p-2 cursor-pointer text-text-primary" onClick={() => setOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div>
                    <h1>{titles[title]}</h1>
                    <p>{messages[title]}</p>
                    <ScoreBar score={score} />
                </div>
            </div>
            </BasicModal>
        </div>
    );
}