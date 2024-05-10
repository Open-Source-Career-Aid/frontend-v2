import Points from "./points";

type QuestionBoxProps = {
    question: string;
    questionindex: number;
    totalquestions: number;
    status: "pending" | "won" | "lost";
    points: number;
};

export default function Question({ question , questionindex , totalquestions , status , points }: QuestionBoxProps) {
    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-between items-center w-full">
                <div>
                    Question {questionindex} of {totalquestions}
                </div>
                <div className="flex justify-end">
                    <Points points={points} status={status} />
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div className="font-bold">{question}</div>
            </div>
        </div>
    );
}