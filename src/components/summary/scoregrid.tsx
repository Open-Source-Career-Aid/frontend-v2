function ScoreElement({ score , ishint }: { score: number, ishint: boolean }) {
  const _bg = score > 0 ? "bg-green-lite" : "bg-red-lite";
  return (
    <div className="flex flex-col">
      <div className={"flex justify-between items-center w-[51.5px] h-[51.5px] rounded-lg " + _bg}>
        { score!==0 && 
        <div className="m-auto">+{score}</div> }
      </div>
      <div className="flex justify-between items-center w-[51.5px] h-[51.5px] rounded-lg">
        { ishint &&
        <img src="/icons/Lightbulb.png" alt="hint" className="w-8 h-8 m-auto" />
        }
      </div>
    </div>
  );
}

type ScoreGridProps = {
    scores: number[];
    hints: boolean[];
};

export default function ScoreGrid({ scores, hints }: ScoreGridProps) {
  const totalnonzero = scores.filter(score => score !== 0).length;
  const totalhints = hints.filter(hint => hint).length;
  return (
    <div className="flex flex-col w-full justify-between items-center">
        <div className="w-fit">
            <div className="flex gap-4">
                {scores.map((score, index) => (
                    <ScoreElement key={index} score={score} ishint={hints[index]} />
                ))}
            </div>
        </div>
        <p className="text-text-secondary">You got {totalnonzero} questions right and used {totalhints} hints.</p>
    </div>
  );
}