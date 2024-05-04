

export default function DumbLevels() {

  const avatarlabels = ['Just Plain Dumb', 'Not Too Bright', 'Smartass', 'Pretentious Professor', 'Sentient Savant']

  const dumbnessLevel = 3;

  const imageMap = {
    1: "/levels/level1.png",
    2: "/levels/level2.png",
    3: "/levels/level3.png",
    4: "/levels/level4.png",
    5: "/levels/level5.png",
  };

  return (
    // <div className="flex flex-row justify-center items-center mt-3 gap-2 md:gap-4 mb-2.5 h-auto bg-green-200 bg-opacity-0">
    //   {[1, 2, 3, 4, 5].map((level) => {
    //     return (
    //       <div
    //         key={level}
    //         className=
    //           "flex flex-col justify-center items-center relative p-1 md:p-0 md:pb-2.5 z-0 w-10 h-20 md:w-20 md:h-20 overflow-hidden hover:cursor-pointer"
            
    //       >
    //         <div
    //           className={`items-end absolute z-1 w-full h-8 md:w-16 md:h-10 bg-custom-blue ${
    //             level === dumbnessLevel
    //               ? "bg-opacity-70"
    //               : "bg-opacity-10"
    //           } rounded-md transition-all duration-300 ease-in-out`}
    //         ></div>
    //         <div
    //           className={`relative top-1 bg-no-repeat bg-center bg-contain z-10 w-8 h-5 md:w-14 md:h-10 mb-2 md:mb-2`}
    //         >
    //           <img src={imageMap[level as keyof typeof imageMap]} alt="dumbnesslevel" />
    //         </div>
    //         {level === 5 ? (
    //           <>
    //             <div className="absolute z-50 text-[9px] md:text-[0.4rem] right-[5%] md:right-[1em] mb-5 md:mb-6 font-bold">
    //               =AI
    //             </div>
    //           </>
    //         ) : null}
    //         <div
    //           className="text-[8px] md:text-[10px] text-black h-3 md:w-20 z-10 pb-7 md:pb-7 text-center overflow-visible"
    //         >
    //           {avatarlabels[level - 1]}
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>
    <div className="flex flex-row justify-between gap-1 py-8">
      {[1, 2, 3, 4, 5].map((level) => {
        return (
          <div
            key={level}
            className="relative flex flex-col justify-center items-center relative p-1 z-0 w-48"
          >
            <div
              className={`absolute z-1 w-full h-3/5 bg-gray-200 bottom-0 rounded-md
              ${
                level === dumbnessLevel
                  ? "bg-opacity-70"
                  : "bg-opacity-50"
              } `}
            ></div>
            <div
              className={`relative top-0 bg-no-repeat bg-center bg-contain z-10 w-32 mb-2`}
            >
              <img src={imageMap[level as keyof typeof imageMap]} alt="dumbnesslevel" />
            </div>
            {level === 5 ? (
              <>
                <div className="absolute z-50 right-0 m-2 font-bold">
                  =AI
                </div>
              </>
            ) : null}
            <div
              className=""
            >
              {avatarlabels[level - 1]}
            </div>
          </div>
        );
      })}
    </div>
  );
}