import { PointLight, PointLightHelper } from "three";

function addPointLight() {
  const pointLight = new PointLight(0xffffff);
  pointLight.position.set(15, 30, 0);
  pointLight.castShadow = true;
  pointLight.shadow.mapSize.width = 2048;
  pointLight.shadow.mapSize.height = 2048;
  return pointLight;
}

function addPointLightHelper(light) {
  const pointLightHelper = new PointLightHelper(light);
  return pointLightHelper;
}

export { addPointLight, addPointLightHelper };
