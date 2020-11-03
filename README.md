# Prueba técnica Lola Market 
Proyecto creado con React App.

En este proyecto se ha recreado el menú desplegable de la tienda de Lola Market.
En él se ve un barra de navegación en la que se muestra: 

* Una cabecera con la tienda y el código postal. 
* Un menú con las categorías y subcategorías de los productos de la tienda elegida. 

Para obtener toda la información de la tienda se ha recogido todo lo necesario de la URL del api: https://api.comprea.com/v7/ (token para cada sesión, código postal, tienda, categorías y subcategorías)

## Algunos detalles de implementación son:

- Los iconos de las categorías son dinámicos y vienen en el objeto de cada categoría
- Cada elemento de categoría debe ser un enlace clicable.
- El formato de URL de cada elemento debe ser ***`/tienda/{{ market }}/{{ category }}/{{ sub_category }}`***
- Cada grupo de sub-categorías tiene un ***Ver toda la sección.*** **Este elemento debe apuntar al enlace de la categoría padre.
- La cabecera de tienda debe estar fija. Sólo debe hacer scroll el listado de categorías.
- Se ha dado una especificación visual a partir de un Zip.

## ¿Cómo se ha hecho la prueba?

Para montar la prueba se han usado diferentes componentes:

### App.js 
  Componente padre en el que se hacen los fetch de todos los datos que se necesitan y un constructor para guardar en el estado los datos recibidos.
  En el render está creada la ruta que tiene que aparecer en el buscador.

### Header.js
  Componente hijo creado única y exclusivamente para la cabecera del menú.
  En él, se reciben por props y se vuelca la información sobre el color de fondo, el icono, el nombre y el código postal de la tienda elegida.

### Catalogue.js
  Componente hijo encargado de recorrer y pintar todas las categorías de la tienda elegida.

### Category.js
  Componente nieto muy concurrido ya que en él :

  * Damos a las categorías de la tienda sus nombres así como la organización de las subcategorías.
  
  * Se utiliza la librería [React Responsive Collapsible](https://www.npmjs.com/package/react-collapsible)  y se crea su comportamiento.
  
  * Se crea la subcategoría "ver toda la sección".

  * Hay una algoritmia específica para el comportamiento que tienen que tener los "Check" de todas las subcategorías.

 
### CategoryItem.js
  Componente bisnieto en el que se da nombre y aspecto a las subcategorías así como a los "check" que van a tener cuando sea necesario.

### En casi todos los componentes se han añadido algunos comentarios con la intención de ayudar a la compresión de qué, cómo y porqué se está realizando es parte del código.


## ¿Cómo se podría mejorar?

1. En el App está grabado que el company_id sea 50 y que el postalCode sea 28010.

Ésto está así porque se necesitaba recibir resultados y volcarlos.
Se podría solucionar creando una página landing dónde sea el usuario quien escriba su código de postal y elija las tiendas que se encuentran disponibles en esa zona.

2. Problemas con la URL.
Al comienzo de la prueba, el el fetch relacionado con el postalCode recibía la información en un orden y con unos nombres concretos y el componente Header fue creado siguiendo esas directrices.
Al tener que añadir la verisón7 a la URL, se cambió la disposición de la información haciendo que todo el trabajo fuese inválido, por lo que opté por dejar solo ese fetch sin la versión.
 
3. La subcategoría "Ver toda la sección".
Se ha creado esta subcategoría con un id:-1 en vez de referenciarla al padre.

## Herramientas 💻
- React.
- JavaScript.
- Saas.
- React Router.
- API.
- Visual Studio Code.

## Aprendizajes 💡
* Librería para colapsables de React.
* Añadir fuentes que no sean de Google fonts.
* Añadir css desde el código de React.
* Algoritmia.
* Crear una URL demás de dos pasos.

## Programadora:
Esta prueba fue creada por Marián de la Osa

¿cómo contactar conmigo?

GitHub: @Mdelaosaiz

Email: mariandelaosa@gmail.com

Twitter: @MariandelaOsa

LinkedIn: @marian-de-la-osagit push