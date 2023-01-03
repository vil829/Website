import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
const canvas = document.querySelector('canvas.webgl')


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: false,
})
renderer.setSize( 1341, 926.015 );
//document.body.appendChild( renderer.domElement );

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

const spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 100, 1000, 100 );

spotLight.castShadow = true;

spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;

scene.add( spotLight );

const texture = new THREE.TextureLoader().load( 'textures/scrapmetal.jpg' );

const geometry = new THREE.BoxGeometry( 1, 2, 1 );
const material = new THREE.MeshStandardMaterial( { map: texture } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );


camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );     
    cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
};

animate();