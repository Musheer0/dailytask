import confetti from 'canvas-confetti';

export const fireworkEffect = () => {
  confetti({
    particleCount: 200, // Number of particles
    angle: 90,          // Angle of emission
    spread: 360,        // Spread of particles
    origin: { x: 0.5, y: 0.5 },  // Center of the screen
    shapes: ['circle', 'square', 'star'], // Shape of particles
    colors: [
        '#D1FAE5', // Emerald 50
        '#A7F3D0', // Emerald 100
        '#6EE7B7', // Emerald 200
        '#34D399', // Emerald 300
        '#10B981', // Emerald 400
        '#059669', // Emerald 500
        '#047857', // Emerald 600
        '#065F46', // Emerald 700
        '#064E3B', // Emerald 800
        '#064E3B'  // Emerald 900
    ], // Colors of the particles
    scalar: 1.2,        // Size of the particles
    gravity: 0.5        // Gravity effect for particles,
  });
};