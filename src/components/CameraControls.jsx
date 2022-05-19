import state from "../state";
import { useFrame } from "@react-three/fiber";

const CameraControls = ({ setIsAnimationLoaded }) => {
    useFrame(({ camera, scene }) => {
        if (state.activeMesh.name !== state.activeMeshName) {
            state.activeMesh = scene.getObjectByName(state.activeMeshName) || {};
        }
        if (state.shouldUpdate) {
            scene.orbitControls.target.lerp(state.target, 0.05); // Rotation XYZ + animation (lerp)
            camera.position.lerp(state.cameraPos, 0.05); // Pos XYZ + animation (lerp)
            camera.fov = state.cameraFov;

            scene.orbitControls.update();
            camera.updateProjectionMatrix();
            const diff = camera.position.clone().sub(state.cameraPos).length();

            if (diff < 0.005) {
                state.shouldUpdate = false;

                setTimeout(() => {
                    setIsAnimationLoaded(true);
                }, 210);

                console.log("Animation Ended");
            }
        }
    });
    return null;
};

export default CameraControls;
