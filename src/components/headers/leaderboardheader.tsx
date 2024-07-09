import { Link } from "react-router-dom";

export const LeaderBoardHeader = () => {
  return (
    <div className="relative w-full">
        <div className="fixed flex flex-row items-center w-full max-w-[430px] h-[40px] shadow-md bg-white rounded-md m-auto">
            <Link to="/summary">
              <img
                  className="size-8"
                  src="/icons/Arrow_left.png"
                  alt="Profile"
              />
            </Link>
            <h5 className="small-heading-h5 font-semibold text-text-primary m-auto">Player Leaderboard</h5>
        </div>
    </div>
  );
}