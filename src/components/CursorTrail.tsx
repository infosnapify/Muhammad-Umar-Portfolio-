import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
}

const COLORS = [
  '#f43f5e', // Hot pink
  '#fb7185', // Rose pink
  '#fda4af', // Light pink
  '#38bdf8', // Light blue
  '#fbbf24', // Amber gold
  '#e11d48', // Deep rose
];

export const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Only enable on desktop / laptop (non-touch devices with fine cursor & >= 768px screen)
    const isMobileDevice =
      window.innerWidth < 768 ||
      window.matchMedia('(pointer: coarse)').matches ||
      ('ontouchstart' in window && !window.matchMedia('(pointer: fine)').matches);

    if (isMobileDevice) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouseX = -100;
    let mouseY = -100;
    let targetX = -100;
    let targetY = -100;
    let isMoving = false;
    let moveTimeout: NodeJS.Timeout;

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const addParticles = (x: number, y: number, count = 3) => {
      for (let i = 0; i < count; i++) {
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 0.5;

        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.4,
          size: Math.random() * 6 + 3,
          color,
          alpha: 1,
          decay: Math.random() * 0.025 + 0.015,
        });
      }

      if (particles.length > 100) {
        particles = particles.slice(particles.length - 100);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      isMoving = true;
      addParticles(e.clientX, e.clientY, 3);

      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        isMoving = false;
      }, 150);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth cursor lerp
      mouseX += (targetX - mouseX) * 0.25;
      mouseY += (targetY - mouseY) * 0.25;

      // Draw cursor trailing glow ring if active
      if (mouseX > 0 && mouseY > 0 && isMoving) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 12, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(244, 63, 94, 0.15)';
        ctx.strokeStyle = '#f43f5e';
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#f43f5e';
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }

      // Render sparkle particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        p.size *= 0.95;

        if (p.alpha <= 0 || p.size <= 0.2) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hidden md:block fixed inset-0 pointer-events-none z-50 overflow-hidden"
    />
  );
};
