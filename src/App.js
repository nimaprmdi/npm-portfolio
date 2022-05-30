import React, { useState, Suspense, useEffect } from "react";
import CameraButton from "./components/CameraButton";
import CameraControls from "./components/CameraControls";
import Floor from "./components/Floor";
import Orbit from "./components/Orbit";
import Laptop from "./components/Laptop";
import Lights from "./components/Lights";
import WebPage from "./components/WebPage";
import ChangeOrbitOptions from "./components/ChangeOrbitOptions";
import PointCircle from "./components/PointCircle";
import { isMobile } from "react-device-detect";
import { Canvas } from "react-three-fiber";
import { Physics } from "@react-three/cannon";
import { Loader } from "@react-three/drei";
import "./index.css";
import "./assets/sass/App.scss";
import "react-dat-gui/build/react-dat-gui.css";

function App() {
    const [projectsData, setProjectsData] = useState();

    const [pages, setPages] = useState({
        selectedPage: "",
        intro: "https://nimaprmdi.github.io/npm-screen/",
        learnToUse: "https://nimaprmdi.github.io/npm-screen/",
        projects: "https://nimaprmdi.github.io/npm-screen/#/projects",
        portfolio: "https://nimaprmdi.github.io/npm-screen/#/projects",
        about: "https://nimaprmdi.github.io/npm-screen/#/about",
        blog: "https://portfoliom.ir/blog/",
        blogSingle: "https://nimaprmdi.github.io/npm-screen/#/blog",
    });

    const [isAnimationLoaded, setIsAnimationLoaded] = useState(false);

    const [isScreenLoading, setisScreenLoading] = useState(false);

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

            <Canvas
                dpr={isMobile ? window.devicePixelRatio / 2.5 : window.devicePixelRatio}
                frameloop="demand"
                onCreated={(state) => state.gl.setClearColor("#001140")}
                camera={{ position: [0, 2, -30] }}
                shadows
            >
                <WebPage projectsData={projectsData} setisScreenLoading={setisScreenLoading} isAnimationLoaded={isAnimationLoaded} pages={pages} />

                <CameraControls setIsAnimationLoaded={setIsAnimationLoaded} />

                <fog attach="fog" args={["white", 0.5, 20]} color="#001140" />

                <Orbit />

                <ChangeOrbitOptions />

                <Lights />

                <ambientLight intensity={0.2} />

                <Physics>
                    <Suspense fallback={null}>
                        <Laptop isScreenLoading={isScreenLoading} />
                    </Suspense>

                    <PointCircle />

                    <Floor position={[0, -0.5, 0]} />
                </Physics>
            </Canvas>

            <Loader />
        </div>
    );
}

export default App;
