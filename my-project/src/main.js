import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'

//Get Canvas Dom
const canvas = document.getElementById('canvas')

//Create a new Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#FFFFFF')
//Create and setup Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight);
camera.position.z = 5;
//Create and setup Lighting
const light = new THREE.DirectionalLight(0xffffff, 10);
light.position.set(1,1,1);
scene.add(light);
//Create and setup The Renderer
const render = new THREE.WebGLRenderer({canvas});
render.setSize(window.innerWidth, window.innerHeight);
render.setPixelRatio(window.devicePixelRatio);

//append renderer to body
// document.body.appendChild(render.domElement);

//Create a 3D shape
const Geometry = new THREE.BoxGeometry();
//Create a material for the shape
const material = new THREE.MeshLambertMaterial({color: '#0000FF', emissive: '#FF0000'});
//Create Mesh
const cube = new THREE.Mesh(Geometry, material);
//add shape to scene
scene.add(cube);

//Orbit Controls
const control = new OrbitControls(camera, render.domElement);
control.enableDamping = true;
control.dampingFactor = 0.05;
control.enableZoom = true;
control.enablePan = true;


//Makes the shape rotate
function animate(){
    requestAnimationFrame(animate); 

    cube.rotation.x +=0.01;
    cube.rotation.y +=0.01;

    control.update();

    render.render(scene, camera);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  render.setSize(window.innerWidth, window.innerHeight);
});


