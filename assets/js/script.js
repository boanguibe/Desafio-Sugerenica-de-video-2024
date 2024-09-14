const VideoModule = (function () {
    // 1. Implementar el Patrón Módulo mediante IIFE,
    
    // Función privada para insertar video
    const insertVideo = function (url, id) {
        const iframe = document.getElementById(id);
        if (iframe) {
            iframe.setAttribute("src", url);
        }
    };

    // Función pública para hacer el llamado a la función privada
    return {
        loadVideo: function (url, id) {
            insertVideo(url, id);
        }
    };
})();

//2. Establecer una clase padre denominada Multimedia para:
class Multimedia {
    constructor(url) {
        // Closure para proteger el atributo url
        let _url = url; // El atributo url está protegido y no es accesible directamente

        // Método público para obtener la URL, pero no acceder directamente al atributo
        this.getUrl = function() {
            return _url;
        };
    }

    // Método para setInicio que devuelve el mensaje requerido
    setInicio() {
        return 'Este método es para realizar un cambio en la URL del video';
    }
}

//3. Crear una clase “Reproductor”, siendo hija de la clase padre Multimedia para:
 class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }
    playMultimedia() {
        VideoModule.loadVideo(this.getUrl(), this._id);
    }

    setInicio(tiempo) {
        const nuevaUrl = `${this.getUrl()}?start=${tiempo}`;
        VideoModule.loadVideo(nuevaUrl, this._id);
    }
}

// 4. Instanciar
const musica = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY", "musica");
const pelicula = new Reproductor("https://www.youtube.com/embed/2GfZl4kuVNI", "peliculas");
const serie = new Reproductor("https://www.youtube.com/embed/tgbNymZ7vqY", "series");

// 5. Invocar al método “playMultimedia”
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

// 6. Utiliza el método “setInicio” Modificar el inicio de un video
musica.setInicio(30); // El video de música empezará en el segundo 30