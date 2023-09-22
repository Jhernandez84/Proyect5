# Proyecto E-Commerce con React y Context API en Node y Expres

# Presentación del proyecto

Este proyecto de E-Commerce utiliza **ReactJS** y **Context API**, es complemtamente funcional y permite agregar y eliminar productos, además de agregarlos al carrito para simular un flujo de compra de un cliente visitando nuestra página. Permite acceder a la cuenta del usuario y acceder al menú de mantención de productos, para agregar, eliminar o actualizar la cantidad disponible o stock de un ítem.

También se agregó una página de contacto, la cuál carga un formulario para más información en caso de ser necesario.

## Inicio de Sesión. LogIn o Registro

Los usuarios registrados pueden iniciar sesión en sus cuentas utilizando esta ruta. Deben ingresar sus credenciales para acceder a funcionalidades adicionales.

<img src="./public/User_login.png" alt="" width="450px" >

Este es el menú que podrá visualizar un cliente logeado.

<img src="./public/My_account_options.png" alt="" width="450px" >

Si un usuario no está registrado, puede hacerlo seleccionando la vista "Registro de usuario", presionando el botón "No tengo cuenta aún, quiero registrarme".

<img src="./public/User_register.png" alt="" width="450px" >

## Página Principal

La ruta de inicio es la página de inicio del E-Commerce. Aquí, los usuarios pueden explorar una variedad de productos disponibles para la compra.

<img src="./public/Products_general_view.png" alt="" width="450px" >

## Detalle de Producto Individual

Cada producto en el E-Commerce tiene su propia página o ruta que mostrará el detalle del producto. Aquí, los usuarios pueden ver detalles específicos de un producto y agregarlos al carrito de compras.

<img src="./public/Products_general_item_detail.png" alt="" width="450px" >

Los productos se pueden agregar al carro desde la vista general o desde la vista detalle.

<img src="./public/Products_general_item_added.png" alt="" width="450px" >

Esta es la vista de los productos que han sigo agregados al carro de compras. Acá también es posible aumentar o reducir la cantidad de un determinado ítem, si la cantidad es menor que 1, el ítem se borrará completamente del carrito.

<img src="./public/Cart_details.png" alt="" width="450px" >

## Mantenedor de productos.

A modo de ejemplo, cada vez que un usuario hace LogIn la aplicación lo envía a la página Dashboard, dónde podrá visualizar una lista de los productos publicados, con la funcionalidad adicional de Agregar, Cambiar la Cantidad o Eliminar dicho producto.

<img src="./public/Products_admin_dashboard.png" alt="" width="450px" >

Esta captura de pantalla muestra los campos necesarios para crear un nuevo producto.

<img src="./public/Products_admin_add.png" alt="" width="450px" >

Acá se muestra la opción de actualizar cantidad y eliminar un producto.

<img src="./public/Products_admin_updated.png" alt="" width="450px" >

## Formulario de Contacto

Hemos habilitado la función de formulario contacto en caso que sea necesario algo que no esté desplegado en la página.

<img src="./public/Contact_form.png" alt="" width="450px" >



---

¡Espero que disfrutes explorando este ejemplo de E-Commerce!