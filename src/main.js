import * as THREE from 'three';
import threeOrbitControls from './OrbitControls';
import Stats from 'stats.js';
import './main.css';

const OrbitControls = threeOrbitControls(THREE);

const stats = new Stats();
document.body.appendChild(stats.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
    color: 'cornflowerblue',
    border: 'solid'
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

const animate = timestamp => {
    stats.begin();
    //camera.position.x += 0.05;
    //cube.rotation.x += 0.1;
    //cube.rotation.y += 0.05;

    renderer.render(scene, camera);
    stats.end();
    requestAnimationFrame(animate);
};
animate();