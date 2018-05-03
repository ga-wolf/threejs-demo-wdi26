import { PerspectiveCamera } from "three";

function addCamera() {
  const ratio = window.innerWidth / window.innerHeight;
  const camera = new PerspectiveCamera(45, ratio, 0.1, 1000);
  camera.position.set(-30, 40, 30);
  return camera;
}

export { addCamera };
