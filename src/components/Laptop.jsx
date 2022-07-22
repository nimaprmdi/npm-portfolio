import Dragable from "./Dragable";
import Model from "./Model";
import BoundingBox from "./BoundingBox";
import * as THREE from "three";
import { Suspense } from "react";
import { useLoader } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";

const Laptop = ({ isScreenLoading }) => {
    const { nodes } = useGLTF(process.env.PUBLIC_URL + "/asus-rog-laptop/scene.glb");

    let currentScreen = "";
    isScreenLoading ? (currentScreen = "/assets/loading.jpg") : (currentScreen = "/assets/np.jpg");

    const backgroundTexture = useLoader(THREE.TextureLoader, process.env.PUBLIC_URL + currentScreen);

    // Change Laptop Background
    nodes["Object_54"].material.map = backgroundTexture;

    return (
        <Suspense fallback={null}>
            {/* <Dragable> */}
            {/* <BoundingBox visible position={[4, 3, 0]} dims={[3, 2, 6]} offset={[0, -1, 0]}> */}
            <group position={[0, 0.05, 0]} rotation={[0, Math.PI, 0]}>
                <Model path="/asus-rog-laptop/scene.glb" scale={new Array(3).fill(5.5)} />
            </group>
            {/* </BoundingBox> */}
            {/* </Dragable> */}
        </Suspense>
    );
};

export default Laptop;
