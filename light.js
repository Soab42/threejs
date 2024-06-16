import * as THREE from "three";
import scene from "./main";
import { RectAreaLightHelper } from "three/addons/helpers/RectAreaLightHelper.js";

let directionalLight, pointLight, spotLight, hemisphereLight, rectAreaLight;

// add light

// ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // color, intensity
scene.add(ambientLight);

// directional light
directionalLight = new THREE.DirectionalLight(0xccccff, 1);
directionalLight.position.set(40, 30, 10); // x, y, z position
scene.add(directionalLight);

// point light
pointLight = new THREE.PointLight(0xffffff, 10, 100); // color, intensity, distance
pointLight.position.set(5, 10, 0); // x, y, z position
// scene.add(pointLight);

// // spot light
spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(100, 1000, 100);
spotLight.angle = Math.PI / 4;
spotLight.penumbra = 0.1;
scene.add(spotLight);

// // hemisphere light
hemisphereLight = new THREE.HemisphereLight(0xb6d0e2, 0x080820, 0.1); // sky color, ground color, intensity
// scene.add(hemisphereLight);

const width = 10;
const height = 10;

// // add rectAreaLight
rectAreaLight = new THREE.RectAreaLight(0xffffff, 1, width, height); // color, intensity, width, height
rectAreaLight.position.set(-1, 0, -2);
rectAreaLight.rotateY(Math.PI);
scene.add(rectAreaLight);

let rectAreaLight2 = new THREE.RectAreaLight(0xffffff, 1, width, height); // color, intensity, width, height
rectAreaLight2.position.set(0, 0, 0);
rectAreaLight2.rotateY(Math.PI);
scene.add(rectAreaLight2);
// add helper

// directionalLightHelper
const directionalLightHelper = new THREE.DirectionalLightHelper(
  directionalLight,
  10,
  "blue"
);
// scene.add(directionalLightHelper);

// pointLightHelper
const pointLightHelper = new THREE.PointLightHelper(pointLight, 5, "white");
// scene.add(pointLightHelper);

// spotLightHelper;
const spotLightHelper = new THREE.SpotLightHelper(spotLight, "blue");
// scene.add(spotLightHelper);

// hemisphereLightHelper
const hemisphereLightHelper = new THREE.HemisphereLightHelper(
  hemisphereLight,
  5,
  "white"
);
// scene.add(hemisphereLightHelper);

// rectAreaLightHelper
const rectAreaLightHelper = new RectAreaLightHelper(rectAreaLight, "blue");
// scene.add(rectAreaLightHelper);
