import {
  Geometry,
  PointsMaterial,
  Vertex,
  Vector3,
  Math,
  Points,
  TextureLoader
} from "three";

function addParticles() {
  const particleCount = 100;
  const particles = new Geometry();
  for (let i = 1; i <= particleCount; i += 1) {
    const particle = new Vector3(
      Math.randFloat(-200, 200),
      Math.randFloat(-200, 200),
      Math.randFloat(-200, 200)
    );
    particles.vertices.push(particle);
  }
  const materialOne = new PointsMaterial({
    map: new TextureLoader().load("/images/bill.jpg"),
    size: 10,
    color: "#ffffff"
  });
  const materialTwo = new PointsMaterial({
    map: new TextureLoader().load("/images/nick.jpg"),
    size: 10,
    color: "#ffffff"
  });
  const particleSystems = [];
  for (let systemCount = 1; systemCount <= 12; systemCount += 1) {
    const isEven = systemCount % 2 === 0;
    const particleSystem = new Points(
      particles,
      isEven ? materialOne : materialTwo
    );
    particleSystem.rotation.x = Math.randFloat(0, 6);
    particleSystems.push(particleSystem);
  }
  return particleSystems;
}

export { addParticles };
