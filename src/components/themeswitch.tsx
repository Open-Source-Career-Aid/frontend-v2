import { useState } from 'react';
import useDarkSide from '../hooks/dark';

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

const toggleDarkSide = () => {
    setDarkSide(!darkSide);
    setTheme(darkSide ? 'dark' : 'light');
}

  return (
    <>
      <div>
        <button onClick={toggleDarkSide}>
          {/* {darkSide ? 'Light' : 'Dark'} */}
          {/* display one icon if dark, and other if light */}
            {!darkSide ? (
                <img src="darkmode.png" alt="dark mode" className='h-10' />
            ) : (
                <img src="lightmode.png" alt="light mode" className='h-10' />
            )}
        </button>
      </div>
      {/* <div className="utilitybuttons">
        {theme === "light" ? (
            // <svg className='lightmode' onClick={handleTheme}></svg>
            <ReactSVG className="lightmode" onClick={handleTheme} src="../../public/lightmode.svg" />
        ) : (
            <svg className="darkmode" onClick={handleTheme}></svg>
        )}
        <svg className="infobutton" onClick={handleOverlay} data-overlay="info"></svg>
        <svg
            className={"leaderboard" + (!gameended ? " blocked" : "")}
            onClick={handleOverlay}
            data-overlay="score"
        ></svg>
        <svg className="statsbutton" onClick={handleStats} data-overlay="stats"></svg>
        {user || isUserLoggedIn ? (
            <svg
            onClick={handleLogoutOverlay}
            className={theme === "light" ? "logoutbuttonlight" : "logoutbuttondark"}
            ></svg>
        ) : (
            <svg
            onClick={handleLoginOverlay}
            className={theme === "light" ? "loginbuttonlight" : "loginbuttondark"}
            ></svg>
        )}
    </div> */}
    </>
  );
}