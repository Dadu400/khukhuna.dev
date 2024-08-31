import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import type { ISourceOptions } from 'tsparticles-engine';

const ParticlesBackground = () => {
    const particlesInit = async (main: Engine) => {
        await loadFull(main);
    };

    const particlesOptions: ISourceOptions = {
        fpsLimit: 60,
        interactivity: {
            events: {
                onClick: {
                    enable: false
                },
                onHover: {
                    enable: false,
                    mode: "bubble"
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                bubble: {
                    distance: 40,
                    duration: 2,
                    opacity: 8,
                    size: 6,
                },
            },
        },
        particles: {
            color: {
                value: "#123123",
            },
            links: {
                enable: false,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "right",
                enable: true,
                outModes: "out",
                random: false,
                speed: 2,
                straight: false,
                bounce: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 1000,
                },
                value: 50,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "image",
                image: {
                    src: "https://i.imghippo.com/files/ZdMka1724951829.png",
                    width: 200,
                    height: 200
                }
            },
            size: {
                value: { min: 8, max: 25 },
            },
        },
        detectRetina: true,
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesOptions}
        />
    );
};

export default ParticlesBackground;