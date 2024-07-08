import { LeaderBoardHeader } from "./headers/leaderboardheader";

const sample_scores = [
    {"name": "John Doe", "rank": 1, "score": 100, isCurrentUser: true},
    {"name": "Jane Doe", "rank": 2, "score": 90, isCurrentUser: false},
    {"name": "John Smith", "rank": 3, "score": 80, isCurrentUser: false},
    {"name": "Jane Smith", "rank": 4, "score": 70, isCurrentUser: false},
    {"name": "John Doe", "rank": 5, "score": 60, isCurrentUser: false},
    {"name": "Jane Doe", "rank": 6, "score": 50, isCurrentUser: false},
    {"name": "John Smith", "rank": 7, "score": 40, isCurrentUser: false},
    {"name": "Jane Smith", "rank": 8, "score": 30, isCurrentUser: false},
    {"name": "John Doe", "rank": 9, "score": 20, isCurrentUser: false},
    {"name": "Jane Doe", "rank": 10, "score": 10, isCurrentUser: false},
    {"name": "John Doe", "rank": 1, "score": 100, isCurrentUser: false},
    {"name": "Jane Doe", "rank": 2, "score": 90, isCurrentUser: false},
    {"name": "John Smith", "rank": 3, "score": 80, isCurrentUser: false},
    {"name": "Jane Smith", "rank": 4, "score": 70, isCurrentUser: false},
    {"name": "John Doe", "rank": 5, "score": 60, isCurrentUser: false},
    {"name": "Jane Doe", "rank": 6, "score": 50, isCurrentUser: false},
    {"name": "John Smith", "rank": 7, "score": 40, isCurrentUser: false},
    {"name": "Jane Smith", "rank": 8, "score": 30, isCurrentUser: false},
    {"name": "John Doe", "rank": 9, "score": 20, isCurrentUser: false},
    {"name": "Jane Doe", "rank": 10, "score": 10, isCurrentUser: false}
]

function LeaderTable({ scores }: { scores: any[] }) {
    return (
        <div className="w-full">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-text-primary">
                        <th className="text-center max-w-8 py-5 text-text-secondary font-light">RANK</th>
                        <th className="text-left py-5 text-text-secondary font-light">PLAYER</th>
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


function Body() {
    return (
        <div className="flex flex-col w-full px-4 gap-4 pb-6">
            <LeaderTable scores={sample_scores} />
        </div>
    );
}

export default function LeaderBoard() {
    const scores = sample_scores
    const currentUser = scores.find((score) => score.isCurrentUser);

    return (
        <div className="w-full">
            <div className="w-full h-full relative">
                <div className='h-16'></div>
                <LeaderBoardHeader />
                <div className="w-full h-full flex flex-col justify-between">
                    <div className=''></div>
                    <Body />
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