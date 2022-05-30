import { useRef, useEffect } from "react";
import { extend, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const Orbit = () => {
    const ref = useRef();
    const { invalidate, camera, gl } = useThree();

    useEffect(() => {
        ref.current.addEventListener("change", invalidate);
        return () => ref.current.removeEventListener("change", invalidate);
    }, []);

    return (
        <orbitControls
            // minPolarAngle={1.5}
            // maxPolarAngle={1.5}
            // minDistance={0.5}
            // maxDistance={5}
            ref={ref}
            enablePan={false}
            enabled={false}
            enableZoom={false}
            attach="orbitControls"
            args={[camera, gl.domElement]}
        ></orbitControls>
    );
};

export default Orbit;
