// Configuración para la página de episodio individual
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el ID del episodio de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const episodeId = urlParams.get('id');
    
    if (episodeId) {
        // Cargar los datos del episodio
        loadEpisodeData(episodeId);
        
        // Configurar los botones de compartir
        setupShareButtons();
    } else {
        // Redirigir a la página de episodios si no hay ID
        window.location.href = 'episodios.html';
    }
});

// Función para cargar los datos del episodio
function loadEpisodeData(episodeId) {
    try {
        // Obtener los episodios del localStorage
        const allEpisodesJSON = localStorage.getItem('allEpisodes');
        
        if (!allEpisodesJSON) {
            // Si no hay datos en localStorage, cargar datos estáticos
            loadStaticEpisodeData(episodeId);
            return;
        }
        
        const allEpisodes = JSON.parse(allEpisodesJSON);
        const episode = allEpisodes.find(ep => ep.id.toString() === episodeId.toString());
        
        if (!episode) {
            // Si no se encuentra el episodio, cargar datos estáticos
            loadStaticEpisodeData(episodeId);
            return;
        }
        
        // Actualizar la página con los datos del episodio
        updateEpisodePage(episode);
        
        // Cargar la transcripción del episodio
        loadEpisodeTranscript(episodeId);
        
        // Configurar la navegación entre episodios
        setupEpisodeNavigation(episodeId, allEpisodes);
    } catch (error) {
        console.error('Error al cargar los datos del episodio:', error);
        loadStaticEpisodeData(episodeId);
    }
}

// Función para cargar datos estáticos del episodio (fallback)
function loadStaticEpisodeData(episodeId) {
    // Datos estáticos basados en los PDFs analizados
    const staticEpisodes = {
        '7': {
            id: 7,
            title: "Episodio 7: Impostor",
            date: "24 Abril 2025",
            duration: "6:45",
            description: "En este episodio, hablo sobre el síndrome del impostor. Esa sensación de estar ocupando un lugar que no nos corresponde, de haber engañado a todos, incluso a nosotros mismos. Comparto mi experiencia durante una auditoría ISO en la empresa y cómo, a pesar del éxito, seguía esperando que alguien señalara que no era suficiente.",
            image: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_episode/43193199/43193199-1745337437474-109f7aae326cc.jpg",
            audio: "https://anchor.fm/s/1020c2ddc/podcast/play/101626010/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2025-3-22%2F398824291-44100-2-13c6f7a499d01.m4a"
        },
        '6': {
            id: 6,
            title: "Episodio 6: Enseñar",
            date: "23 Abril 2025",
            duration: "6:27",
            description: "Esta semana hablo de algo que descubrí sin buscarlo, pero que terminó dándole un nuevo sentido a mi trabajo: enseñar. Más allá de tickets, redes y servidores, descubrí lo gratificante que es compartir lo que sé, ver cómo alguien entiende algo por primera vez y cómo esa chispa cambia su rumbo.",
            image: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_episode/43193199/43193199-1745337437474-109f7aae326cc.jpg",
            audio: "https://anchor.fm/s/1020c2ddc/podcast/play/101626010/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2025-3-22%2F398824291-44100-2-13c6f7a499d01.m4a"
        },
        '1': {
            id: 1,
            title: "Episodio 1: El idioma de sus ojos",
            date: "18 Abril 2025",
            duration: "3:00",
            description: "Bienvenidos a Voces del Alma. Un espacio donde las palabras se transforman en emociones, y donde la poesía no solo se lee, sino que se siente. En este primer episodio, exploro cómo a veces, la mirada dice más que cualquier palabra.",
            image: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/43193199/43193199-1741220376205-32587b8700e42.jpg",
            audio: "https://anchor.fm/s/1020c2ddc/podcast/play/99486586/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2025-3-22%2F398829252-44100-2-fc88f640add4e.m4a"
        }
    };
    
    const episode = staticEpisodes[episodeId];
    
    if (episode) {
        updateEpisodePage(episode);
        loadEpisodeTranscript(episodeId);
    } else {
        // Si no se encuentra el episodio, redirigir a la página de episodios
        window.location.href = 'episodios.html';
    }
}

