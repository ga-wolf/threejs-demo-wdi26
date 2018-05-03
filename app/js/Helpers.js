import { AxesHelper } from "three";
import OrbitControls from "three-orbitcontrols";
import dat from "dat.gui";

function Controller() {
  this.rotationSpeed = 0.02;
  this.bouncingSpeed = 0.02;
  this.lightX = 15;
  this.lightY = 30;
  this.lightZ = 0;
}

function addGui(controller) {
  const gui = new dat.GUI();
  gui.add(controller, "rotationSpeed", 0, 0.2);
  gui.add(controller, "bouncingSpeed", 0, 0.2);
  gui.add(controller, "lightX", -100, 100);
  gui.add(controller, "lightY", -100, 100);
  gui.add(controller, "lightZ", -100, 100);
  return gui;
}

function addOrbitControls(camera, renderer) {
  const controls = new OrbitControls(camera, renderer.domElement);
  return controls;
}

function addAxesHelper() {
  const axes = new AxesHelper(20);
  return axes;
}

export { Controller, addGui, addOrbitControls, addAxesHelper };
