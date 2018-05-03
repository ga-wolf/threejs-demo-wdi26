import { BoxGeometry, SphereGeometry, MeshLambertMaterial, Mesh } from "three";

function addFloor() {
  const boxGeo = new BoxGeometry(60, 0.1, 20);
  const boxMat = new MeshLambertMaterial({ color: "#cfd8dc" });
  const box = new Mesh(boxGeo, boxMat);
  box.position.set(15, 0, 0);
  box.castShadow = true;
  box.receiveShadow = true;
  return box;
}

function addCube() {
  const cubeGeo = new BoxGeometry(4, 4, 4);
  const cubeMat = new MeshLambertMaterial({ color: "#ff8f00" });
  const cube = new Mesh(cubeGeo, cubeMat);
  cube.castShadow = true;
  cube.receiveShadow = true;
  cube.position.set(-4, 4, 0);
  return cube;
}

function addSphere() {
  const sphereGeo = new SphereGeometry(4, 30, 30);
  const sphereMat = new MeshLambertMaterial({ color: "#039be5" });
  const sphere = new Mesh(sphereGeo, sphereMat);
  sphere.castShadow = true;
  sphere.receiveShadow = true;
  sphere.position.set(20, 4, 0);
  return sphere;
}

export { addFloor, addCube, addSphere };
