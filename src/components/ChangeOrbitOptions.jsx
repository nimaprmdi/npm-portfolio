import React from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";

const ChangeOrbitOptions = () => {
    useFrame(({ camera, scene }) => {
        // camera.position.lerp(cameraPos, 0.1);
        // scene.orbitControls.target = cameraRot;
        // console.log(scene.orbitControls);
        // console.log(scene.orbitControls.target);
        // camera.fov = 30;

        camera.updateProjectionMatrix(); /** recompute Camera  */
        scene.orbitControls.update();

        // console.log(camera)
    });

    return null;
};

export default ChangeOrbitOptions;
