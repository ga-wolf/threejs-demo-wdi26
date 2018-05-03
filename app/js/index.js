import { Scene } from "three";
import { addCamera } from "./Camera";
import { addRenderer, makeResponsive } from "./Renderer";
import { addFloor, addSphere, addCube } from "./Shapes";
import { addPointLight, addPointLightHelper } from "./Light";
import { Controller, addGui, addOrbitControls, addAxesHelper } from "./Helpers";
import { addParticles } from "./Particles";

let scene,
  camera,
  renderer,
  cube,
  sphere,
  pointLight,
  myTimer,
  particleSystems,
  step = 0,
  controller,
  gui;

function init() {
  controller = new Controller();
  gui = addGui(controller);
  renderer = addRenderer();
  scene = new Scene();
  camera = addCamera();
  const floor = addFloor();
  cube = addCube();
  sphere = addSphere();
  pointLight = addPointLight();
  const pointLightHelper = addPointLightHelper(pointLight);
  addOrbitControls(camera, renderer);
  const axesHelper = addAxesHelper();
  particleSystems = addParticles();

  scene.add(
    camera,
    floor,
    cube,
    sphere,
    pointLight,
    pointLightHelper,
    axesHelper
  );
  particleSystems.forEach(particles => scene.add(particles));

  document.body.appendChild(renderer.domElement);
  window.addEventListener("resize", () => makeResponsive(camera, renderer));
  animate();
}

function animate() {
  particleSystems.forEach((system, index) => {
    const isEven = index % 2 === 0;
    system.rotation.x += isEven ? 0.01 : -0.01;
    system.rotation.y += isEven ? 0.01 : -0.01;
    system.rotation.z += isEven ? 0.01 : -0.01;
  });
  step += controller.bouncingSpeed;
  cube.rotation.x += controller.rotationSpeed;
  cube.rotation.y += controller.rotationSpeed;
  cube.rotation.z += controller.rotationSpeed;
  pointLight.position.set(
    controller.lightX,
    controller.lightY,
    controller.lightZ
  );
  pointLight.position.y = controller.lightY;
  sphere.position.x = 20 + 10 * Math.cos(step);
  sphere.position.y = 3.5 + 10 * Math.abs(Math.sin(step));
  renderer.render(scene, camera);
  myTimer = requestAnimationFrame(animate);
}

init();

if (module.hot) {
  module.hot.dispose(() => {
    cancelAnimationFrame(myTimer);
    const canvas = document.querySelector("canvas");
    if (canvas) canvas.remove();
    const guiArea = document.querySelector(".dg .main");
    if (guiArea) guiArea.remove();
  });
}
