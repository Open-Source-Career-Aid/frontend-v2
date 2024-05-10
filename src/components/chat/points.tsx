const StatusClasses = {
    "pending": "text-orange-strong",
    "won": "text-green-strong",
    "lost": "text-red-strong line-through"
}

export default function Points({ points , status }: { points: number , status: "pending" | "won" | "lost"}) {
    return (
        <div className={`flex items-center ${StatusClasses[status]}`}>
            {status === "won" && <div className="">+ </div>}
            {points} Points
        </div>
    );
    }