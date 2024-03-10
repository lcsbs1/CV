particlesJS("background", {

    particles: {
        number: {
            value: 30, //numero de pariculas
            density: {
                enable: true,
                value_area: 285, //area onde as particulas vao estar na tela
            },
        },
        color: {
            value: "#ffffff", // cor das particulas
        }, 
        shape: {
            type: "circle", // formato
        },
        opacity: {
            value: 0.8, //opacidade das particulas
            random: true, 
            anum: {
                enable: true,
                speed: 3,
                opacity_min: 0.1, 
                sync: false, 
            },
        },

        size: {
            value: 5, //tamanho das particulas
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 0.3,
                sync: false,
            },
        },

        //conectar linhas
        line_linked: {
            enable: true,
            distance: 150, //distancia uma das outras particulas
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },

        //movimento das particulas
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce", //particulas podem sair da tela
            bounce: false,
        },

        //configuraçoes de interaçao
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true, // habilitar interaçao
                    mode: "repulse",
                },
                onclick: {
                    enable: true, 
                    mode: "push, "
                },
                resize: true,
            },
        },
    },
    
}
)