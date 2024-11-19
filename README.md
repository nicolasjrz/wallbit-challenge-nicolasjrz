[![Wallbit](./assets/logo.jpg)](https://wallbit.io/)

# Wallbit Junior Frontend Challenge

Solución del desafío de Wallbit Junior Frontend Challenge, en la cual se crea un carrito de compras. A continuación, se detallan las características implementadas y los pasos para correr el proyecto.

## Instalación

1. Clona el repositorio:

    ````
    git clone https://github.com/nicolasjrz/wallbit-challenge-nicolasjrz.git
    ````

2. Ingresa a la carpeta del proyecto
    ````
    cd wallbit-challenge-nicolasjrz
    ````

3. Instala las dependencias
    ````
    npm install
    ````

3. Ejecutar el proyecto
    ````
    npm run dev
    ````
    
## Lenguajes utilziados

**Nextjs** - **Zustand** - **Tailwindcss** - **TypeScript** 



## Características del Sistema de Carrito de Compras

- **Agregar productos al carrito**: Permite a los usuarios ingresar el ID de un producto y la cantidad deseada para añadirlo al carrito de manera rápida y sencilla.

- **Visualización de productos en el carrito**: Se presenta una tabla con los productos añadidos al carrito, incluyendo:
  - Nombre del producto
  - Precio
  - Imagen
  - Cantidad

- **Listado de productos**: Los usuarios pueden ver los productos disponibles con su información y añadirlos al carrito directamente desde esta vista.

- **Persistencia del carrito**: El contenido del carrito se mantiene incluso después de recargar la página, garantizando que no se pierdan los productos agregados.

- **Eliminación de productos**: Se ha agregado un botón para eliminar productos de la lista del carrito de forma rápida y sencilla.

- **Cantidad total de productos**: Se muestra la cantidad total de productos añadidos al carrito, lo que ayuda a los usuarios a tener un resumen rápido.

- **Costo total del carrito**: Calcula y muestra el costo total de todos los productos en el carrito, permitiendo a los usuarios conocer el total de su compra.

- **Fecha de creación del carrito**: Se guarda la fecha en la que se agregó el primer producto al carrito. Esta fecha persiste y se reinicia si el carrito es vaciado.

- **Ruleta**: Una ruleta interactiva en la que los usuarios pueden ganar un cupón de descuento para utilizar en la tienda.

- **Gestión de notificaciones**: Al recibir una notificación, se muestra un mensaje en forma de *toast* utilizando ShadCN, proporcionando información instantánea al usuario.


## Demo


