import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
export function AnimatedGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const globeGroupRef = useRef<THREE.Group | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const mouseRef = useRef({
    x: 0,
    y: 0
  });
  const frameIdRef = useRef<number>();
  useEffect(() => {
    if (!containerRef.current) return;
    // Setup scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    // Setup camera
    const camera = new THREE.PerspectiveCamera(50, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 6;
    cameraRef.current = camera;
    // Setup renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    // Create globe group
    const globeGroup = new THREE.Group();
    globeGroupRef.current = globeGroup;
    scene.add(globeGroup);
    // Main globe sphere
    const sphereGeometry = new THREE.SphereGeometry(2, 64, 64);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
      emissive: 0xd4af37,
      emissiveIntensity: 0.2
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    globeGroup.add(sphere);
    // Latitude lines
    // for (let i = 0; i < 8; i++) {
    //   const lat = (i - 3.5) * 0.4;
    //   const radius = Math.sqrt(4 - lat * lat);
    //   const torusGeometry = new THREE.TorusGeometry(radius, 0.005, 16, 100);
    //   const torusMaterial = new THREE.MeshBasicMaterial({
    //     color: 0xd4af37,
    //     transparent: true,
    //     opacity: 0.4
    //   });
    //   const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    //   torus.position.y = lat;
    //   globeGroup.add(torus);
    // }
    // // Longitude lines
    // for (let i = 0; i < 12; i++) {
    //   const torusGeometry = new THREE.TorusGeometry(2, 0.005, 16, 100);
    //   const torusMaterial = new THREE.MeshBasicMaterial({
    //     color: 0xd4af37,
    //     transparent: true,
    //     opacity: 0.4
    //   });
    //   const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    //   torus.rotation.x = Math.PI / 2;
    //   torus.rotation.z = i * Math.PI / 6;
    //   globeGroup.add(torus);
    // }
    // Particles
    const particleCount = 50;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 2.1;
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xf4d03f,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    particlesRef.current = particles;
    globeGroup.add(particles);
    // Ambient glow
    const glowGeometry = new THREE.SphereGeometry(2.3, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0.05,
      side: THREE.BackSide
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    globeGroup.add(glow);
    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight1 = new THREE.PointLight(0xf4d03f, 1);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);
    const pointLight2 = new THREE.PointLight(0xd4af37, 0.5);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);
    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = event.clientX / window.innerWidth * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !camera || !renderer) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);
    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      if (globeGroup) {
        // Slow rotation
        globeGroup.rotation.y += 0.001;
        // Subtle parallax based on mouse
        const mouseX = mouseRef.current.x * 0.05;
        const mouseY = mouseRef.current.y * 0.05;
        globeGroup.rotation.x = mouseY;
        globeGroup.rotation.z = mouseX * 0.5;
      }
      // Pulse particles
      if (particlesRef.current) {
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < positions.length; i += 3) {
          const pulse = Math.sin(elapsedTime * 2 + i) * 0.02;
          const length = Math.sqrt(positions[i] ** 2 + positions[i + 1] ** 2 + positions[i + 2] ** 2);
          positions[i] *= 1 + pulse / length;
          positions[i + 1] *= 1 + pulse / length;
          positions[i + 2] *= 1 + pulse / length;
        }
        particlesRef.current.geometry.attributes.position.needsUpdate = true;
      }
      renderer.render(scene, camera);
    };
    animate();
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
    };
  }, []);
  return <div ref={containerRef} className="w-full h-full " />;
}
export default AnimatedGlobe;