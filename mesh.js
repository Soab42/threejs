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
const roomSize = 50;
for (let i = 0; i < 300; i++) {
  const x = Math.random() * roomSize - roomSize / 2;
  const y = 8 * Math.random(1);
  const z = Math.random() * roomSize - roomSize / 2;
  const color = Math.floor(Math.random() * 16777215).toString(16);
  addSphere([0.5, 32, 32], [x, y, z], `#${color}`);
}

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
    textMesh.position.set(0.5, 3, 0);
    textMesh.scale.set(0.65, 0.65, 0.65);
    textMesh.rotation.y = Math.PI;
  }
);
// section.material.color.set("red");
section.scale.set(1, 2, 2);
section.position.set(-2, 3.2, 0);

const section2 = addSectionAndText(
  "ঈদ মুবারক",
  [0, 0, 0],
  clickableObjects,
  "bangla",
  (textMesh) => {
    textMesh.position.set(4.5, 3, 2);
    textMesh.scale.set(0.65, 0.65, 0.65);
    textMesh.rotation.y = Math.PI;
  }
);
// section2.material.color.set("red");
section2.scale.set(1, 2, 2);
section2.position.set(2.8, 3.2, 2);

const section3 = addSectionAndText(
  "ঈদ মুবারক",
  [0, 0, 0],
  clickableObjects,
  "bangla",
  (textMesh) => {
    textMesh.position.set(1, 3, 2);
    textMesh.scale.set(0.65, 0.65, 0.65);
  }
);
// section3.material.color.set("red");
section3.scale.set(1, 2, 2);
section3.position.set(2.8, 3.2, 2);

const section4 = addSectionAndText(
  "Eid Mubarak",
  [0, 0, 0],
  clickableObjects,
  "english",
  (textMesh) => {
    textMesh.position.set(-4.4, 3, 0);
    textMesh.scale.set(0.65, 0.65, 0.65);
  }
);
// section.material.color.set("red");
section4.scale.set(1, 2, 2);
section4.position.set(-2, 3.2, 0);

// rotate opposite direction

// add3dObject("./3d/bulb.glb", [0, 0, 0], [10, 10, 10], (object) => {
//   console.log("3d object added to scene:", object);
//   object.material.color.set("red");
// });
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
