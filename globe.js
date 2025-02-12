/* New file: Initialize THREE.js and create a rotating globe */
(function() {
  // Create scene, camera and renderer
  const scene = new THREE.Scene();
  // Ajout d'une lumière ambiante et directionnelle
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  const camera = new THREE.PerspectiveCamera(75, document.getElementById('globe-container').clientWidth / document.getElementById('globe-container').clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(document.getElementById('globe-container').clientWidth, document.getElementById('globe-container').clientHeight);
  document.getElementById('globe-container').appendChild(renderer.domElement);

  // Create globe geometry and material with texture
  const geometry = new THREE.SphereGeometry(5, 32, 32);
  const loader = new THREE.TextureLoader();
  const texture = loader.load('images/earth.jpg'); // Assurez-vous que le fichier existe
  const material = new THREE.MeshBasicMaterial({ map: texture }); // Ajout de la texture
  const globe = new THREE.Mesh(geometry, material);
  scene.add(globe);

  // Position the camera so the globe is visible
  camera.position.z = 12;

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    globe.rotation.y += 0.005;
    renderer.render(scene, camera);
  }
  animate();

  // Adjust canvas size on window resize
  window.addEventListener('resize', () => {
    const container = document.getElementById('globe-container');
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
})();
