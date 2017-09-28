import * as THREE from 'three';
import threeOrbitControls from './OrbitControls';
import Stats from 'stats.js';
import ant from './ant';
import './main.css';

const OrbitControls = threeOrbitControls(THREE);

const stats = new Stats();
document.body.appendChild(stats.domElement);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const controls = new OrbitControls(camera, renderer.domElement);

const axisHelper = new THREE.AxisHelper(10);
scene.add(axisHelper);

scene.add(ant(THREE));

/*let i =0;
let lastTimeStamp = 0;
const INTERVAL = 200;*/

const animate = timestamp => {
    stats.begin();
    /*camera.position.x += 0.05;
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.05;*/
    /*if(timestamp - lastTimeStamp > INTERVAL){
        group.position.x = i%10;
        i++;
        lastTimeStamp = timestamp;
    }*/

    renderer.render(scene, camera);
    stats.end();
    requestAnimationFrame(animate);
};
animate();