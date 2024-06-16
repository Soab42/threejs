import * as THREE from "three";
import { scene, renderer, camera } from "./customEnv";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { alertClickOnBarModel } from ".";
// texture loader
const textureLoader = new THREE.TextureLoader();

// create a plane for the floor
const geometryFloor = new THREE.PlaneGeometry(10, 10);
const materialFloor = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
const meshFloor = new THREE.Mesh(geometryFloor, materialFloor);
meshFloor.material.side = THREE.DoubleSide;
meshFloor.position.set(0, 0, 0);
meshFloor.rotation.x = -Math.PI * 0.5;
scene.add(meshFloor);

const assetLoader = new GLTFLoader();
const group = new THREE.Group();
scene.add(group);
// add lights
//Create a DirectionalLight and turn on shadows for the light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 6, 5); //default; light shining from top
light.castShadow = true; // default false
scene.add(light);

//Set up shadow properties for the light
light.shadow.mapSize.width = 512; // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5; // default
light.shadow.camera.far = 500; // default

// Load models and add them to the group
assetLoader.load("./3d/poll.glb", (gltf) => {
  const model = gltf.scene;
  model.scale.set(0.5, 0.5, 0.5);
  model.position.set(0, 0, -0.1);
  model.castShadow = true;
  model.receiveShadow = true;

  group.add(model);
});

// syfuddhin
let barModel;
assetLoader.load("./3d/syfuddhin.glb", (gltf) => {
  const model = gltf.scene;
  model.position.set(-0.7, 2.9, 0.03);
  model.scale.set(0.3, 0.3, 0.3);
  model.castShadow = true;
  model.receiveShadow = true;
  barModel = model;
  group.add(model);
});

// home
assetLoader.load("./3d/home.glb", (gltf) => {
  const model = gltf.scene;
  model.position.set(1, 1.85, 0.44);
  model.scale.set(0.3, 0.3, 0.3);
  group.add(model);
});
// about
assetLoader.load("./3d/about.glb", (gltf) => {
  const model = gltf.scene;
  model.scale.set(0.3, 0.3, 0.3);
  model.position.set(-1.5, 1.85, -0.4);
  group.add(model);
});

// Add raycaster and mouse vector for detecting clicks
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onDocumentMouseDown(event) {
  // Calculate mouse position in normalized device coordinates
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Update the raycaster with the camera and mouse position
  raycaster.setFromCamera(mouse, camera);

  // Calculate objects intersecting the raycaster
  const intersects = raycaster.intersectObjects(group.children, true);

  // Check which child element is clicked
  if (intersects.length > 0) {
    const clickedObject = intersects[0].object;
    if (clickedObject.parent === barModel) {
      console.log("Bar model clicked!");
      alertClickOnBarModel("Bar model clicked!");
      // play audio
      const audio = new Audio("./audio/song.mp3");
      audio.play();
    } else if (clickedObject.parent === barModel2) {
      console.log("Bar model 2 clicked!");
      alertClickOnBarModel("Bar model 2 clicked!");
    } else if (clickedObject.parent === barModel3) {
      console.log("Bar model 3 clicked!");
      alertClickOnBarModel("Bar model 3 clicked!");
    } else if (clickedObject.parent === barModel4) {
      console.log("Bar model 4 clicked!");
      alertClickOnBarModel("Bar model 4 clicked!");
    }
  }
}

// Attach event listener to the renderer's DOM element
renderer.domElement.addEventListener("mousedown", onDocumentMouseDown, false);
