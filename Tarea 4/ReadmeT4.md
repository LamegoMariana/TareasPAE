# Tarea 4

### Descripción
Esta tarea consiste en una aplicación web para listar noticias de un 3rd party, para esto se usa el [News API](https://newsapi.org/).

Se puede usar el API_KEY que se incluye en el archivo **.env** o se puede sustituir por el propio.

El endpoint raíz muestra el título de la aplicación y un buscador en el que se insta a ingresar una palabra clave. 
Al hacer clic en el botón de _Buscar_ se desplegarán las noticias (imagen, título, descripción y enlace para ver la noticia en una nueva pestaña)
que se encontraron mediante el News API relacionadas con la o las palabras ingresadas.
También se incluye un botón para regresar a la pantalla del buscador.

### Dependencias de terceros
Las dependencias que se usan en esta tarea son:
* axios
* dotenv
* express
* express-handlebars
* handlebars
* nodemon

### Comandos

Antes de desplegar la aplicación en el puerto 3000, hay que correr los siguientes comandos:
```
npm install node
npm install nodemon
```
Así se podrán usar los comandos para los scripts que aseguran el funcionamiento de la app:
```
npm start
npm run dev
npm run styles
```
