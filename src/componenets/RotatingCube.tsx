import { useEffect, useRef } from "react";
import * as THREE from "three";

const FACES = [
  { text: "Web\nDevelopment", color: "#1e3a5f" },
  { text: "Mobile\nApps", color: "#1e4976" },
  { text: "Cloud\nSolutions", color: "#2563eb" },
  { text: "AI\nAutomation", color: "#3b82f6" },
  { text: "DevOps", color: "#1e40af" },
  { text: "Security", color: "#172554" },
];

function makeTextCanvas(text: string, bgColor: string): HTMLCanvasElement {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  const grad = ctx.createLinearGradient(0, 0, size, size);
  grad.addColorStop(0, bgColor + "ee");
  grad.addColorStop(1, "#060810ee");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);

  ctx.strokeStyle = "rgba(59,130,246,0.5)";
  ctx.lineWidth = 8;
  ctx.strokeRect(14, 14, size - 28, size - 28);

  ctx.strokeStyle = "rgba(240,237,228,0.05)";
  ctx.lineWidth = 2;
  ctx.strokeRect(24, 24, size - 48, size - 48);

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const lines = text.split("\n");
  const lineHeight = 90;
  const startY = size / 2 - ((lines.length - 1) * lineHeight) / 2;

  lines.forEach((line, i) => {
    ctx.font =
      i === 0 ? "bold 76px Inter, sans-serif" : "600 62px Inter, sans-serif";
    ctx.fillStyle = i === 0 ? "#f0ede4" : "rgba(147,197,253,0.95)";
    ctx.fillText(line, size / 2, startY + i * lineHeight);
  });

  return canvas;
}

export default function RotatingCube() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 3.8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const materials = FACES.map((f) => {
      const canvas = makeTextCanvas(f.text, f.color);
      const texture = new THREE.CanvasTexture(canvas);
      return new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        opacity: 0.95,
        roughness: 0.2,
        metalness: 0.5,
      });
    });

    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    const edges = new THREE.EdgesGeometry(geometry);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.3,
    });
    cube.add(new THREE.LineSegments(edges, lineMat));

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const light1 = new THREE.PointLight(0x3b82f6, 4, 12);
    light1.position.set(4, 4, 4);
    scene.add(light1);
    const light2 = new THREE.PointLight(0x93c5fd, 2.5, 10);
    light2.position.set(-4, -3, -3);
    scene.add(light2);

    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    let currentRotX = 0;
    let currentRotY = 0;
    let time = 0;
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      time += 0.008;

      currentRotX += (targetY * 0.6 - currentRotX) * 0.05;
      currentRotY += (targetX * 0.8 - currentRotY) * 0.05;

      cube.rotation.x = currentRotX + time * 0.18;
      cube.rotation.y = currentRotY + time * 0.28;
      cube.position.y = Math.sin(time) * 0.12;

      light1.intensity = 3.5 + Math.sin(time * 1.5) * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement))
        mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
