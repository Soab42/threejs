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
  add3dObject,
  addFloor,
  addFont,
  addPoll,
  addSectionAndText,
  addSignboard,
  addSphere,
} from "./meshObj";

const clickableObjects = [];
controls.autoRotateSpeed = 1;
// addFloor();
addSphere([0.5, 32, 32], [0, 2, 0], "red");

// addFont("ঈদ মুবারক", "bangla", (textMesh) => {
//   console.log("Text mesh added to scene:", textMesh);
//   textMesh.position.set(0, 1, 0);
// });
const section = addSectionAndText(
  "Eid Mubarak",
  [0, 0, 0],
  clickableObjects,
  "english",
  (textMesh) => {
    textMesh.position.set(-2.5, -0.2, 0);
    textMesh.scale.set(0.65, 0.65, 0.65);
  }
);
section.material.color.set("red");
section.scale.set(1, 2, 2);

const section2 = addSectionAndText(
  "ঈদ মুবারক",
  [0, 0, 0],
  clickableObjects,
  "bangla",
  (textMesh) => {
    textMesh.position.set(1.8, -0.2, 0);
    textMesh.scale.set(0.65, 0.65, 0.65);
    textMesh.rotation.y = Math.PI;
  }
);
section2.material.color.set("red");
section2.scale.set(1, 2, 2);
// rotate opposite direction

add3dObject("./3d/bulb.glb", [10, 10, 10], [1, 1, 1]);
// Animation loop
export function animateMesh() {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animateMesh);
  controls.autoRotate = true;
  // Add animation here
  // animate sphere orbit animation
}
animateMesh();
