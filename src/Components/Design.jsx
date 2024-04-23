import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import './Design.css'

const Design = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
    //   background: {
    //     color: {
    //       value: "#0d47a1",
    //     },
    //   },
    fullScreen: { enable: false },
        preset: "stars",
        particles: {
            number: {
              value: 30 // Adjust the number of particles
            },
            size: {
              value: 2 // Adjust the size of particles
            },
            color: {
              // Adjust the color of particles
              value: ["#d68bfb"] 
              // You can provide an array of colors for variation
            },
            interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                },
            },    
            move: {
                enable: true,
                speed: 2, // Adjust the speed of particle movement
                direction: "none", // Change to "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", or "top-left" for directional movement
                random: true, // Enable random direction
                straight: false, // Disable straight movement
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