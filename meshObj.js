import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import scene from "./main";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// Add sphere
export const addSphere = (size, position, color) => {
  const geometry = new THREE.SphereGeometry(...size);
  const material = new THREE.MeshStandardMaterial({
    color: color,
    roughness: 0.5,
  });
  const sphere = new THREE.Mesh(geometry, material);
  sphere.position.set(...position);
  scene.add(sphere);
  return sphere;
};

// add box to scene
export const addBox = (size, position, color) => {
  const geometry = new THREE.BoxGeometry(...size);
  const material = new THREE.MeshStandardMaterial({
    color: color,
    roughness: 0.5,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(...position);
  scene.add(cube);
  return cube;
};
// Add poll
export const addPoll = () => {
  const pollGeometry = new THREE.BoxGeometry(0.4, 5.5, 0.2);
  const pollMaterial = new THREE.MeshStandardMaterial({
    color: "black",
    roughness: 0.5,
  });
  const poll = new THREE.Mesh(pollGeometry, pollMaterial);
  poll.position.set(0, 0.5, 0);
  scene.add(poll);
  return poll;
};

// Add signboard
export const addSignboard = () => {
  const signboardGeometry = new THREE.BoxGeometry(3.4, 0.2, 6.2);
  const signboardMaterial = new THREE.MeshStandardMaterial({
    color: "black",
    roughness: 0.5,
  });
  const signboard = new THREE.Mesh(signboardGeometry, signboardMaterial);
  signboard.receiveShadow = true;
  signboard.castShadow = true;
  signboard.rotateY(Math.PI / 2);
  signboard.rotateZ(Math.PI / 2);
  signboard.position.set(0, 1.5, 0);
  scene.add(signboard);
  return signboard;
};

// add section and text
export const addSectionAndText = (
  sectionName,
  sectionPosition,
  clickableObjects,
  fontName = "english",
  callback
) => {
  const sectionGeometry = new THREE.BoxGeometry(1.4, 0.02, 2.8);
  const sectionMaterial = new THREE.MeshStandardMaterial({
    color: "green",
    roughness: 0.5,
  });
  const section = new THREE.Mesh(sectionGeometry, sectionMaterial);
  section.castShadow = true;
  section.rotateY(Math.PI / 2);
  section.rotateZ(Math.PI / 2);
  section.position.set(...sectionPosition);
  section.name = sectionName;
  scene.add(section);
  clickableObjects.push(section);
  addFont(sectionName, fontName, callback);
  return section;
};

//   add font to scene
const fontLoader = new FontLoader();

export const addFont = (text, fontName = "english", callback) => {
  fontLoader.load(`./public/font/${fontName}.json`, (font) => {
    // Create the text geometry
    const textGeometry = new TextGeometry(text, {
      font: font,
      size: 1,
      height: 0.1,
      curveSegments: 2,
      bevelEnabled: true,
      bevelThickness: 0.01,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 1,
    });

    // Create the text material with emissive property for neon effect
    const textMaterial = new THREE.MeshStandardMaterial({
      color: "white",
      roughness: 0.5,
      emissive: "white",
      //   emissiveIntensity: 0.1,
    });

    // Create the text mesh and set its position
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.set(0, 0, 0);
    scene.add(textMesh);

    // Execute the callback function, passing the textMesh
    if (callback) callback(textMesh);
  });
};
// add floor
export const addFloor = () => {
  const geometryFloor = new THREE.PlaneGeometry(10, 10);
  const materialFloor = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
  const floor = new THREE.Mesh(geometryFloor, materialFloor);
  floor.material.side = THREE.DoubleSide;
  floor.receiveShadow = true;
  floor.rotation.x = -Math.PI * 0.5;
  floor.position.set(0, -1, 0);
  scene.add(floor);
  return floor;
};

// add 3d object
export const add3dObject = (url, position, scale) => {
  let barModel;
  const assetLoader = new GLTFLoader();
  assetLoader.load(url, (gltf) => {
    const model = gltf.scene;
    model.position.set(...position);
    model.scale.set(...scale);
    barModel = model;
    scene.add(model);
  });
  return barModel;
};
