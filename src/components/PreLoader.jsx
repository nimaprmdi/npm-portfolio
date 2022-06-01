import React from "react";
import { Icon } from "@iconify/react";

const Loading = ({ isLoading }) => {
    return (
        <>
            <div className="c-rotate">
                <div className="c-rotate__wrapper">
                    <Icon className="c-rotate__icon c-rotate__icon--mobile iconify" icon="ant-design:mobile-outlined" />
                    <Icon className="c-rotate__icon c-rotate__icon--refresh iconify" icon="et:refresh" hFlip={true} />
                </div>
                <div className="c-rotate__text">
                    <p>Please Rotate Your Phone.</p>
                    <a href="https://www.computerhope.com/issues/ch002069.htm" target="_blank">
                        how to rotate
                    </a>
                </div>
            </div>
            <div className={`c-preloader w-full h-screen bg-primary_light flex justify-center items-center absolute top-0 left-0 z-50 ${isLoading ? "block" : "hidden"}`}>
                <div id="c-preloader__loader loader w-full h-screen">
                    <svg height="200" viewBox="0 0 40 60" width="200">
                        <polygon className="triangle" fill="none" points="16,1 32,32 1,32" stroke="#fff" strokeWidth="1"></polygon>
                        <text className="loading" fill="#fff" x="0" y="45">
                            &nbsp;LOADING
                        </text>
                    </svg>
                </div>
            </div>
        </>
    );
};

export default Loading;
