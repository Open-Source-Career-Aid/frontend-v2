import { LeaderBoardHeader } from "./headers/leaderboardheader";
import { getLeaderBoard } from "../helpers/getLeaderBoard";
import { useState , useEffect } from "react";

function LeaderTable({ scores }: { scores: any[] }) {
    return (
        <div className="w-full">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-text-primary">
                        <th className="text-center max-w-8 py-5 text-text-secondary font-light">RANK</th>
                        <th className="text-center py-5 text-text-secondary font-light">PLAYER</th>
                        <th className="text-center max-w-8 py-5 text-text-secondary font-light">DQ</th>
                    </tr>
                </thead>
                <tbody>
                    {scores.map((score) => (
                        <tr key={score.rank} className="border-b border-text-secondary">
                            <td className="py-3 text-center text-text-primary">{score.rank}</td>
                            <td className="py-3 text-left text-text-primary">{score.name}</td>
                            <td className="py-3 text-center text-text-primary">{score.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


function Body({ scores }: { scores: any[] }) {
    return (
        <div className="flex flex-col w-full px-4 gap-4 pb-6">
            <LeaderTable scores={scores} />
        </div>
    );
}

export default function LeaderBoard() {
    const [scores, setScores] = useState<any[]>([]);
    const [currentUser, setCurrentUser] = useState<any>();

    useEffect(() => {
        getLeaderBoard().then((response) => {
            setScores(response);
        });
    }, []);

    // when scores changes, set the current user where isCurrentUser is true
    useEffect(() => {
        if (!scores) return
        setCurrentUser(scores?.find((score) => score.isCurrentUser));
    }, [scores]);

    return (
        <div className="w-full">
            <div className="w-full h-full relative">
                <div className='h-16'></div>
                <LeaderBoardHeader />
                <div className="w-full h-full flex flex-col justify-between">
                    <div className='h-10'></div>
                    <Body scores={scores} />
                    <div className='h-10'></div>
                </div>
                <div className="fixed flex flex-row bottom-0 w-full max-w-[430px] h-[40px] shadow-md bg-white rounded-md my-4">
                    <div className="w-full flex flex-row justify-between items-center px-14">
                        <p className="text-center max-w-8 py-5 text-text-secondary font-light">{currentUser?.rank}</p>
                        <p className="text-left py-5 text-text-secondary font-light">{currentUser?.name}</p>
                        <p className="text-center max-w-8 py-5 text-text-secondary font-light">{currentUser?.score}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}