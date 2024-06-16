// custom room environment with three js and three js loaders
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import mosque from "./public/mosque.bmp";
import night from "./public/night.jpeg";
import sc from "./public/sc.png";

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

// create a floor
const textureLoader = new THREE.TextureLoader();
const CubeTextureLoader = new THREE.CubeTextureLoader();
// scene.background = CubeTextureLoader.load([sc, sc, sc, sc, sc, sc]);

// scene.background = textureLoader.load(mosque);
// scene.background = textureLoader.load(night);
// scene.background = textureLoader.load(sc);

// gama correction
// renderer.outputEncoding = THREE.sRGBEncoding;
// renderer.toneMapping = THREE.ACESFilmicToneMapping;
// renderer.toneMappingExposure = 0.5;
// create a camera
export const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 2;
// Set the camera position inside the room and make it look at a specific point
// Set camera position
camera.position.set(0, 1.5, 1.5);

scene.add(camera);

// add lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);
// const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
// scene.add(directionalLight2);
// const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.5);
// scene.add(directionalLight3);

// add orbit controls
export const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// update scene with resize window
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// helpers
const dir = new THREE.Vector3(1, 2, 0);

//normalize the direction vector (convert to vector of length 1)
dir.normalize();

const origin = new THREE.Vector3(0, 0, 0);
const length = 1;
const hex = 0xffff00;

// const arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex);
// scene.add(arrowHelper);

// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

// const gridHelper = new THREE.GridHelper(10, 10);
// scene.add(gridHelper);

const lightHeloper = new THREE.DirectionalLightHelper(directionalLight, 5);
scene.add(lightHeloper);

const cameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
scene.add(cameraHelper);

// animate
function animate() {
  controls.update();

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
