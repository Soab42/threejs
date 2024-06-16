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
const bgLoader = new THREE.TextureLoader();
// const bgTexture = bgLoader.load("./public/makka.jpg");
// scene.background = bgTexture;
// scene.environment = bgTexture;

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
camera.position.set(12, 10, 12);
scene.add(camera);

// fixed camera zoom
camera.zoom = 0.5;

// add orbit controls
export const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.maxDistance = 10;
controls.minDistance = 5;
controls.maxZoom = 10;
controls.minZoom = 0.5;
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
