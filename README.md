# Proyecto final - React Games

Este proyecto a sido creado con create-react-app [https://create-react-app.dev/docs/getting-started/]

## Descripción 

Sitio que permite visualizar listas de videojuegos de distintas plataformas y más importantes del último tiempo, permitiendo marcar aquellos juegos de interés como favoritos, los cuales se almacenan para su visualización en el apartado correspondiente.

Este sitio contiene tres rutas principales:

- >Top : Lista de videojuegos mas vistos del mes
- >Platforms : Lista de videojuegos seleccionables por plataforma
- >Favorites : Lista de videojuegos marcados como favoritos

Para la obtención de los datos, se utiliza la siguiente API [https://api.rawg.io/api], para revisar la documentacion adjunto la url correspondiente [https://rawg.io/apidocs]

Es posible visualizar el detalle adicional de un videojuego, presionando el botón de "View More", lo que desencadena una solicitud a la API de __rawg.io__, y redirigiendo a la ruta correspondiente del detalle, donde se encontrará información e imagenes adicionales.

Dentro del apartado de videojuegos favoritos, es posible modificar el estilo visual de la lista de juegos favoritos, de forma inicial se muestran como una "Card" para cada uno de ellos, si se presiona el botón de cambio de estilo, automáticamente se modificará la interfaz cambiando el orden de los elementos.

Adicional a esto, existe un formulario que permite "enviar" un recordatorio al correo indicado y en la fecha seleccionada la lista de los videojuegos marcados como favoritos. El proceso de enviar no se encuentra realizado, pues no forma parte de la evaluación, actualmente se muestra por consola los datos del formulario ingresados.


-----------------------------

# Patrones utilizados

###  Patrones de arquitectura

Para el manejo del estado de la aplicación se utilizó **Redux** y el patrón **Flux** para facilitar la gestión del estado separándose completamente de los componentes, donde los datos son manejados mediante acciones que desencadenan la actualización de la vista.

Para la estructura de archivos dentro del proyecto se ha implementado Clean Architecture, separando por carpetas y contexto los archivos.

- Actions
- Assets
    -  Static
    -  Styles
- Components
- Constants
- Containers
- CustomHooks
- HOC
- Reducers
- Routes

###  Patrones de diseño

Se utilizaron diversos patrones que permiten controlar el renderizado y el manejo de propiedades entre componentes. Entre ellos se implementó el patrón **Stateless y Statefull components**. Aquellos **Statefull components** manejan y controlan datos y **Stateless components** solo presentan los datos.

Además de **conditional rendering** para renderizar ciertos componentes a partir de una condición, cambiando la información entregada a la interfaz del usuario u ocultando aquellos componentes.

**Controlled componentes** que renderizan los elementos del formulario y los controla manteniendo los datos del formulario en el state

**High Order Components**, funciones puras y de alto nivel que reciben una función/componente de entrada y de salida entrega una función/componente nueva. En este caso se implementó Error Boundary, para controlar los errores producidos en runtime dentro del árbol de componentes, registrando el error y mostrando una interfaz de error personalizada. 

**Code Splitting and Lazy Loading** separación del código en pequeños paquetes al realizar la compilación del proyecto y la carga lazy de componentes de acuerdo a caso de uso.


-----------------------------
# Adicionales

Para el desarrollo de este sitio, se implementaron diversos hooks que permiten manejar ciertas funcionalidades y características de manera funcional.

- >useModal : Permite desplegar un modal manejando un React Portal, renderizando un child en un nodo fuera del DOM del componente padre 
- >useLocalStorage: Permite utilizar el localStorage del navegador para almacenar informacion y consultarla
- >useHover: Detecta cuando se posiciona el mouse sobre un elemento, entregando la referencia, usando el hook useRef y un booleano.
- >useApiCall - useApiCallExtensible: Hooks personalizados para realizar peticiones a la API 
- >useGetPlatforms : Hook personalizado para solicitar una lista de plataformas a la API y almacenarlas utilizando el hook useLocalStorage, con el objetivo de realizar esta solicitud una sola vez o mientras exista este dato en el local storage

### Manejo de rutas

El manejo de las rutas dentro de la aplicación, fue realizado implementando **react-router-dom** y **Lazy loading**, permitiendo cargar de forma dinámica las rutas y componentes a medida que se van requiriendo, reduciendo el peso inicial al cargar la página web.


----------------------------

# Deploy

Este proyecto se encuentra configurado y deployado en Vercel [https://vercel.com/], configurado de forma automatica cuando se realiza un push a Main se realiza el deploy con los nuevos cambios

### Scripts disponibles

 - > npm run start : Compila la aplicación en modo desarrollo
 - > npm run build : Compila la aplicación en modo producción
 - > npm run dev-server: Ejecuta la aplicación en modo desarrollo en [http://localhost:8080](http://localhost:8080) 

