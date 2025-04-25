// Configuración para la página de episodios
document.addEventListener('DOMContentLoaded', function() {
    // Cargar todos los episodios
    loadAllEpisodes();
    
    // Configurar búsqueda de episodios
    setupEpisodeSearch();
});

// Función para cargar todos los episodios
async function loadAllEpisodes() {
    try {
        const episodesGrid = document.getElementById('all-episodes');
        if (!episodesGrid) return;
        
        // En un entorno real, esto sería una llamada a la API o al RSS
        // Para este ejemplo, usaremos datos estáticos basados en el RSS y los PDFs analizados
        const episodes = [
            {
                id: 7,
                title: "Episodio 7: Impostor",
                date: "24 Abril 2025",
                duration: "6:45",
                description: "En este episodio, hablo sobre el síndrome del impostor. Esa sensación de estar ocupando un lugar que no nos corresponde, de haber engañado a todos, incluso a nosotros mismos. Comparto mi experiencia durante una auditoría ISO en la empresa y cómo, a pesar del éxito, seguía esperando que alguien señalara que no era suficiente.",
                image: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_episode/43193199/43193199-1745337437474-109f7aae326cc.jpg",
                link: "episodio.html?id=7",
                audio: "https://anchor.fm/s/1020c2ddc/podcast/play/101626010/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2025-3-22%2F398824291-44100-2-13c6f7a499d01.m4a"
            },
            {
                id: 6,
                title: "Episodio 6: Enseñar",
                date: "23 Abril 2025",
                duration: "6:27",
                description: "Esta semana hablo de algo que descubrí sin buscarlo, pero que terminó dándole un nuevo sentido a mi trabajo: enseñar. Más allá de tickets, redes y servidores, descubrí lo gratificante que es compartir lo que sé, ver cómo alguien entiende algo por primera vez y cómo esa chispa cambia su rumbo.",
                image: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_episode/43193199/43193199-1745337437474-109f7aae326cc.jpg",
                link: "episodio.html?id=6",
                audio: "https://anchor.fm/s/1020c2ddc/podcast/play/101626010/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2025-3-22%2F398824291-44100-2-13c6f7a499d01.m4a"
            },
            {
                id: 5,
                title: "Episodio 5: Despedidas",
                date: "22 Abril 2025",
                duration: "3:15",
                description: "Las despedidas nunca son fáciles, y algunas tardan en irse del todo. En este episodio, comparto uno de los momentos más significativos de mi vida: la mudanza de Ecatepec a Guadalajara. Un viaje lleno de emociones, nostalgia y el vértigo de lo desconocido.",
                image: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_episode/43193199/43193199-1741306568129-cfc9486bd1124.jpg",
                link: "episodio.html?id=5",
                audio: "https://anchor.fm/s/1020c2ddc/podcast/play/99486571/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2025-3-22%2F398829252-44100-2-fc88f640add4e.m4a"
            },
            {
                id: 4,
                title: "Episodio 4: Recuerdos",
                date: "21 Abril 2025",
                duration: "4:30",
                description: "En este episodio reflexiono sobre los recuerdos y cómo nos definen. Comparto mi experiencia al usar Google Maps para ver mi antigua casa y cómo esas imágenes guardaban momentos especiales. Los recuerdos son fragmentos que nos cortan las manos al intentar sostenerlos, pero que valen la pena recoger.",
                image: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_episode/43193199/43193199-1741306568129-cfc9486bd1124.jpg",
                link: "episodio.html?id=4",
                audio: "https://anchor.fm/s/1020c2ddc/podcast/play/99486571/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2025-3-22%2F398829252-44100-2-fc88f640add4e.m4a"
            },
            {
                id: 3,
                title: "Episodio 3: Como tulipanes",
                date: "20 Abril 2025",
                duration: "3:45",
                description: "En este episodio hablo sobre cómo dejamos de cuidarnos y, con ello, dejamos de cuidar el amor. El amor no es solo una promesa; es un cuidado constante. No se apaga de golpe, sino que se marchita poco a poco, como un tulipán olvidado en el rincón de una casa.",
                image: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_episode/43193199/43193199-1741306568129-cfc9486bd1124.jpg",
                link: "episodio.html?id=3",
                audio: "https://anchor.fm/s/1020c2ddc/podcast/play/99486571/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2025-3-22%2F398829252-44100-2-fc88f640add4e.m4a"
            },
            {
                id: 2,
                title: "Episodio 2: Silencio",
                date: "19 Abril 2025",
                duration: "3:15",
                description: "En este episodio de Voces del Alma, exploramos el silencio como lenguaje. A través del poema Silencio, hablo de cómo lo no dicho construye raíces en nuestra vida. Como introvertido, entiendo ese 'árbol de gestos' que crece donde las palabras faltan.",
                image: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_episode/43193199/43193199-1741306568129-cfc9486bd1124.jpg",
                link: "episodio.html?id=2",
                audio: "https://anchor.fm/s/1020c2ddc/podcast/play/99486586/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2025-3-22%2F398829252-44100-2-fc88f640add4e.m4a"
            },
            {
                id: 1,
                title: "Episodio 1: El idioma de sus ojos",
                date: "18 Abril 2025",
                duration: "3:00",
                description: "Bienvenidos a Voces del Alma. Un espacio donde las palabras se transforman en emociones, y donde la poesía no solo se lee, sino que se siente. En este primer episodio, exploro cómo a veces, la mirada dice más que cualquier palabra.",
                image: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/43193199/43193199-1741220376205-32587b8700e42.jpg",
                link: "episodio.html?id=1",
                audio: "https://anchor.fm/s/1020c2ddc/podcast/play/99486586/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2025-3-22%2F398829252-44100-2-fc88f640add4e.m4a"
            }
        ];
        
        // Crear tarjetas de episodios
        episodes.forEach(episode => {
            const episodeCard = createEpisodeCard(episode);
            episodesGrid.appendChild(episodeCard);
        });
        
        // Guardar los episodios en localStorage para usarlos en la página de episodio individual
        localStorage.setItem('allEpisodes', JSON.stringify(episodes));
    } catch (error) {
        console.error('Error al cargar los episodios:', error);
    }
}

// Función para crear una tarjeta de episodio (igual que en main.js pero con más detalles)
function createEpisodeCard(episode) {
    const card = document.createElement('div');
    card.className = 'episode-card fade-in';
    card.dataset.id = episode.id;
    card.dataset.title = episode.title;
    card.dataset.date = episode.date;
    card.dataset.duration = episode.duration;
    
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

// Configurar búsqueda de episodios
function setupEpisodeSearch() {
    const searchInput = document.getElementById('search-episodes');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const episodeCards = document.querySelectorAll('.episode-card');
        
        episodeCards.forEach(card => {
            const title = card.dataset.title.toLowerCase();
            const description = card.querySelector('.episode-description').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
}
