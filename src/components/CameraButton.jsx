import React, { useState } from "react";
import state from "../state";

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
    const [cameraRig, setCameraRig] = useState({
        intro: {
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
        performance: {
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
        intro: {
            cameraPos: [cameraRig.intro.xPos, cameraRig.intro.yPos, cameraRig.intro.zPos],
            target: [cameraRig.intro.xRot, cameraRig.intro.yRot, cameraRig.intro.zRot],
            cameraFov: cameraRig.intro.fov,
            name: "object005_bod_0",
        },

        learnToUse: {
            cameraPos: [cameraRig.learnToUse.xPos, cameraRig.learnToUse.yPos, cameraRig.learnToUse.zPos],
            target: [cameraRig.learnToUse.xRot, cameraRig.learnToUse.yRot, cameraRig.learnToUse.zRot],
            cameraFov: cameraRig.learnToUse.fov,
            name: "object005_bod_0",
        },

        performance: {
            cameraPos: [cameraRig.performance.xPos, cameraRig.performance.yPos, cameraRig.performance.zPos],
            target: [cameraRig.performance.xRot, cameraRig.performance.yRot, cameraRig.performance.zRot],
            cameraFov: cameraRig.performance.fov,
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

        animationName !== "home" && setisScreenLoading(true);
    };

    return (
        <React.Fragment>
            {/* <button
                onClick={() => handleClick("intro")}
                style={{
                    ...styles,
                    left: "30vw",
                }}
            >
                {"intro"}
            </button> */}
            {/* <button
                onClick={() => handleClick("learnToUse")}
                style={{
                    ...styles,
                    right: "30vw",
                }}
            >
                {"learn to use"}
            </button> */}

            {/* <button
                onClick={() => handleClick("portfolio")}
                style={{
                    ...styles,
                    right: "43vw",
                }}
            >
                {"portfolios"}
            </button> */}

            <button
                onClick={() => handleClick("performance")}
                style={{
                    ...styles,
                    right: "38vw",
                }}
            >
                {"performance"}
            </button>

            <button
                onClick={() => handleClick("about")}
                style={{
                    ...styles,
                    right: "48vw",
                }}
            >
                {"about"}
            </button>

            <button
                onClick={() => handleClick("blog")}
                style={{
                    ...styles,
                    right: "52vw",
                }}
            >
                {"blog"}
            </button>

            <button
                onClick={() => handleClick("home")}
                style={{
                    ...styles,
                    left: "59.5vw",
                    top: "10vh",
                }}
            >
                {"Home"}
            </button>

            {/* <button
                onClick={() => handleClick("blogSingle")}
                style={{
                    ...styles,
                    right: "58vw",
                }}
            >
                {"blog sigle"}
            </button> */}
        </React.Fragment>
    );
};

export default CameraButton;
