import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; 

const App = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container?: Container) => {
        if (container) {
            console.log(container); // Safely log container if it exists
        } else {
            console.error("Container is undefined");
        }
    };

    return (
        <>
            {init && (
          <Particles
          
          id="tsparticles"
          //@ts-ignore
          particlesLoaded={particlesLoaded}
          options={{
              background: {
                  color: {
                      value: "transparent",
                  },
              },
              fpsLimit: 120,
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
                      //@ts-ignore
                      resize: true,
                  },
                  modes: {
                      push: {
                          quantity: 4,
                      },
                      repulse: {
                          distance: 200,
                          duration: 0.4,
                      },
                  },
              },
              particles: {
                  color: {
                      value: "#ffffff",
                  },
                  links: {
                      color: "#ffffff",
                      distance: 150,
                      enable: true,
                      opacity: 0.5,
                      width: 1,
                  },
                  move: {
                      direction: "none",
                      enable: true,
                      outModes: {
                          default: "bounce",
                      },
                      random: false,
                      speed: 6,
                      straight: false,
                  },
                  number: {
                      density: {
                          enable: true,
                          //@ts-ignore
                          area: 500,
                      },
                      value: 70,
                  },
                  opacity: {
                      value: 0.5,
                  },
                  shape: {
                      type: "circle",
                  },
                  size: {
                      value: { min: 1, max: 5 },
                  },
                  shadow: {
                      enable: true,
                      color: {
                          value: "#0000ff",
                      },
                      blur: 10,
                      offset: {
                          x: 0, 
                          y: 0, 
                      },
                  },
              },
              detectRetina: true,
          }}
          style={{
              position: 'absolute', 
              top: 0,
              right: 0,
             
              zIndex: -1,
          }}
      />
      
            
            )}
        </>
    );
};

export default App;
