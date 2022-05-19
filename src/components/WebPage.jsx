import React, { useEffect } from "react";
import { CSS3DRenderer, CSS3DObject } from "three/examples/jsm/controls/DragControls";
import { Html, Environment, useGLTF, ContactShadows, OrbitControls } from "@react-three/drei";
import { useLoader } from "react-three-fiber";
import * as THREE from "three";

const WebPage = ({ pages, isAnimationLoaded, setisScreenLoading }) => {
    const { nodes, materials } = useGLTF("/asus-rog-laptop/scene.gltf");
    const geoScale = new THREE.Vector3(8, 8, 8);
    const currentPage = pages.selectedPage;

    const handleLoad = () => {
        setisScreenLoading(false);
    };

    return (
        <>
            <mesh rotation={[1.928, 0.0, 3.135]} position={[0.0, -0.13, 1.07]} geometry={nodes["Object_54"].geometry} scale={geoScale}>
                <Html className="content" rotation-x={-Math.PI / 2} position={[0.0001, 0.04948, -0.0887]} scale={new THREE.Vector3(0.004968, 0.005737, 0.005023)} transform occlude>
                    <div className="wrapper">
                        <div>
                            {isAnimationLoaded && (
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
                        </div>
                    </div>
                </Html>
            </mesh>
        </>
    );
};

export default WebPage;
