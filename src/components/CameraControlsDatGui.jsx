import React from "react";
import { useFrame } from "@react-three/fiber";
import { useLoader, useThree } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const CameraControlsDatGui = ({ opts }) => {
    useFrame(({ camera, scene }) => {
        // camera.position.lerp(cameraPos, 0.1);
        // scene.orbitControls.target = cameraRot;
        // console.log(scene.orbitControls);
        // scene.orbitControls.target.lerp(cameraRot, 0.1);
        // console.log(scene.orbitControls.target);
        // camera.fov = 30;
        camera.updateProjectionMatrix(); /** recompute Camera  */
        scene.orbitControls.update();
    });

    return null;
};

export default CameraControlsDatGui;
