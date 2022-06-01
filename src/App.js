import React, { useState, Suspense } from "react";
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
import { useProgress } from "@react-three/drei";
import { Helmet } from "react-helmet-async";
import "./index.css";
import "./assets/sass/App.scss";
import "react-dat-gui/build/react-dat-gui.css";
import PreLoader from "./components/PreLoader";

function App() {
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

    const [isLoading, setIsLoading] = useState(true);

    function Loading() {
        const { active, progress, errors, item, loaded, total } = useProgress();

        return loaded > 0 && setIsLoading(false);
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Nima PourMohamadi | Nimapm.com</title>
                <link rel="canonical" href="https://nimaprmdi.github.io/npm-screen/" />
                <meta name="description" content="Welcome to Nima PourMohamadi 's Personal Website." />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#242424" />
                <meta name="msapplication-TileColor" content="#000000" />
                <meta name="theme-color" content="#000000"></meta>
            </Helmet>
            <div
                gl={{
                    powerPreference: "high-performance",
                    antialias: false,
                    stencil: false,
                    depth: false,
                }}
                style={{ height: "100vh", width: "100vw" }}
            >
                <PreLoader isLoading={isLoading} />

                <CameraButton setIsAnimationLoaded={setIsAnimationLoaded} setisScreenLoading={setisScreenLoading} pages={pages} setPages={setPages} />
                <Canvas
                    dpr={isMobile ? window.devicePixelRatio / 3 : window.devicePixelRatio}
                    frameloop="demand"
                    onCreated={(state) => state.gl.setClearColor("#001140")}
                    camera={{ position: [0, 2, -30] }}
                    shadows
                    className="webgl"
                >
                    <WebPage setisScreenLoading={setisScreenLoading} isAnimationLoaded={isAnimationLoaded} pages={pages} />

                    <CameraControls setIsAnimationLoaded={setIsAnimationLoaded} />

                    <fog attach="fog" args={["white", 0.5, 20]} color="#001140" />

                    <Orbit />

                    <ChangeOrbitOptions />

                    <Lights />

                    <ambientLight intensity={0.2} />

                    <Physics>
                        <Suspense fallback={<Loading />}>
                            <Laptop isScreenLoading={isScreenLoading} />
                        </Suspense>

                        <Suspense fallback={<Loading />}>
                            <PointCircle />
                        </Suspense>

                        <Suspense fallback={<Loading />}>
                            <Floor position={[0, -0.5, 0]} />
                        </Suspense>
                    </Physics>
                </Canvas>
            </div>
        </>
    );
}

export default App;
