import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
//Scene
const scene = new THREE.Scene();

const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
  color: "#00ff83",
  roughness: 0.5,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Lights
const light = new THREE.PointLight(0xffffff, 30, 100);
light.position.set(0, 10, 10);
scene.add(light);
// Sizes

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

//Camera
const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 20;
scene.add(camera);

// Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(2);
renderer.render(scene, camera);

// ReSizes
window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  // update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

//Animation

//Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enableZoom = false;
controls.enablePan = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 5;
// controls.maxPolarAngle = Math.PI / 2;
// controls.minPolarAngle = Math.PI / 2;
const loop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
};
loop();

//  final render
