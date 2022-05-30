import React from "react";
import { browserName } from "react-device-detect";

const Nav = ({ isNavHidden, currentView, handleClick }) => {
    return (
        <nav className={`c-nav w-full h-screen flex justify-start items-center absolute top-0 left-0 z-50 ${isNavHidden ? "has-fade-out" : "has-fade-in"}`}>
            <ul>
                <li onClick={() => handleClick("home")} className={`c-nav__item mb-10 h1  flex items-center ${currentView === "home" ? "text-primary_blue active" : "text-white"}`}>
                    Home
                </li>

                {browserName === "Firefox" ? (
                    <a target="_blank" href="https://www.portfoliom.ir/projects" className="c-nav__item mb-10 h1 text-white flex items-center">
                        Projects
                    </a>
                ) : (
                    <li onClick={() => handleClick("projects")} className={`c-nav__item mb-10 h1 text-white flex items-center`}>
                        Projects
                    </li>
                )}

                {browserName === "Firefox" ? (
                    <a target="_blank" href="https://www.portfoliom.ir/blog" className="c-nav__item mb-10 h1 text-white flex items-center">
                        Blog
                    </a>
                ) : (
                    <li onClick={() => handleClick("blog")} className={`c-nav__item mb-10 h1 text-white flex items-center`}>
                        Blog
                    </li>
                )}

                <li onClick={() => handleClick("about")} className={`c-nav__item mb-10 h1 text-white flex items-center`}>
                    About
                </li>
                <li onClick={() => handleClick("resume")} className={`c-nav__item mb-10 h1 text-white flex items-center`}>
                    Resume
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
