import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import bigWindow from "./public/hdr/BigWindowTree_Thea_2.hdr";
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
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

// add background image
// Load background texture

rgbeLoader.load(bigWindow, (texture) => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.background = texture;
  scene.environment = texture;
});
// create a camera
export const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;
camera.position.set(0, 0, 5.5);
scene.add(camera);

// add orbit controls
export const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// add renderer
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

// update scene with resize window
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
export default scene;
