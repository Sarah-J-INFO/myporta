document.addEventListener("DOMContentLoaded", () => {
    
    const ratita = document.getElementById("ratita");
    const globo = document.getElementById("globo-dialogo");
    let tiempoEspera;
    
    const frasesRandom = [
        "¡Mira cómo meto los pasos prohibidos!",
        "Me llamo Paquito, el guardián oficial de este espacio.",
        "No puedo dejar de bailar!",
        "¡Qué onda! Gracias por pasar a visitar mi rincón web.",
        "¿Sabías que me encanta el queso digital?",
        "¡Estás explorando un portafolio personal, nada de aqui es profesional!",
        "Si te quedas viendo un rato, tal vez baile más rápido... o tal vez no.",
        "Me agradas, humano. Date una vuelta por las otras secciones.",
        "¡Pasate por las redes sociales!",
        "Echame porras",
        "Te acompano al ritmo de la musica imaginaria de mi cabeza",
        "Eso paquito, eso paquito",
        "Pon la musica que quieras, yo agarro el ritmo como si la escuchara",
        "Ete flow tu no lo tiene",
        "🎤Y mi corazón idiota siempre brilla más que el sol...",
        "🎤¡Tú dices 'no', pero tienes los ojos de una persiana americana!",
        "🎤Rayando el sol, desesperación... ¡Es más fácil llegar al sol que a tu corazón!",
        "🎤Si le das más poder al poder, más duro te van a venir a joder.",
        "🎤Suelta el listón de tu pelo, desvanece el vestido sobre tu cuerpo...",
        "🎤Amor prohibido murmuran por las calles... ¡porque somos de distintas sociedades!",
        "🎤Y la Chona se mueve, y la gente le grita: ¡No te pases, Chona!",
        "🎤Procura coquetearme más... y no reparo de lo que te pueda pasar.",
        "🎤Ya lo ves, la vida es así... tú te vas y yo me quedo aquí.",
        "🎤Querida... ¡hazlo por quien más quieras tú, yo te lo pido por Dios!",
        "🎤Así que corre, corre, corre, corazón... ¡De los dos el más rápido tengo que ser yo!",
        "🎤Tití me preguntó si tengo muchas novias... ¡hoy tengo a una, mañana a otra!",
        "🎤Compa, ¿qué le parece esa morra? La que anda bailando sola...",
        "🎤La mano arriba, cintura sola, da la media vuelta... ¡Dança Kuduro!"
    ];

    
    function ratitaHabla(texto) {
        clearTimeout(tiempoEspera);
        if (globo) {
            globo.textContent = texto;
            globo.classList.remove("oculto");

    
            tiempoEspera = setTimeout(() => {
                globo.classList.add("oculto");
            }, 4000);
        }
    }


    setTimeout(() => {
        const hora = new Date().getHours();
        let saludo = "¡Hola! Bienvenido a este portafolio.";
        
        if (hora >= 6 && hora < 12) saludo = "¡Buenos días! Qué temprano andas por aquí. Paquito ya está activo.";
        else if (hora >= 12 && hora < 19) saludo = "¡Buenas tardes! Disfruta el recorrido por la web.";
        else saludo = "¡Buenas noches! ¿Trabajando hasta tarde? Yo pongo el baile.";
        
        ratitaHabla(saludo);
    }, 1500);

    if (ratita) {
        ratita.addEventListener("click", () => {
            const fraseAleatoria = frasesRandom[Math.floor(Math.random() * frasesRandom.length)];
            ratitaHabla(fraseAleatoria);
            

            ratita.style.transform = "scale(1.2) translateY(-15px)";
            setTimeout(() => {
                ratita.style.transform = "";
            }, 250);
        });


        ratita.addEventListener("mouseenter", () => {
            if (globo && globo.classList.contains("oculto")) {
                globo.textContent = "¡Epa! ¿Me vas a picar?";
                globo.classList.remove("oculto");
                
                clearTimeout(tiempoEspera);
                tiempoEspera = setTimeout(() => {
                    globo.classList.add("oculto");
                }, 2000);
            }
        });
    }
});
