# NodoDiplo-M3-S3-P3

# SPRINT 3 - PRACTICO 3

Bienvenidos al Sprint 3 del Modulo 3 Node JS
En este Sprint vamos a seguir puliendo nuestro servidor para llevarlo a un nivel mas profesional.
La documentacion para todo el Sprint se encuentra en el siguiente link:

[**Sprint 3 Documentacion V1.0.1.pdf**](./Sprint%203%20Documentacion%20V1.0.1.pdf)

Este practico se enfoca en desarrollar un dashboard dinámico para gestionar una lista de superhéroes, permitiendo agregar, editar y eliminar superhéroes. El trabajo se dividirá en etapas para facilitar su implementación y aprendizaje.
Para desarrollar el practico 3 deben completar la lista de tareas.

## Etapa 1: Configuración y Revisión de la Estructura Inicial del Proyecto

1. Revisión de la estructura del proyecto: Asegurarse de que comprendan el esquema de MVC, el archivo de configuración de base de datos (dbConfig.mjs) y cómo se organiza la capa de repositorio y servicios.

2. Configuración de la base de datos: Configurar una base de datos MongoDB y asegurarse de que el archivo dbConfig.mjs esté correctamente configurado.

3. Ejecutar el servidor: Verificar la conexión a la base de datos y probar los endpoints de superhéroes existentes para asegurarse de que el proyecto base funcione sin problemas.

## Etapa 2: Crear Plantillas Básicas en EJS

1. Configurar EJS: Modificar el archivo de configuración (app.mjs) para asegurarse de que EJS está configurado como el motor de vistas.

2. Crear la vista principal del dashboard (views/dashboard.ejs): Mostrar la lista de superhéroes utilizando el endpoint /heroes.

3. Integrar con el controlador: Modificar el superheroesController.mjs para renderizar dashboard.ejs al llamar a obtenerTodosLosSuperheroesController.

## Etapa 3: Implementar Función de Agregar Superhéroes

1. Crear formulario de agregar superhéroe (views/addSuperhero.ejs): Implementar un formulario con campos necesarios (nombreSuperheroe, nombreReal, edad, planetaOrigen, debilidad, etc.).

2. Crear endpoint para el formulario:

3. Definir una ruta POST /heroes/agregar en superheroesRoutes.mjs.

4. Implementar en el controlador (superheroesController.mjs) un método agregarSuperheroeController, que llame al servicio para agregar un nuevo superhéroe.

5. Agregar validación de datos: Validar los datos en el frontend y backend para asegurar que cumplen con el esquema y requerimientos.

## Etapa 4: Implementar Función de Editar Superhéroes

1. Crear la vista de edición (views/editSuperhero.ejs): Implementar un formulario similar al de agregar superhéroe, pero precargar los datos actuales del superhéroe.

2. Crear endpoint para editar:

3. Agregar una ruta PUT /heroes/:id/editar en superheroesRoutes.mjs.

4. Implementar en superheroesController.mjs un método editarSuperheroeController que permita actualizar los datos del superhéroe llamando al método de edición en el servicio.

5. Mostrar opción de editar: En la vista del dashboard, añadir un botón de edición para cada superhéroe que redirija a editSuperhero.ejs con los datos del superhéroe a modificar.

## Etapa 5: Implementar Función de Eliminar Superhéroes

1. Añadir botón de eliminar en el dashboard: Incluir en dashboard.ejs un botón de eliminar para cada superhéroe.

2. Crear endpoint para eliminar:

3. Agregar una ruta DELETE /heroes/:id en superheroesRoutes.mjs.

4. Crear eliminarSuperheroeController en superheroesController.mjs para que llame al servicio y elimine el superhéroe seleccionado.

5. Confirmación de eliminación: Agregar una alerta de confirmación antes de eliminar el superhéroe para evitar eliminaciones accidentales.

## Etapa 6: Integración de Vistas con Funcionalidades del Backend

1. Listar Superhéroes en el Dashboard. En el controlador (superheroesController.mjs), asegúrate de que obtenerTodosLosSuperheroesController renderiza dashboard.ejs y pasa la lista de superhéroes obtenida desde el servicio al archivo EJS. En dashboard.ejs, utiliza una estructura de bucle para mostrar cada superhéroe en una tabla o tarjeta. Incluye botones para editar y eliminar junto a cada superhéroe.

2. Integración del Formulario de Agregar Superhéroe: Configura un formulario en addSuperhero.ejs que envíe los datos al endpoint /heroes/agregar utilizando un método POST.  En el backend, verifica que agregarSuperheroeController recibe los datos y crea el nuevo superhéroe. Tras agregarlo, redirige de vuelta al dashboard para ver la lista actualizada.

3. Integración del Formulario de Editar Superhéroe:  Configura editSuperhero.ejs para cargar los datos actuales del superhéroe que se va a editar. Esto se hace al enviar una solicitud al backend para obtener el superhéroe por ID y precargar la información en el formulario.  Asegúrate de que el formulario envíe los datos al endpoint PUT /heroes/:id/editar con un método POST o PUT.  En el backend, el controlador editarSuperheroeController debe actualizar los datos del superhéroe en la base de datos. Tras editarlo, redirige al dashboard para ver los cambios reflejados.

4. Integración de la Función de Eliminar Superhéroe: Configura el botón de eliminar en dashboard.ejs para que realice una solicitud DELETE al endpoint correspondiente (/heroes/:id). En el backend, verifica que eliminarSuperheroeController reciba la solicitud y elimine el superhéroe de la base de datos. Tras eliminarlo, recarga la lista en el dashboard.

5. Refrescar el Dashboard Después de Cada Acción: Asegúrate de que, después de agregar, editar o eliminar un superhéroe, se redirija al usuario de nuevo al dashboard para ver los cambios.

6. Diseño de interfaz: Personalizar dashboard.ejs, addSuperhero.ejs, y editSuperhero.ejs para mejorar la experiencia de usuario.