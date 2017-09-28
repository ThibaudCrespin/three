export default THREE => {
    // Groups
    const group = new THREE.Group();
    const back = new THREE.Group();

    // Geometry
    const headGeo = new THREE.DodecahedronBufferGeometry();
    const corpseGeo = new THREE.DodecahedronBufferGeometry(1.2);
    const back1Geo = new THREE.CylinderGeometry(1, 0.5, 1.5, 12);
    const back2Geo = new THREE.CylinderGeometry(1, 0.2, 1.2, 12);
    const floorGeo = new THREE.PlaneGeometry(50, 50);

    // Material
    const material = new THREE.MeshNormalMaterial({
        flatShading: true
    });
    const floorMaterial = new THREE.MeshPhongMaterial({
        emissive: 0x000000,
        specular: 0x111111,
        side: THREE.DoubleSide
    });

    // Mesh
    const floor = new THREE.Mesh(floorGeo, floorMaterial);
    floor.rotation.x = Math.PI / 2;
    floor.receiveShadow = true;

    const head = new THREE.Mesh(headGeo, material);
    head.position.set(0, 3, 0);
    head.castShadow = true;

    const body = new THREE.Mesh(corpseGeo, material);
    body.position.set(1.4, 2, 0);
    body.castShadow = true;

    const back1 = new THREE.Mesh(back1Geo, material);
    back1.position.set(2.65, 2, 0);
    back1.rotation.x = Math.PI / 2;
    back1.rotation.z = -(Math.PI / 2);
    back1.castShadow = true;

    const back2 = new THREE.Mesh(back2Geo, material);
    back2.position.set(4., 2, 0);
    back2.rotation.z = Math.PI / 2;
    back2.rotation.x = -(Math.PI / 2);
    back2.castShadow = true;

    //  Update back
    back.add(back1);
    back.add(back2);

    back.rotation.z = -Math.PI / 12;
    back.position.set(-0.3, 0.5, 0);

    // Spotlight
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.angle = 10 * (Math.PI / 90);
    spotLight.position.set(10, 10, 0);
    spotLight.castShadow = true;
    const spotLightHelper = new THREE.SpotLightHelper(spotLight);
    group.add(spotLight);
    group.add(spotLightHelper);

    // Update group
    group.add(head);
    group.add(body);
    group.add(back);
    group.add(floor);

    return group;
}