// Función para actualizar la página con los datos del episodio
function updateEpisodePage(episode) {
    // Actualizar el título de la página
    document.title = `${episode.title} - Voces del Alma`;
    
    // Actualizar la imagen del episodio
    const episodeImage = document.getElementById('episode-image');
    episodeImage.src = episode.image;
    episodeImage.alt = episode.title;
    
    // Actualizar el título y metadatos
    document.getElementById('episode-title').textContent = episode.title;
    document.getElementById('episode-date').textContent = episode.date;
    document.getElementById('episode-duration').textContent = episode.duration;
    
    // Actualizar la descripción
    document.getElementById('episode-description').innerHTML = `<p>${episode.description}</p>`;
    
    // Actualizar el reproductor de audio
    const audioSource = document.getElementById('audio-source');
    audioSource.src = episode.audio;
    
    // Recargar el reproductor de audio
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.load();
}

// Función para cargar la transcripción del episodio
function loadEpisodeTranscript(episodeId) {
    // En un entorno real, esto sería una llamada a la API o a un archivo
    // Para este ejemplo, usaremos datos estáticos basados en los PDFs analizados
    const transcripts = {
        '7': `<p>Bienvenidos a Voces del Alma, ese espacio donde nuestras dudas más profundas encuentran eco. Soy Anthony, y hoy quiero hablar sobre algo que muchos sentimos pero pocos nos atrevemos a confesar: el síndrome del impostor.</p>
              <p>Esa sensación de estar ocupando un lugar que no nos corresponde. De haber engañado a todos, incluso a nosotros mismos. De esperar, con el corazón encogido, que alguien señale lo obvio: que no somos suficientes.</p>
              <p>Hace apenas dos semanas, vivimos una auditoría ISO en la empresa. Durante meses, mi equipo y yo habíamos trabajado en la documentación de procesos, en los manuales técnicos, en cada detalle que nos solicitaron. Y aun así, la noche anterior, me encontré revisando todo obsesivamente, convencido de que algo estaba terriblemente mal.</p>
              <p>Recuerdo perfectamente esa sensación: el sudor frío en las manos mientras repasaba los documentos, la certeza de que los auditores descubrirían algún error garrafal, alguna falla que yo había pasado por alto. La voz en mi cabeza repetía sin cesar: "No estás preparado. Van a darse cuenta de que no sabes lo que haces".</p>
              <h4>El disfraz que creemos llevar</h4>
              <p>El síndrome del impostor es como llevar un disfraz invisible. Aunque nadie más lo ve, nosotros lo sentimos: pesado, ajeno, incómodo. Estamos convencidos de que en cualquier momento la máscara caerá, y quedaremos expuestos.</p>
              <p>Durante la auditoría, cada pregunta me parecía una trampa. Cada solicitud de evidencia, una oportunidad para fallar. Mis respuestas salían entrecortadas, a pesar de que conocía perfectamente el material. Mis compañeros parecían tan seguros, tan en control, mientras yo me sentía como un intruso en mi propio puesto.</p>
              <p>Lo paradójico es que quienes más padecen este síndrome suelen ser personas competentes, responsables, perfeccionistas. No es la mediocridad la que nos atormenta... es el miedo a no estar a la altura de lo que otros esperan de nosotros.</p>
              <h4>Poema: "Intruso"</h4>
              <blockquote>
                <p>Hay días en que me miro al espejo<br>
                y no reconozco al que me devuelve la mirada.<br>
                Lleva mi ropa, tiene mi rostro,<br>
                pero sus ojos guardan una pregunta<br>
                que yo no sé responder.</p>
                
                <p>Me muevo entre documentos sellados,<br>
                certificaciones enmarcadas,<br>
                como quien camina por una casa ajena<br>
                tratando de no despertar a sus dueños.</p>
                
                <p>Cada felicitación es una moneda falsa,<br>
                brillante pero hueca.<br>
                Cada "bien hecho" resuena con eco,<br>
                como si estuviera dirigido<br>
                a alguien que está detrás de mí.</p>
                
                <p>Y mientras todos celebran al fantasma<br>
                que han proyectado sobre mi piel,<br>
                yo espero, con el aliento contenido,<br>
                el momento inevitable<br>
                en que la luz cambie<br>
                y la sombra desaparezca.</p>
                
                <p>Pero quizás,<br>
                solo quizás,<br>
                no hay ningún intruso.<br>
                Quizás la casa siempre fue mía,<br>
                y el único impostor<br>
                es este miedo<br>
                que no me deja habitar<br>
                lo que he construido.</p>
              </blockquote>
              <p>Si algo he aprendido en este camino, es que todos, absolutamente todos, tenemos momentos en que nos sentimos impostores. Incluso aquellos que admiramos, que nos parecen inquebrantables en su confianza.</p>
              <p>Tal vez la clave no sea eliminar por completo esa sensación, sino aprender a coexistir con ella sin dejar que nos paralice. Usarla como motor para seguir aprendiendo, creciendo, mejorando... pero sin permitir que nos defina.</p>
              <p>Porque al final, nuestro valor no reside en ser perfectos, sino en ser auténticos. En atrevernos a ser vulnerables, a equivocarnos, a levantarnos. En construir con las manos imperfectas que tenemos, no con las ideales que imaginamos.</p>
              <p>Y quizás, en ese acto de construcción imperfecta, en esa vulnerabilidad compartida, está la verdadera pertenencia que tanto anhelamos.</p>`,
        '6': `<p>Bienvenidos a Voces del Alma, un espacio donde las historias se entrelazan con el corazón. Soy Anthony, y hoy quiero compartir algo que descubrí sin buscarlo, pero que con el tiempo se ha convertido en una de las partes más gratificantes de mi trabajo.</p>
              <p>Antes de comenzar, quiero contarles que la semana pasada fue especialmente caótica: tuvimos una auditoría de las normas ISO en el trabajo, en casa hubo problemas con la plomería y el tinaco, y además mi hija se enfermó. Afortunadamente, ya está mejor, y eso me da un poco de calma. Y en medio de todo ese caos, encontré un momento para detenerme y pensar en esto que hoy quiero contarles.</p>
              <p>Algo que va mucho más allá de programar, de resolver tickets o de configurar servidores. Hoy quiero hablarles de… enseñar.</p>
              <h4>El inicio de todo</h4>
              <p>Todo comenzó alrededor de mi segundo año en el área de sistemas. En ese tiempo, entró Eduardo, y sin pensarlo, sentí la necesidad de compartir con él todo lo que me había costado aprender. Porque cuando yo llegué, recién egresado, no había nadie que me guiara, y eso lo hacía todo más complicado. Pero lo curioso es que, con el tiempo, esa necesidad de ayudar a los demás se fue transformando en algo más profundo: una pasión por enseñar. Como en este campo la rotación es constante, siempre hay alguien nuevo a quien acompañar, y esa es la parte de mi trabajo que más me ha cambiado.</p>
              <p>Fue hace un par de años que lo entendí con claridad: ya no lo hacía solo por ayudar. Lo disfrutaba. Incluso he pensado en abrir un canal de YouTube para compartir lo que sé, porque lo que realmente me apasiona es ver ese 'clic' en las personas cuando finalmente entienden algo.</p>
              <p>Y más allá de lo digital, también me gustaría algún día dar clases en una universidad. Ser ese tipo de profesor que deja huella, como los que yo tuve: apasionados, entregados, que no solo explicaban, sino que se aseguraban de que de verdad entendiéramos lo que estábamos haciendo. Porque enseñar no es repetir fórmulas, es conectar con el otro y despertar su curiosidad.</p>
              <h4>Poema: "Educar" de Gabriel Celaya</h4>
              <blockquote>
                <p>Educar es lo mismo<br>
                que poner motor a una barca…<br>
                hay que medir, pensar, equilibrar…<br>
                y poner todo en marcha.</p>
                
                <p>Pero para eso,<br>
                uno tiene que llevar en el alma<br>
                un poco de marino…<br>
                un poco de pirata…<br>
                un poco de poeta…<br>
                y un kilo de paciencia concentrada.</p>
                
                <p>Pero es consolador soñar<br>
                mientras uno trabaja,<br>
                que ese barco, ese niño<br>
                irá muy lejos por el agua.</p>
                
                <p>Soñar que ese navío<br>
                llevará nuestra carga de palabras<br>
                hacia puertos distantes, hacia islas lejanas.</p>
                
                <p>Soñar que cuando un día<br>
                esté durmiendo nuestra propia barca,<br>
                en barcos nuevos seguirá<br>
                nuestra bandera enarbolada.</p>
              </blockquote>
              <p>Enseñar es eso: sembrar en aguas desconocidas con la fe de que, algún día, esa semilla se convertirá en un barco que navegará más allá de lo que imaginamos. Y aunque no siempre veamos el destino final, basta con saber que pusimos el motor en marcha.</p>
              <p>Y quizás, en el futuro, me toque guiar desde un aula o frente a una cámara… pero siempre con esa misma intención: ayudar a otros a desplegar sus velas.</p>
              <p>Gracias por acompañarme en este viaje por el mundo de la enseñanza. Si este episodio resonó contigo, compártelo con alguien que haya sido tu guía o tu alumno. Nos escuchamos en el próximo capítulo de Voces del Alma, donde seguiremos explorando las emociones que nos hacen humanos. Hasta entonces, recuerden: enseñar no es solo encender una chispa… es mantenerla viva.</p>`,
        '1': `<p>Bienvenidos a Voces del Alma. Un espacio donde las palabras se transforman en emociones, y donde la poesía no solo se lee, sino que se siente. Mi nombre es Anthony Tepach, y en esta etapa de mi vida, la necesidad de expresarme me encontró. A veces, la rutina, el estrés y el día a día nos ahogan, nos dejan con sentimientos atrapados, con palabras que no encontramos cómo decir. Este podcast nace como un escape, un refugio donde la poesía se convierte en voz y en compañía. Un escape de mi vida cotidiana y de mi naturaleza introvertida, una forma de expresar lo que a veces me cuesta decir en voz alta.</p>
              <p>Aquí exploraremos poemas que nos hagan revivir, sentir o conectar. Porque la poesía no entiende de nombres ni de tiempos, solo de emociones. Si alguna vez has sentido que hay cosas que solo se pueden decir en susurros o entre líneas, este es tu espacio.</p>
              <h4>Poema: El idioma de sus ojos</h4>
              <blockquote>
                <p>Apoyada sobre la mesa,<br>
                con la mirada entrelazada en la mía,<br>
                había un brillo en sus ojos,<br>
                un reflejo de algo no dicho,<br>
                de algo que flotaba en el aire<br>
                sin atreverse a caer.</p>
                
                <p>El tiempo se estiró entre nosotros,<br>
                las palabras se volvieron juego,<br>
                un "¿qué?"<br>
                respondido con una sonrisa<br>
                y un "nada"<br>
                que escondía demasiado.</p>
                
                <p>El silencio tenía peso,<br>
                pero no era incómodo,<br>
                era un vaivén entre el nerviosismo<br>
                y la certeza de estar ahí,<br>
                mirándonos,<br>
                entendiendo sin hablar.</p>
                
                <p>Y cuando aquel brillo me inquietó,<br>
                cuando sentí que su mirada<br>
                decía más de lo que yo podía sostener,<br>
                solo atiné a apretar su nariz,<br>
                a decir su nombre con la risa<br>
                para disfrazar mi propio temblor.</p>
                
                <p>Ella sonrió, pero no desvió la mirada.<br>
                Como si supiera,<br>
                como si entendiera<br>
                que a veces,<br>
                lo que callamos<br>
                es justo lo que más se escucha.</p>
              </blockquote>
              <p>A veces, la mirada dice más que cualquier palabra. Nos traiciona, nos delata, nos conecta. Y es ahí, en ese juego de silencios y gestos, donde muchas veces se encuentran las emociones más profundas. En este espacio, vamos a explorar esos sentimientos a través de la poesía, dejando que los versos hablen por nosotros.</p>
              <p>Gracias por escuchar Voces del Alma. Si te gustó este episodio, no olvides seguir el podcast y compartirlo con alguien a quien también le puedan llegar estas palabras. Nos escuchamos en el próximo capítulo, donde descubriremos juntos nuevas emociones y versos que nos harán vibrar.</p>`
    };
    
    const transcript = transcripts[episodeId];
    
    if (transcript) {
        document.getElementById('episode-transcript').innerHTML = transcript;
    } else {
        document.getElementById('episode-transcript').innerHTML = '<p>La transcripción de este episodio no está disponible en este momento.</p>';
    }
}

