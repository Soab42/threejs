import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { gsap } from "gsap";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
export const loader = new GLTFLoader();
export const rgbeLoader = new RGBELoader();
// create a scene
export const scene = new THREE.Scene();
const canvas = document.querySelector(".webgl");
// create a renderer
export const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector(".webgl"),
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// renderer.setClearColor("pink", 1.0);
renderer.shadowMap.enabled = true;

// create a camera
export const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 2;
camera.position.set(0, 1.5, 1.5);
scene.add(camera);

// add lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);

// add orbit controls
export const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.update();

// add renderer
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

// ReSizes
let sizes = {};
window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  // update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

//Animation

function animate() {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();

export default scene;
