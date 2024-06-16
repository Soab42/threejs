import * as THREE from "three";
const sunsetPalette = {
  amber: new THREE.MeshPhongMaterial({
    color: 0xff851b,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
  goldenYellow: new THREE.MeshPhongMaterial({
    color: 0xffdc00,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
  coral: new THREE.MeshPhongMaterial({
    color: 0xff4136,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
  softPink: new THREE.MeshPhongMaterial({
    color: 0xff69b4,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
  lavender: new THREE.MeshPhongMaterial({
    color: 0xb10dc9,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
};

const earthPalette = {
  sandBeige: new THREE.MeshPhongMaterial({
    color: 0xd2b48c,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
  terracotta: new THREE.MeshPhongMaterial({
    color: 0xa0522d,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
  oliveGreen: new THREE.MeshPhongMaterial({
    color: 0x3d9970,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
  chestnutBrown: new THREE.MeshPhongMaterial({
    color: 0x8b4513,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
  slateGray: new THREE.MeshPhongMaterial({
    color: 0x708090,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
};

const monoPalette = {
  crystalClear: new THREE.MeshPhongMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.1,
    shininess: 100,
  }),
  frostedWhite: new THREE.MeshPhongMaterial({
    color: 0xf8f8ff,
    transparent: true,
    opacity: 0.5,
    shininess: 100,
  }),
  paleGray: new THREE.MeshPhongMaterial({
    color: 0xd3d3d3,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
  charcoal: new THREE.MeshPhongMaterial({
    color: 0x36454f,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
  black: new THREE.MeshPhongMaterial({
    color: 0x000000,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
};

const jewelPalette = {
  rubyRed: new THREE.MeshPhongMaterial({
    color: 0x9b111e,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
  sapphireBlue: new THREE.MeshPhongMaterial({
    color: 0x0f52ba,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
  emeraldGreen: new THREE.MeshPhongMaterial({
    color: 0x50c878,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
  amethystPurple: new THREE.MeshPhongMaterial({
    color: 0x9966cc,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
  topazYellow: new THREE.MeshPhongMaterial({
    color: 0xffc87c,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
};

const pastelPalette = {
  mintGreen: new THREE.MeshPhongMaterial({
    color: 0x98ff98,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
  babyBlue: new THREE.MeshPhongMaterial({
    color: 0x89cff0,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
  peach: new THREE.MeshPhongMaterial({
    color: 0xffdab9,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
  lavender: new THREE.MeshPhongMaterial({
    color: 0xe6e6fa,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
  paleYellow: new THREE.MeshPhongMaterial({
    color: 0xffffe0,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
};

const metallicPalette = {
  silver: new THREE.MeshPhongMaterial({
    color: 0xc0c0c0,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
  gold: new THREE.MeshPhongMaterial({
    color: 0xffd700,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
  copper: new THREE.MeshPhongMaterial({
    color: 0xb87333,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
  bronze: new THREE.MeshPhongMaterial({
    color: 0xcd7f32,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
  gunmetal: new THREE.MeshPhongMaterial({
    color: 0x2a3439,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
};

const oceanicPalette = {
  lightAqua: new THREE.MeshPhongMaterial({
    color: 0x00ffff,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
  seafoamGreen: new THREE.MeshPhongMaterial({
    color: 0x32cd32,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
  turquoise: new THREE.MeshPhongMaterial({
    color: 0x00ced1,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
  deepOceanBlue: new THREE.MeshPhongMaterial({
    color: 0x2a52be,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
  teal: new THREE.MeshPhongMaterial({
    color: 0x008080,
    transparent: true,
    opacity: 0.7,
    shininess: 100,
  }),
};
export {
  earthPalette,
  sunsetPalette,
  oceanicPalette,
  monoPalette,
  jewelPalette,
  pastelPalette,
  metallicPalette,
};
// Example: creating a floor with different sections of the oceanic palette
// const floorGeometry = new THREE.PlaneGeometry(10, 10);
// const materials = [
//   oceanicPalette.lightAqua,
//   oceanicPalette.seafoamGreen,
//   oceanicPalette.turquoise,
//   oceanicPalette.deepOceanBlue,
//   oceanicPalette.teal
// ];

// materials.forEach((material, index) => {
//   const tile = new THREE.Mesh(floorGeometry, material);
//   tile.position.set(index * 10, 0, 0); // Adjust position as needed
//   scene.add(tile);
// });
