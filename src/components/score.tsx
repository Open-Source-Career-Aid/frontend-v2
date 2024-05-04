import { useAppSelector } from "../redux/hook";

export default function Score() {
    const progress = useAppSelector((state) => state.progress);

    return (
        <div 
        className="p-0 flex flex-row justify-start items-end overflow-visible"
        >
            <div>DQ:</div>
            <div
            className=""
            >
                {progress.dq}
            </div>
            <div
            className="ml-2"
            >Score:</div>
            <div className=""
            >
                {progress.score}
            </div>
        </div>
    );
}