// Función para configurar la navegación entre episodios
function setupEpisodeNavigation(currentId, allEpisodes) {
    const prevButton = document.getElementById('prev-episode');
    const nextButton = document.getElementById('next-episode');
    
    // Convertir a número para comparaciones
    const currentIdNum = parseInt(currentId);
    
    // Encontrar los episodios anterior y siguiente
    const currentIndex = allEpisodes.findIndex(ep => ep.id === currentIdNum);
    
    if (currentIndex > 0) {
        // Hay un episodio anterior
        const prevEpisode = allEpisodes[currentIndex - 1];
        prevButton.href = `episodio.html?id=${prevEpisode.id}`;
        prevButton.style.display = '';
    } else {
        // No hay episodio anterior
        prevButton.style.display = 'none';
    }
    
    if (currentIndex < allEpisodes.length - 1) {
        // Hay un episodio siguiente
        const nextEpisode = allEpisodes[currentIndex + 1];
        nextButton.href = `episodio.html?id=${nextEpisode.id}`;
        nextButton.style.display = '';
    } else {
        // No hay episodio siguiente
        nextButton.style.display = 'none';
    }
}

// Función para configurar los botones de compartir
function setupShareButtons() {
    const shareButtons = {
        facebook: document.getElementById('share-facebook'),
        twitter: document.getElementById('share-twitter'),
        whatsapp: document.getElementById('share-whatsapp'),
        copyLink: document.getElementById('copy-link')
    };
    
    const pageUrl = window.location.href;
    const pageTitle = document.title;
    
    // Facebook
    shareButtons.facebook.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`, 'facebook-share', 'width=580,height=296');
    });
    
    // Twitter
    shareButtons.twitter.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(pageTitle)}&url=${encodeURIComponent(pageUrl)}`, 'twitter-share', 'width=550,height=235');
    });
    
    // WhatsApp
    shareButtons.whatsapp.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(pageTitle + ' ' + pageUrl)}`, 'whatsapp-share', 'width=580,height=296');
    });
    
    // Copiar enlace
    shareButtons.copyLink.addEventListener('click', function() {
        navigator.clipboard.writeText(pageUrl).then(function() {
            // Cambiar temporalmente el texto del botón
            const originalText = shareButtons.copyLink.innerHTML;
            shareButtons.copyLink.innerHTML = '<i class="fas fa-check"></i><span>¡Enlace copiado!</span>';
            
            // Restaurar el texto original después de 2 segundos
            setTimeout(function() {
                shareButtons.copyLink.innerHTML = originalText;
            }, 2000);
        }).catch(function(err) {
            console.error('Error al copiar el enlace:', err);
        });
    });
}
