# Proyecto de Sugerencias de Videos

---

## Descripción

Este proyecto consiste en una página web que sugiere videos categorizados en tres secciones: **Música**, **Películas**, y **Series**. Los videos son cargados dinámicamente a través del uso del **Patrón Módulo** implementado mediante una **IIFE (Immediately Invoked Function Expression)**, con clases para gestionar los videos de manera eficiente y reutilizable. Además, el proyecto utiliza **Bootstrap 4.5.2** para el diseño y estilo de la página, junto con **JavaScript** para la manipulación dinámica de los elementos del DOM y las URL de los videos.

---

## Características

1. **Categorías de videos**:
    - Música
    - Películas
    - Series

2. **Tecnologías utilizadas**:
    - HTML5, CSS3, JavaScript (ES6+)
    - Bootstrap 4.5.2 para la interfaz gráfica.
    - Patrón Módulo para organizar el código JavaScript.
    - Clases en JavaScript (uso de herencia y encapsulamiento mediante closures).

3. **Funcionalidades clave**:
    - Carga dinámica de videos en iframe mediante JavaScript.
    - Posibilidad de modificar el inicio de un video desde un tiempo específico.
    - Diseño responsivo y estilizado con Bootstrap.
    - Manejo de videos utilizando clases y métodos para modularidad y reusabilidad.

---

## Estructura del Proyecto

/assets /css - style.css (Archivo de estilos personalizado) /img - 107735.png (Imagen del logo de videos) /js - script.js (Código JavaScript principal) index.html (Archivo HTML principal)

yaml
Copiar código

---

## Instalación

1. **Clonar el repositorio**:
git clone https://github.com/usuario/repo-sugerencias-videos.git


2. **Abrir el archivo `index.html`** en cualquier navegador.

---

## Funcionamiento

El funcionamiento de la página se basa en la estructura de clases y módulos para cargar y manipular los videos de manera eficiente:

### Patrón Módulo con IIFE:
El **VideoModule** encapsula las funciones para gestionar los videos utilizando una IIFE. Esto permite controlar el acceso a los métodos internos y mantener el código organizado.

```javascript
const VideoModule = (function () {
 const insertVideo = function (url, id) {
     const iframe = document.getElementById(id);
     if (iframe) {
         iframe.setAttribute("src", url);
     }
 };

 return {
     loadVideo: function (url, id) {
         insertVideo(url, id);
     }
 };
})();
Clases en JavaScript:
El proyecto utiliza una clase principal Multimedia y una clase hija Reproductor, que permite la carga y control de los videos. La URL de los videos está protegida mediante un closure.

javascript
Copiar código
class Multimedia {
    constructor(url) {
        let _url = url;
        this.getUrl = function() {
            return _url;
        };
    }

    setInicio() {
        return 'Este método es para realizar un cambio en la URL del video';
    }
}

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
Instanciación:
Cada categoría de video se representa como una instancia de la clase Reproductor, y se invoca el método playMultimedia para cargar el video correspondiente.

javascript
Copiar código
const musica = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY", "musica");
const pelicula = new Reproductor("https://www.youtube.com/embed/2GfZl4kuVNI", "peliculas");
const serie = new Reproductor("https://www.youtube.com/embed/tgbNymZ7vqY", "series");

musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();
Personalización de Video
Cambiar el inicio del video:
El método setInicio(tiempo) permite modificar el tiempo de inicio de un video. Por ejemplo, el siguiente código configura que el video de música comience en el segundo 30:

javascript
Copiar código
musica.setInicio(30);
Estilo y Diseño
La página cuenta con un diseño responsivo utilizando Bootstrap 4.5.2. Esto asegura que se vea correctamente en dispositivos de cualquier tamaño. Los elementos clave como el encabezado, botones de colapso, y los iframes están correctamente alineados y estilizados.

Atributos visuales:
Tipografía: Se utiliza la fuente Noto Sans JP para una apariencia limpia y moderna.
Botones: Se utilizan los componentes Accordion y Card de Bootstrap para la navegación entre categorías.
Imágenes y gráficos: Se incluye una imagen central representativa de los videos.
Créditos
Este proyecto fue desarrollado por [Boris Guiñez] como parte de un desafío de desarrollo web. Si tienes algún comentario o pregunta, no dudes en contactarme.

Licencia
Este proyecto está bajo la licencia MIT.


**[Boris Guiñez]** con tu nombre o cualquier información de contacto que desees agregar.
