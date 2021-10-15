
# Proyecto final - React Games

Este proyecto a sido creado con create-react-app [https://create-react-app.dev/docs/getting-started/]

## Descripción 

Sitio que permite visualizar listas de videojuegos de distintas plataformas y mas importantes del ultimo tiempo, permitiendo marcara aquellos juegos de interes como favoritos, los cuales pueden se almacenan para su visualizaci'on en el apartado correspondiente.

Este sitio contiene tres rutas principales:

- >Top : Lista de videojuegos mas vistos del mes
- >Platforms : Lista de videojuegos seleccionables por plataforma
- >Favorites : Lista de videojuegos marcados como favoritos

Para la obtencion de los datos, se utiliza la siguiente API [https://api.rawg.io/api], para revisar la documentacion adjunto la url correspondiente [https://rawg.io/apidocs]

Es posible visualizar el detalle adicional de un videojuego, presionando el boton de "View More", lo que desencadena una solicitud a la API de __rawg.io__, y redirigiendo a la ruta correspondiente del detalle, donde se encontrara informacion e imagenes adicionales.

Dentro del apartado de videojuegos favoritos, es posible modificar el estilo visual de la lista de juegos favoritos, de forma inicial se muestran como una "Card" para cada uno de ellos, si se presiona el boton de cambio de estilo, automaticamente se modificara la interfaz cambiando el orden de los elementos.

Adicional a esto, existe un formulario que permite "enviar" un recordatorio al correo indicado y en la fecha seleccionada la lista de los videojuegos marcados como favoritos. El proceso de enviar no se encuentra realizado, pues no forma parte de la evaluacion, actualmente se muestra por consola los datos del formulario ingresados.

-----------------------------

# Patrones utilizados

###  Patrones de arquitectura

Para el manejo del estado de la aplicaci'on se utiliz'o **Redux** y el patr'on **Flux** para facilitar la gestion del estado separandolo completamente de los componentes, donde los datos son manejados mediante acciones que desencadecan la actualizacion de la vista.

Para la estructura de archivos dentro del proyecto se ha implementado Clean Architecture, separando por carpetas y contexto los archivos.

- Actions : 
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

Se utilizaron diversos patrones que permiten controlar el renderizado y el manejo de propiedades entre componentes. Entre ellos se implemento el patron **Stateless y Statefull components**. Aquellos **Statefull components** manejan y controlan datos y **Stateless components** solo presentan los datos.

Ademas de **conditional rendering** para renderizar ciertos componentes a partir de una condicion, cambiando la informacion entregada a la interfaz del usuario u ocultando aquellos componentes.

**Controlled componentes** que renderizan los elementos del formulario y los controla manteniendo los datos del formulario en el state

**High Order Components**, funciones puras y de alto nivel que reciben una funcion/componente de entrada y de salida entrega una funcion/componente nueva. En este caso se implement'o Error Boundary, para controlar los errores producidos en runtime dentro del arbol de componentes, registrando el error y mostrando una interfaz de error personalizada. 

-----------------------------
# Adicionales

Para el desarrollo de este sitio, se implementaron diversos hooks que permiten manejar ciertas funcionalidades y caracteristicas de manera funcional.

- >useModal : Permite desplegar un modal manejando un React Portal, renderizando un child en un nodo fuera del DOM del componente padre 
- >useLocalStorage: Permite utilizar el localStorage del navegador para almacenar informacion y consultarla
- >useHover: Detecta cuando se posiciona el mouse sobre un elemento, entregando la referencia, usando el hook useRef y un booleano.
- >useApiCall - useApiCallExtensible: Hooks personalizados para realizar peticiones a la API 
- >useGetPlatforms : Hook personalizado para solicitar una lista de plataformas a la API y almacenarlas utilizando el hook useLocalStorage, con el objetivo de realizar esta solicitud una sola vez o mientras exista este dato en el local storage

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
