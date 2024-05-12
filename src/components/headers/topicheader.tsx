export const TopicHeader = ({ topic , score = 0 , showscore = false }: { topic: string , score?: number , showscore?: boolean }) => {
  return (
    <div className="flex flex-row w-full h-[40px] shadow-md bg-white rounded-md m-auto">
        { !showscore ?
            <h5 className="small-heading-h5 font-semibold text-text-primary m-auto">Today's Topic: <span className="text-orange-strong">{topic}</span></h5>
            :
            <div className="flex w-full justify-between">
                <h5 className="small-heading-h5 text-text-primary m-auto">Topic: <span className="text-orange-strong">{topic}</span></h5>
                <h5 className="small-heading-h5 text-text-primary m-auto">Score: <span className="text-orange-strong">{score}</span></h5>
            </div>
        }
    </div>
  );
}