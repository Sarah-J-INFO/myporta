document.addEventListener("DOMContentLoaded", () => {
    
    const ratita = document.getElementById("ratita");
    const globo = document.getElementById("globo-dialogo");
    let tiempoEspera;

    // Lista de frases limpias enfocadas en Paquito
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
        "Ete flow tu no lo tiene"
    ];

    // Función principal para activar el diálogo
    function ratitaHabla(texto) {
        clearTimeout(tiempoEspera);
        if (globo) {
            globo.textContent = texto;
            globo.classList.remove("oculto");

            // Se esconde solito a los 4 segundos
            tiempoEspera = setTimeout(() => {
                globo.classList.add("oculto");
            }, 4000);
        }
    }

    // 1. Saludo inicial automático según la hora
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
            
            // Animación de brinco rápido al picarle
            ratita.style.transform = "scale(1.2) translateY(-15px)";
            setTimeout(() => {
                ratita.style.transform = "";
            }, 250);
        });

        // 3. Mini reacción rápida al pasar el cursor encima
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