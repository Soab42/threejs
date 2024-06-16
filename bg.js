import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
// import hdr image
// import bathroom from "hdr/BathroomHard_Pierre.hdr";
// import bigWindow from "./public/hdr/BigWindowTree_Thea.hdr";
import bigWindow2 from "./public/hdr/BigWindowTree_Thea_2.hdr";
// import kitchen from "./hdr/Kitchen_Pierre.hdr";
// import naturalStudio from "./hdr/NaturalStudio_NAD.hdr";
// import whiteNeons from "./public/hdr/WhiteNeons_NAD.hdr";
//Scene
const scene = new THREE.Scene();

// add background
const loader = new RGBELoader();
loader.load(bigWindow2, (texture) => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.background = texture;
  scene.environment = texture;
});

// sizes
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

// gama correction
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;

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
// controls.enableZoom = false;
// controls.enablePan = false;
// controls.autoRotate = true;
// controls.autoRotateSpeed = 5;
// controls.maxPolarAngle = Math.PI / 2;
// controls.minPolarAngle = Math.PI / 2;
const loop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
};
loop();
