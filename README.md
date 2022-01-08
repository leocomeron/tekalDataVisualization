Pasos para ejecutar esta app:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

La informacion está distribuida en 3 paginas que se puede navegar mediante el Navbar.

PHOTOS-> /photos : arroja todas las fotos de la base de datos, donde se puede ingresar a la a cada una mediante VIEW STATS, se abre un modal donde se encuentran los resultados de los 3 modelos y un promedio de ellos.

VIDEOS-> /videos : arroja todos los videos de la base de datos, donde se puede ingresar a cada uno mediante VIEW STATS, se abre un modal donde se encuentran los resultados de los 3 modelos y un promedio de ellos.

OVERALL-> /overall: arroja una tabla con un resumen de los datos segun sector de la publicidad (Healthcare, Food and brevages, etc). Tambien un grafico de torta de la distribucion de la cantidad de fotos y videos segun sector. Un histograma del promedio de los scores (promedio(m1,m2,m3)) segun sector y tipo.

Con un poco mas de tiempo queria implementar paginación en la pages de photos y videos, para mejorar la performance de la app. Tambien un chart en el modal de videos para poder mostrar el score por frame.
