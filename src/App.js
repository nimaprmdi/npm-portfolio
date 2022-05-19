import React, { useState, useEffect } from "react";
import CameraButton from "./components/CameraButton";
import CameraControls from "./components/CameraControls";
import Floor from "./components/Floor";
import Orbit from "./components/Orbit";
import Laptop from "./components/Laptop";
import Lights from "./components/Lights";
import WebPage from "./components/WebPage";
import DisableOrbit from "./components/DisableOrbit";
import CameraControlsDatGui from "./components/CameraControlsDatGui";
import * as THREE from "three";
import DatGui, { DatColor, DatNumber, DatSelect } from "react-dat-gui";
import { useFrame } from "@react-three/fiber";
import { Canvas, useLoader, useThree } from "react-three-fiber";
import { Physics } from "@react-three/cannon";
import "react-dat-gui/build/react-dat-gui.css";
import "./index.css";
import ChangeOrbitOptions from "./components/ChangeOrbitOptions";
import PointCircle from "./components/PointCircle";

function App() {
    const [pages, setPages] = useState({
        selectedPage: "",
        intro: "https://nimaprmdi.github.io/npm-screen/",
        learnToUse: "https://nimaprmdi.github.io/npm-screen/",
        performance: "https://nimaprmdi.github.io/npm-screen/#/projects",
        portfolio: "https://nimaprmdi.github.io/npm-screen/#/projects",
        about: "https://nimaprmdi.github.io/npm-screen/#/about",
        blog: "https://nimaprmdi.github.io/npm-screen/#/blog",
        blogSingle: "https://nimaprmdi.github.io/npm-screen/#/blog",
    });

    const [isAnimationLoaded, setIsAnimationLoaded] = useState(false);

    const [isScreenLoading, setisScreenLoading] = useState(false);

    console.log(window.devicePixelRatio / 8);

    return (
        <div
            gl={{
                powerPreference: "high-performance",
                antialias: false,
                stencil: false,
                depth: false,
            }}
            style={{ height: "100vh", width: "100vw" }}
        >
            <CameraButton setIsAnimationLoaded={setIsAnimationLoaded} setisScreenLoading={setisScreenLoading} pages={pages} setPages={setPages} />

            <Canvas dpr={window.devicePixelRatio / 2} onCreated={(state) => state.gl.setClearColor("#001140")} camera={{ position: [0, 2, -30] }} shadows>
                {/* <DisableOrbit /> */}

                {/* <CameraControlsDatGui /> */}

                <WebPage setisScreenLoading={setisScreenLoading} isAnimationLoaded={isAnimationLoaded} pages={pages} />

                <CameraControls setIsAnimationLoaded={setIsAnimationLoaded} />

                <fog attach="fog" args={["white", 0.5, 20]} color="#001140" />

                <Orbit />

                <ChangeOrbitOptions />

                <Lights />

                <ambientLight intensity={0.2} />

                <Physics>
                    <Laptop isScreenLoading={isScreenLoading} />

                    <PointCircle />

                    <Floor position={[0, -0.5, 0]} />
                </Physics>
            </Canvas>
        </div>
    );
}

export default App;
