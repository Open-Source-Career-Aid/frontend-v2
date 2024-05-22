import BasicModal from "./modalbox";
import { useState } from "react";
import Button from "../clickables/button";
import Cross from "../clickables/cross";

const titles: { [key: string]: string } = {
    "globalaverage": "Pretty average!",
    "greaterglobalaverage": "Not bad for a human!",
    "lesserglobalaverage": "Yikes, human!",
    "perfect": "Wow, I'm impressed!",
    "one": "Participation points!",
    "zero": "Try again tomorrow!",
}

const messages: { [key: string]: string } = {
    "globalaverage": "Guess you’re as smart as the average dummy. Keep working to stand out!",
    "greaterglobalaverage": "You beat the average dummy, but you’ll still need time to beat AI.",
    "lesserglobalaverage": "It’s hard to beat AI, but how did you lose to the average dummy?",
    "perfect": "Looks like you’re as smart as AI, for now...",
    "one": "You might not have that many brain cells, but at least you have some!",
    "zero": "It’s honestly surprising you have made it this far through life with just a brain stem.",
}

function ScoreBar({ score, type }: { score: number, type?: 'YOU' | 'GLOBAL AVERAGE' | 'DUMBSPLAIN BOT' }) {
    const icon = type === 'YOU' ? '/icons/User.svg' : type === 'GLOBAL AVERAGE' ? '/icons/World.svg' : '/icons/ChatBot-large.svg';
    return (
        <div className="flex flex-row w-full rounded-lg"
        >
            <img
            src={icon}
            alt="icon"
            className="w-8 h-8 mr-2"
            />
            <div className="w-full flex flex-col justify-start items-start">
                <div className={`flex justify-end items-center pr-2 text-text-primary rounded-sm ${ type !== 'DUMBSPLAIN BOT' ? 'bg-blue-selected' : 'bg-green-lite' }`}
                style={{ 
                    width: `${score}%`,
                    minWidth: '36px',
                    height: '36px',
                 }}>
                    {score}
                 </div>
                <div className="text-text-secondary">{type}</div>
            </div>
        </div>
    );
}

function Header({ title }: { title: string }) {
    return (
        <div className="w-full pt-6 pb-2">
            <h5 className="w-full text-text-primary text-center small-heading-h5 font-semibold pb-2">{titles[title]}</h5>
            <p className="w-full text-center text-sm">{messages[title]}</p>
        </div>
    );
}

function Body({ score }: { score: number }) {
    return (
        <div className="flex flex-col w-full px-4 gap-4 pb-6">
            <ScoreBar score={score} type="YOU" />
            <ScoreBar score={50} type="GLOBAL AVERAGE" />
            <ScoreBar score={100} type="DUMBSPLAIN BOT" />
        </div>
    );
}

export default function ScoreComparision({ score , globalAverage }: { score: number, globalAverage: number }) {
    const [open, setOpen] = useState(false);

    const title = score === 0 ? "zero" : score === 1 ? "one" : score === globalAverage ? "globalaverage" : score === 100 ? "perfect" : score > globalAverage ? "greaterglobalaverage" : "lesserglobalaverage";

    return (
        <div className="w-full">
            <Button
            type="blueOutline"
            onClick={() => setOpen(true)}
            >
                <span className="text-text-primaty font-medium">
                    Compare Score
                </span>
            </Button>
            <BasicModal
            height='356px'
            width='320px'
            open={open}
            setOpen={setOpen}
            >
            <div className="w-full h-full relative px-2 bg-white">
                <Cross onClick={() => setOpen(false)} />
                <div className="w-full h-full flex flex-col justify-between">
                    <Header title={title} />
                    <Body score={score} />
                </div>
            </div>
            </BasicModal>
        </div>
    );
}