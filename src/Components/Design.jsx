import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import './Design.css'

const Design = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
     
      await loadSlim(engine);

    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
    fullScreen: { enable: true },
        preset: "stars",
        particles: {
            number: {
              value: 60 // Adjust the number of particles
            },
            size: {
              value: 1 // Adjust the size of particles
            },
            color: {
              // Adjust the color of particles
              value: ["#d68bfb"] 
              // You can provide an array of colors for variation
            },  
            move: {
                enable: true,
                speed: 2, // Adjust the speed of particle movement
                direction: "top", // Change to "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", or "top-left" for directional movement
                random: true, // Enable random direction
                straight: true, // Disable straight movement
                out_mode: "out", // Change to "out" or "bounce" to control particle movement outside the canvas
                bounce: false, // Enable bouncing movement if out_mode is set to "bounce"
                attract: {
                  enable: false, // Enable or disable attraction between particles
                  rotateX: 3000, // Rotate the particles around the X-axis
                  rotateY: 3000 // Rotate the particles around the Y-axis
                }
              },
  
            // Add more particle options as needed
          },

    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default Design