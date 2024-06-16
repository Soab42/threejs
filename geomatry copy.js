import * as THREE from "three";
import { scene } from "./customEnv";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// texture loader
const textureLoader = new THREE.TextureLoader();

// create a sphere
const geometrySphere = new THREE.SphereGeometry(0.5, 32, 32);
const materialSphere = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const meshSphere = new THREE.Mesh(geometrySphere, materialSphere);
meshSphere.position.set(-2, 1, 0);
scene.add(meshSphere);

// create a cylinder
const geometryCylinder = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
const materialCylinder = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const meshCylinder = new THREE.Mesh(geometryCylinder, materialCylinder);
meshCylinder.position.set(2, 1, 0);
scene.add(meshCylinder);

// create a torus
const geometryTorus = new THREE.TorusGeometry(0.5, 0.2, 32, 64);
const materialTorus = new THREE.MeshBasicMaterial({ color: 0xff00ff });
const meshTorus = new THREE.Mesh(geometryTorus, materialTorus);
meshTorus.position.set(0, 2, 0);
scene.add(meshTorus);

// create a plane for the floor
const geometryFloor = new THREE.PlaneGeometry(10, 10);
const materialFloor = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
const meshFloor = new THREE.Mesh(geometryFloor, materialFloor);
meshFloor.material.side = THREE.DoubleSide;
meshFloor.position.set(0, -1.5, 0);
meshFloor.rotation.x = -Math.PI * 0.5;
scene.add(meshFloor);

// create a plane for the front wall
const geometryWallFront = new THREE.PlaneGeometry(10, 5);
const materialWallFront = new THREE.MeshBasicMaterial({
  color: 0xaaaaaa,
  map: textureLoader.load("./mosque.bmp"),
});
const meshWallFront = new THREE.Mesh(geometryWallFront, materialWallFront);
meshWallFront.material.side = THREE.DoubleSide;
meshWallFront.position.set(0, 1, 5);
scene.add(meshWallFront);

// create a plane for the back wall
const geometryWallBack = new THREE.PlaneGeometry(10, 5);
const materialWallBack = new THREE.MeshBasicMaterial({
  color: 0xaaaaaa,
  map: textureLoader.load("./mosque.bmp"),
});
const meshWallBack = new THREE.Mesh(geometryWallBack, materialWallBack);
meshWallBack.material.side = THREE.DoubleSide;
meshWallBack.position.set(0, 1, -5);
scene.add(meshWallBack);

// create a plane for the left wall
const geometryWallLeft = new THREE.PlaneGeometry(5, 10);
const materialWallLeft = new THREE.MeshBasicMaterial({
  color: 0xaaaaaa,
  map: textureLoader.load("./night.jpeg"),
});
const meshWallLeft = new THREE.Mesh(geometryWallLeft, materialWallLeft);
meshWallLeft.material.side = THREE.DoubleSide;
meshWallLeft.position.set(5, 1, 0);
meshWallLeft.rotation.y = -Math.PI * 0.5;
meshWallLeft.rotation.z = -Math.PI * 0.5;
scene.add(meshWallLeft);

// create a plane for the right wall
const geometryWallRight = new THREE.PlaneGeometry(5, 10);
const materialWallRight = new THREE.MeshBasicMaterial({
  color: 0xaaaaaa,
  map: textureLoader.load("./night.jpeg"),
});
const meshWallRight = new THREE.Mesh(geometryWallRight, materialWallRight);
meshWallRight.material.side = THREE.DoubleSide;
meshWallRight.position.set(-5, 1, 0);
meshWallRight.rotation.y = -Math.PI * 0.5;
meshWallRight.rotation.z = -Math.PI * 0.5;
scene.add(meshWallRight);

// create a plane for the roof
const geometryRoof = new THREE.PlaneGeometry(10, 10);
const materialRoof = new THREE.MeshBasicMaterial({
  color: 0xaaaaaa,
  map: textureLoader.load("./sc.png"),
});
const meshRoof = new THREE.Mesh(geometryRoof, materialRoof);
meshRoof.material.side = THREE.DoubleSide;
meshRoof.position.set(0, 5, 0);
meshRoof.rotation.x = -Math.PI * 0.5;
meshRoof.position.y = 3.5;
scene.add(meshRoof);

// assests loader

const assetLoader = new GLTFLoader();
// load 3d model
assetLoader.load("./3d/kamar.glb", (gltf) => {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(0, -1, 5);
});
