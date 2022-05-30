# Angular ingeniería inversa

## Contenidos 
1. [Introducción](#intro)
  1.1. [Link web](#link-web)
2. [Requisitos](#requisitos)
3. [Usuario de prueba](#user-prueba)
4. [Descripción del trabajo realizado](#descripcion)
  4.1. [Aplicación base](#base)
  4.2. [Creando la aplicación a partir de la base](#creando)
  
### 1. Introducción <a name="intro"/>
Se trata de utilizar una aplicación base para crear una aplicación que gestione la plantilla de jugadores de un equipo deportivo.

### 1.1 Link web <a name="link-web"/>
https://juancad.github.io/angular_inginversa/

## 2. Requisitos<a name="requisitos"/>
Para poder ejecutar el proyecto será necesario:
- Tener instalado [Node.js](https://nodejs.org/es/download/).
- Para este proyecto se ha utilizado el IDE Visual Studio.
- Tener instalado npm, mediante el comando: `npm install -g @angular/cli`.
- Importar el proyecto e instalar las dependencias del fichero package.json mediante el comando `npm install`.
- Ejecutar el comando `ng serve` y abrir la dirección `http://localhost:4200/` en un navegador.

## 3. Credenciales<a name="user-prueba"/>
Para probar la aplicación se puede iniciar sesión con las siguientes credenciales:

Correo: admin@gmail.com

Contraseña: admindaw2

## 4. Descripción del trabajo realizado<a name="descripcion"/>

### 4.1 Aplicación base <a name="base"/>
En el servicio AuthService se encuentra el método login, que recibe un email y contraseña. El método verifica que el email y contraseña sean correctos. Desde este método se puede ver que el usuario registrado para poder utilizar la aplicación es admin@gmail.com y la contraseña admindaw2.

Las rutas de la aplicación son las siguientes:
- Al entrar en la aplicación redirecciona a login, que abre LoginComponent.
- 'forgot-password' abre ForgotPasswordComponent.
- 'admin' abre el módulo admin, que contiene las siguientes rutas:
    - 'home' que abre HomeComponent.
    - 'about' que abre AboutComponent.
    - 'services' que abre ServicesComponent.
    - 'contact' que abre ConctactComponent.

Las componentes de admin están formadas por (cards)[https://getbootstrap.com/docs/4.0/components/card/] de Boostrap, con un título, contenido y enlace.

### 4.2 Creando la aplicación a partir de la base <a name="creando"/>
La aplicación para gestionar la plantilla de jugadores de un equipo tendrá los enlaces: Inicio, Plantilla, Añadir jugador y Cerrar sesión, por lo que se modificará el componente header para añadir dichos enlaces. Se han generado las componentes Plantilla y Addjugador dentro del módulo admin, y se han elimnado las que no se van a utilziar.

Se ha creado el modelo *Jugador*, con los atributos que tendrá cada jugador (nombre, apellidos, posición e imagen). Se ha creado también el servicio *PlantillaService*, con la plantilla de jugadores y los métodos para añadir, eliminar, modificar y obtener un jugador.

En el componente de *PlantillaComponent* se obtienen los jugadores del servicio y se muestran. Se muestra un botón eliminar, que elimina de la plantilla el jugador seleccionado haciendo uso del método *delete(numero: number)* del servicio.

Se ha creado el componente *EditarComponent*, que permite modificar un jugador. Contiene el formulario para modificar el jugador de la plantilla. Esta componente se ha añadido al enrutamiento, y recibe por parámetro el número del jugador a modificar.

En el home se ha publicado información sobre el club.

Toda la información ha sido sacada de la página oficial del club: [UD Las Palmas](https://www.udlaspalmas.es/).
