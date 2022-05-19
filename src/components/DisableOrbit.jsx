import { useRef, useEffect, useState } from "react";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { extend, useThree } from "react-three-fiber";
import * as THREE from "three";

extend({ DragControls });

const DisableOrbit = (props) => {
    const groupRef = useRef();
    const controlRef = useRef();
    const [children, setChildren] = useState([]);
    const { camera, gl, scene } = useThree();

    useEffect(() => {
        setChildren(groupRef.current.children);
    }, []);

    useEffect(() => {
        // scene.orbitControls.enabled = false;
        scene.orbitControls.enableRotate = false;

        // console.log(scene.orbitControls);
    }, [children]);

    return (
        <group ref={groupRef}>
            <dragControls transformGroup={props.transformGroup} ref={controlRef} args={[children, camera, gl.domElement]} />
            {props.children}
        </group>
    );
};

export default DisableOrbit;
