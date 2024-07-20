"use client"

import React, { useRef, useEffect } from 'react';

const ParticleAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];

    const createParticle = (x, y) => {
      const particle = {
        x: x,
        y: y,
        size: Math.random() * 12 + 1,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5,
        color: ["#E2BFF9","#E87465","#6341EF","#76C599","#B6A7FF","#D84D41","#E8A4CF","#FEEFD4"],
      };
      particlesArray.push(particle);
    };

    const updateParticles = () => {
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].x += particlesArray[i].speedX;
        particlesArray[i].y += particlesArray[i].speedY;
        particlesArray[i].size *= 0.95;
        if (particlesArray[i].size < 0.5) {
          particlesArray.splice(i, 1);
          i--;
        }
      }
    };

    const drawParticles = () => {
      for (let i = 0; i < particlesArray.length; i++) {
        ctx.beginPath();
        ctx.arc(
          particlesArray[i].x,
          particlesArray[i].y,
          particlesArray[i].size,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = particlesArray[i].color[i];
        ctx.fill();
        // ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    };

    animate();

    const handleClick = (event) => {
      for (let i = 0; i < 20; i++) {
        createParticle(event.clientX, event.clientY);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: 'block', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none',zIndex:20 }} />;
};

export default ParticleAnimation;