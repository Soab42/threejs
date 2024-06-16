import * as THREE from "three";
import scene, { camera, controls, renderer } from "./main";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { CopyShader } from "three/examples/jsm/shaders/CopyShader";
import {
  addFloor,
  addPoll,
  addSectionAndText,
  addSignboard,
  addSphere,
} from "./meshObj";

// Initialize raycaster and mouse
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const clickableObjects = [];
controls.autoRotateSpeed = 5;

// add floor
addFloor();

// add sphere
addSphere();

// Add poll

addPoll();

// Add signboard

addSignboard();

// Add section and text

// Add all sections and text
addSectionAndText(
  "Section 1",
  [0.7, 2.3, 0.1],
  [1.6, 2.4, 0.1],
  clickableObjects
);
addSectionAndText(
  "Section 2",
  [0.7, 0.7, 0.1],
  [1.6, 0.6, 0.1],
  clickableObjects
);
addSectionAndText(
  "Section 3",
  [-2.6, 0.6, 0.1],
  [-1.6, 0.6, 0.1],
  clickableObjects
);
addSectionAndText(
  "Section 4",
  [-2.6, 2.4, 0.1],
  [-1.6, 2.4, 0.1],
  clickableObjects
);

// Event listener for mouse clicks
const onMouseClick = (event) => {
  // Calculate mouse position in normalized device coordinates
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Update the picking ray with the camera and mouse position
  raycaster.setFromCamera(mouse, camera);

  // Calculate objects intersecting the picking ray
  const intersects = raycaster.intersectObjects(clickableObjects);

  if (intersects.length > 0) {
    // Handle the click on the first intersected object
    const intersectedObject = intersects[0].object;
    console.log(`Clicked on: ${intersectedObject.name}`);
    // You can add more actions here, such as changing color or displaying information
  }
};

window.addEventListener("click", onMouseClick, false);

// Animation loop
export function animateMesh() {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animateMesh);

  // Add animation here
  // animate sphere orbit animation
}
animateMesh();
