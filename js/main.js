// Configuración principal
document.addEventListener('DOMContentLoaded', function() {
    // Cargar episodios recientes
    loadRecentEpisodes();
    
    // Configurar el toggle del tema oscuro
    setupDarkModeToggle();
    
    // Configurar el menú móvil
    setupMobileMenu();
    
    // Configurar el reproductor de audio
    setupAudioPlayer();
});

// Función para cargar episodios recientes desde el RSS
async function loadRecentEpisodes() {
    try {
        const episodesGrid = document.querySelector('.episodes-grid');
        if (!episodesGrid) return;
        
        // En un entorno real, esto sería una llamada a la API o al RSS
        // Para este ejemplo, usaremos datos estáticos basados en el RSS analizado
        const episodes = [
            {
                title: "Episodio 6: Enseñar",
                date: "23 Abril 2025",
                duration: "6:27",
                description: "Esta semana hablo de algo que descubrí sin buscarlo, pero que terminó dándole un nuevo sentido a mi trabajo: enseñar. Más allá de tickets, redes y servidores, descubrí lo gratificante que es compartir lo que sé.",
                image: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_episode/43193199/43193199-1745337437474-109f7aae326cc.jpg",
                link: "episodio.html?id=6"
            },
            {
                title: "Episodio 5: Despedidas",
                date: "22 Abril 2025",
                duration: "3:15",
                description: "Las despedidas nunca son fáciles, y algunas tardan en irse del todo. En este episodio, comparto uno de los momentos más significativos de mi vida: la mudanza de Ecatepec a Guadalajara.",
                image: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_episode/43193199/43193199-1741306568129-cfc9486bd1124.jpg",
                link: "episodio.html?id=5"
            },
            {
                title: "Episodio 2: Silencio",
                date: "22 Abril 2025",
                duration: "3:15",
                description: "En este episodio de Voces del Alma, exploramos el silencio como lenguaje. A través del poema Silencio, hablo de cómo lo no dicho construye raíces en nuestra vida.",
                image: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_episode/43193199/43193199-1741306568129-cfc9486bd1124.jpg",
                link: "episodio.html?id=2"
            }
        ];
        
        // Crear tarjetas de episodios
        episodes.forEach(episode => {
            const episodeCard = createEpisodeCard(episode);
            episodesGrid.appendChild(episodeCard);
        });
    } catch (error) {
        console.error('Error al cargar los episodios:', error);
    }
}

// Función para crear una tarjeta de episodio
function createEpisodeCard(episode) {
    const card = document.createElement('div');
    card.className = 'episode-card fade-in';
    
    card.innerHTML = `
        <img src="${episode.image}" alt="${episode.title}" class="episode-image">
        <div class="episode-content">
            <h3 class="episode-title">${episode.title}</h3>
            <div class="episode-meta">
                <span class="episode-date">${episode.date}</span>
                <span class="episode-duration">${episode.duration}</span>
            </div>
            <p class="episode-description">${episode.description}</p>
            <a href="${episode.link}" class="btn primary-btn">Escuchar</a>
        </div>
    `;
    
    return card;
}

// Configurar el toggle del tema oscuro
function setupDarkModeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Verificar si hay una preferencia guardada
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Aplicar el tema inicial
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    // Manejar el cambio de tema
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('darkMode', 'true');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('darkMode', 'false');
        }
    });
}

// Configurar el menú móvil
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav ul');
    
    mobileMenuToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
        
        if (nav.classList.contains('show')) {
            nav.style.display = 'flex';
            nav.style.flexDirection = 'column';
            nav.style.position = 'absolute';
            nav.style.top = '100%';
            nav.style.left = '0';
            nav.style.width = '100%';
            nav.style.backgroundColor = document.body.classList.contains('dark-mode') ? '#333' : 'var(--color-beige-claro)';
            nav.style.padding = '1rem';
            nav.style.boxShadow = '0 5px 10px var(--color-sombra)';
        } else {
            nav.style.display = '';
        }
    });
    
    // Cerrar el menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove('show');
                nav.style.display = '';
            }
        });
    });
    
    // Cerrar el menú al redimensionar la ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.classList.remove('show');
            nav.style.display = '';
        }
    });
}

// Configurar el reproductor de audio
function setupAudioPlayer() {
    // Esta función se expandirá cuando implementemos la página de episodio individual
    const playerBar = document.querySelector('.player-bar');
    const playPauseBtn = document.querySelector('.play-pause');
    
    // Ejemplo de funcionalidad básica
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', function() {
            const icon = playPauseBtn.querySelector('i');
            
            if (icon.classList.contains('fa-play')) {
                icon.classList.remove('fa-play');
                icon.classList.add('fa-pause');
                // Aquí iría la lógica para reproducir el audio
            } else {
                icon.classList.remove('fa-pause');
                icon.classList.add('fa-play');
                // Aquí iría la lógica para pausar el audio
            }
        });
    }
}

// Función para mostrar el reproductor persistente
function showPlayer(episodeTitle, audioSrc) {
    const playerBar = document.querySelector('.player-bar');
    const playerTitle = document.querySelector('.player-title');
    
    playerTitle.textContent = episodeTitle;
    playerBar.classList.remove('hidden');
    
    // Aquí se configuraría el audio source
    // const audio = new Audio(audioSrc);
    // audio.play();
}

// Función para actualizar la barra de progreso
function updateProgress(audio) {
    const progress = document.querySelector('.progress');
    const currentTime = document.querySelector('.current-time');
    const duration = document.querySelector('.duration');
    
    audio.addEventListener('timeupdate', function() {
        const percent = (audio.currentTime / audio.duration) * 100;
        progress.style.width = percent + '%';
        
        // Formatear tiempo
        currentTime.textContent = formatTime(audio.currentTime);
        duration.textContent = formatTime(audio.duration);
    });
}

// Función para formatear el tiempo en minutos:segundos
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Animaciones al hacer scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // Si el elemento está en el viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});
