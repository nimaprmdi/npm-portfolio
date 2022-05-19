import * as THREE from "three";

/**
 *
 * Here We added animation to scene using this state
 *
 * Camera Pos is the start Value
 *
 * Camera Target is the finishing point
 *
 * cameraPos & target can set programmatically
 *
 * more info in cameraControl.jsx
 *
 *
 */

const state = {
    activeMesh: {},
    activeMeshName: "mesh_9",
    cameraFov: 30,
    cameraPos: new THREE.Vector3(-1.7601321483468049, 0.4368543944087264, -3.0161960014519633),
    target: new THREE.Vector3(0.4303958321878072, 0.4780749231658934, -0.16555265478444098),

    shouldUpdate: true,
};

export default state;
