import React, { useState } from "react";
import state from "../state";
import Nav from "./Nav";
import Resume from "./Resume";

const styles = {
    height: "30px",
    width: "30px",
    position: "absolute",
    zIndex: 1,
    bottom: "30vh",
    backgroundColor: "white",
    borderRadius: "999px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
};

const CameraButton = ({ pages, setPages, setIsAnimationLoaded, setisScreenLoading }) => {
    const [currentView, setCurrentView] = useState("home");
    const [isNavHidden, setIsNavHidden] = useState(false);

    const [cameraRig, setCameraRig] = useState({
        resume: {
            xPos: 0.867875319198645,
            yPos: 2.6799223330923048,
            zPos: -1.154328079443018,
            xRot: 1.169219130161907,
            yRot: 0.5276345239605886,
            zRot: -0.830683012627419,
            fov: 30,
        },
        learnToUse: {
            xPos: -0.5624050772112703,
            yPos: 0.7816770508624405,
            zPos: -0.6358408285235975,
            xRot: -2.722713665533819,
            yRot: -0.24295188214599717,
            zRot: 1.1050510999823102,
            fov: 75,
        },
        projects: {
            xPos: -0.09145389378951617,
            yPos: 0.9292195342538414,
            zPos: 0.2127644744439552,
            xRot: -0.0762815204305262,
            yRot: 0.004491922213727104,
            zRot: 2.7166702198222232,
            fov: 75,
        },
        portfolio: {
            xPos: 1.7905781287057485,
            yPos: 1.0593367812294843,
            zPos: -4.505550717587711,
            xRot: -1.266311867597617,
            yRot: 0.26616578392851803,
            zRot: 1.823918224403721,
            fov: 20,
        },
        about: {
            xPos: 1.3688160752366705,
            yPos: 1.6237383626768542,
            zPos: -2.394267438192799,
            xRot: -0.5946627671310893,
            yRot: 0.22025794174702437,
            zRot: 2.211422811839681,
            fov: 20,
        },
        blog: {
            xPos: -1.6204114340554632,
            yPos: 1.559894520011941,
            zPos: -2.0696613823788486,
            xRot: 0.34664599750392305,
            yRot: 0.3539657435907955,
            zRot: 2.0167237294011873,
            fov: 20,
        },
        home: {
            xPos: -1.7601321483468049,
            yPos: 0.4368543944087264,
            zPos: -3.0161960014519633,
            xRot: 0.4303958321878072,
            yRot: 0.4780749231658934,
            zRot: -0.16555265478444098,
            fov: 30,
        },
    });

    const sets = {
        resume: {
            cameraPos: [cameraRig.resume.xPos, cameraRig.resume.yPos, cameraRig.resume.zPos],
            target: [cameraRig.resume.xRot, cameraRig.resume.yRot, cameraRig.resume.zRot],
            cameraFov: cameraRig.resume.fov,
            name: "object005_bod_0",
        },

        learnToUse: {
            cameraPos: [cameraRig.learnToUse.xPos, cameraRig.learnToUse.yPos, cameraRig.learnToUse.zPos],
            target: [cameraRig.learnToUse.xRot, cameraRig.learnToUse.yRot, cameraRig.learnToUse.zRot],
            cameraFov: cameraRig.learnToUse.fov,
            name: "object005_bod_0",
        },

        projects: {
            cameraPos: [cameraRig.projects.xPos, cameraRig.projects.yPos, cameraRig.projects.zPos],
            target: [cameraRig.projects.xRot, cameraRig.projects.yRot, cameraRig.projects.zRot],
            cameraFov: cameraRig.projects.fov,
            name: "object005_bod_0",
        },

        portfolio: {
            cameraPos: [cameraRig.portfolio.xPos, cameraRig.portfolio.yPos, cameraRig.portfolio.zPos],
            target: [cameraRig.portfolio.xRot, cameraRig.portfolio.yRot, cameraRig.portfolio.zRot],
            cameraFov: cameraRig.portfolio.fov,
            name: "object005_bod_0",
        },

        about: {
            cameraPos: [cameraRig.about.xPos, cameraRig.about.yPos, cameraRig.about.zPos],
            target: [cameraRig.about.xRot, cameraRig.about.yRot, cameraRig.about.zRot],
            cameraFov: cameraRig.about.fov,
            name: "object005_bod_0",
        },

        blog: {
            cameraPos: [cameraRig.blog.xPos, cameraRig.blog.yPos, cameraRig.blog.zPos],
            target: [cameraRig.blog.xRot, cameraRig.blog.yRot, cameraRig.blog.zRot],
            cameraFov: cameraRig.blog.fov,
            name: "object005_bod_0",
        },

        blogSingle: {
            cameraPos: [cameraRig.portfolio.xPos, cameraRig.portfolio.yPos, cameraRig.portfolio.zPos],
            target: [cameraRig.portfolio.xRot, cameraRig.portfolio.yRot, cameraRig.portfolio.zRot],
            cameraFov: cameraRig.portfolio.fov,
            name: "object005_bod_0",
        },

        home: {
            cameraPos: [cameraRig.home.xPos, cameraRig.home.yPos, cameraRig.home.zPos],
            target: [cameraRig.home.xRot, cameraRig.home.yRot, cameraRig.home.zRot],
            cameraFov: cameraRig.home.fov,
            name: "object005_bod_0",
        },
    };

    const handleClick = (animationName) => {
        state.cameraPos.set(...sets[animationName].cameraPos);
        state.target.set(...sets[animationName].target);
        state.activeMeshName = sets[animationName].name;
        state.cameraFov = sets[animationName].cameraFov;
        state.shouldUpdate = true;

        setIsAnimationLoaded(false);

        setPages({ ...pages, selectedPage: animationName });

        animationName === "home" ? setisScreenLoading(false) : setisScreenLoading(true);

        setCurrentView(animationName);

        animationName !== "home" ? setIsNavHidden(true) : setIsNavHidden(false);
    };

    return (
        <React.Fragment>
            {currentView !== "home" && (
                <div onClick={() => handleClick("home")} className={`c-close cursor-pointer opacity-0 absolute top-8 right-8 z-50 ${isNavHidden ? "has-fade-in" : "has-fade-out"}`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 32 32"
                        style={{ transform: "rotate(360deg)" }}
                        className="c-close__icon w-24 h-24 text-red-600 hover:text-white ease-linear duration-150"
                    >
                        <path
                            fill="currentColor"
                            d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4l-1.6 1.6z"
                        />
                    </svg>
                </div>
            )}

            <Nav currentView={currentView} isNavHidden={isNavHidden} handleClick={handleClick} />

            {currentView === "resume" && <Resume />}
        </React.Fragment>
    );
};

export default CameraButton;
