import React, { useState, useRef } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";

const PointCircle = ({}) => {
    const [currentRotation, setCurrentRotation] = useState(0.01);

    const sphereRef = useRef();

    useFrame(() => {
        sphereRef.current.rotation.y += 0.0005;
    });

    return (
        <points
            ref={sphereRef}
            rotation={[0, currentRotation, 0]}
            scale={new THREE.Vector3(0.1, 0.1, 0.1)}
            position={[0, 0.5, 0]}
            receiveShadow
        >
            <sphereGeometry args={[100, 100, 100]} />
            <pointsMaterial
                receiveShadow
                opacity={0.1}
                transparent
                map={new THREE.TextureLoader().load(process.env.PUBLIC_URL + "/assets/blue-star.png")}
                size={0.3}
            />
        </points>
    );
};

export default PointCircle;
