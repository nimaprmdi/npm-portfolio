import React from "react";
import { useBox } from "@react-three/cannon";

const Floor = (props) => {
    const [ref, api] = useBox(() => ({ args: [20, 1, 10], ...props }));
    return (
        <mesh ref={ref} {...props} receiveShadow>
            <boxBufferGeometry args={[200, 1, 200]} />
            <meshPhysicalMaterial color={"#00060f"} />
        </mesh>
    );
};

export default Floor;
