import React from "react";
import * as THREE from "three";
import FireFoxPages from "./firefox/FireFoxPages";
import { browserName } from "react-device-detect";
import { Html, useGLTF } from "@react-three/drei";

const WebPage = ({ pages, isAnimationLoaded, setisScreenLoading, projectsData }) => {
    const { nodes } = useGLTF("/asus-rog-laptop/scene.glb");
    const geoScale = new THREE.Vector3(8, 8, 8);
    const currentPage = pages.selectedPage;

    const handleLoad = () => {
        setisScreenLoading(false);
    };

    return (
        <mesh rotation={[1.928, 0.0, 3.135]} position={[0.0, -0.13, 1.07]} geometry={nodes["Object_54"].geometry} scale={geoScale}>
            {isAnimationLoaded && (
                <Html
                    as="section"
                    wrapperClass="html-wrapper"
                    className="content"
                    prepend={false}
                    center={false}
                    zIndexRange={[5, 0]}
                    rotation-x={-Math.PI / 2}
                    position={[0.0001, 0.04948, -0.0887]}
                    scale={new THREE.Vector3(0.004968, 0.005737, 0.005023)}
                    transform
                    occlude
                    pointerEvents="auto"
                >
                    {browserName === "Firefox" ? (
                        <FireFoxPages setisScreenLoading={setisScreenLoading} projectsData={projectsData} pages={pages} />
                    ) : (
                        <iframe
                            onLoad={() => handleLoad()}
                            id="web-page-iframe"
                            style={{
                                overflow: "hidden",
                                boxShadow: "none",
                                border: "none",
                            }}
                            width="1920px"
                            height="937px"
                            src={pages[currentPage]}
                        ></iframe>
                    )}
                </Html>
            )}
        </mesh>
    );
};

export default WebPage;
