// src/ParticlesBackground.js
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: "#ff7e00"
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.6
          },
          size: {
            value: { min: 1, max: 3 }
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            outModes: {
              default: "bounce"
            }
          }
        },
        detectRetina: true
      }}
      className="absolute inset-0 z-0"
    />
  );
}
