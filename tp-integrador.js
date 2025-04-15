//Integrantes
//Porcile Karina
//Lezama Mary

//Sistema de Gestion de Biblioteca

//Punto 1 Estructura de Datos
// a) Crear un array de objetos llamado libros que contenga al menos 10 libros.

const libros = [
    { id: 1, titulo: "El principito", autor: "Antoine de Saint-Exupéry ", año: 1942, genero: "Infantil", disponible: true,},
    { id: 2, titulo: "Harry Potter y la piedra filosofal", autor: " J.K. Rowling", año: 1997, genero: "Fantasia", disponible: true,},
    { id: 3, titulo: "Bajo la misma estrella", autor: "John Green", año: 2012, genero: "ficcion juvenil", disponible: true,},
    { id: 4, titulo: "Enciclopedia de los sabores", autor: "Niki Segnit", año: 2010, genero: "culinario", disponible: true,},
    { id: 5, titulo: "El león, la bruja y el armario", autor: "C.S. Lewis", año: 1950, genero: "Fantasia", disponible: true,},
    { id: 6, titulo:  "La culpa es de la vaca", autor: "Gabriel García Márquez", año: 1998, genero: "Autoayuda", disponible: true,},
    { id: 7, titulo: "En busca de la felicidad", autor: "Chris Gardner", año: 2006, genero: "Autobiografia", disponible: true,},
    { id: 8, titulo: "El diario de una joven", autor: "Anna Frank", año: 1942, genero: "Memorias", disponible: true,},
    { id: 9, titulo: "En los zapatos de Valeria 2", autor: "Elísabet Benavent", año: 2013, genero: "Ficcion conteporanea", disponible: true,},
    { id: 10,titulo: "Crepúsculo", autor: "Stephenie Meyer", año: 2005, genero: "Fantasia romantica", disponible: true,},
];

console.log(libros) //Ejecutamos el comando para mostrar en consola

// b) Crear un array de objetos llamado usuarios con al menos 5 usuarios.

const usuarios = [
    { id: 1, nombre: "Karina pocile", email: "Karu@gmail.com", librosPrestados: [] },
    { id: 2, nombre: "Mary Lezama", email: "Mary@gmail.com", librosPrestados: [] },
    { id: 3, nombre: "Enrique Gonzales", email: "Gonzales@gmail.com", librosPrestados: [] },
    { id: 4, nombre: "Adrian Gomez", email: "Adrian@gmail.com", librosPrestados: [] },
    { id: 5, nombre: "Luciana Rojas", email: "Luciana@gmail.com", librosPrestados: [] },
];

console.log(usuarios) //Ejecutamos el comando para mostrar en consola

//Punto 2 Funciones de Géstion de Libros 

// a) Implementar una función agregarLibro(id, titulo, autor, año, genero) que agregue un nuevo libro al 
// array libros.

// Realizamos la función para agregar un nuevo libro a nuestra estructura de datos.

function agregarLibro(id, titulo, autor, año, genero) {
    const nuevoLibro = {  //Hacemos la variable del nuevo libro
        id: id,
        titulo: titulo,
        autor: autor,
        año: año,
        genero: genero,
    };
  
    libros.push(nuevoLibro); //Usamos el metodo basico .push para agregar el nuevo libro al array de libros
    console.log("Libro agregado con éxito:", nuevoLibro); 
  }
  
agregarLibro(11, "Amanecer", "Stephenie Meyer", 2008, "Fantasia romantica"); //Invocamos la function para ejecutar
console.log(libros) // Nos mostrara el listado de libros con el nuevo libro agregado


// b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género 
// utilizando el algoritmo de búsqueda lineal. 

const buscarLibro = (criterio, valor) => { //Aplicamos arrow 
    
    // Recorre el array de libros
    for (let i = 0; i < libros.length; i++) {
        // Comprueba el criterio y compara el valor
        if (libros[i][criterio] === valor) {
            return libros[i]; // Retorna el libro encontrado
        }
    }
}

// Ejemplo de uso buscando por "autor" aplicando condicionales para evaluar diferentes situaciones
const resultado = buscarLibro("autor", "Stephenie Meyer"); 
if (resultado) {
    console.log("Libro encontrado:", resultado);
} else {
    console.log("Libro no encontrado.");
}

// Ejemplo de uso buscando por "titulo" aplicando condicionales para evaluar diferentes situaciones
const resultado2 = buscarLibro("titulo", "Bajo la misma estrella");
if (resultado2) {
    console.log("Libro encontrado:", resultado2);
} else {
    console.log("Libro no encontrado.");
}

// c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando 
// el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.

function ordenarLibros(criterio) { //Implementamos la function ordenarLibros
    let n = libros.length; //Se crea variable n para la longitud de libros(cantidad total)
  
    for (let i = 0; i < n - 1; i++) {  //Bubble Sort compara elementos de a pares y los intercambia si estan desordenados
        for (let j = 0; j < n - i - 1; j++) {  // Este doble bucle hace eso con todos los elementos.
            let condicion = false;

            //condicion de ordenamiento
            if (criterio === "titulo") {
                condicion = libros[j].titulo.toLowerCase() > libros[j + 1].titulo.toLowerCase();
            } else if (criterio === "año") {
                condicion = libros[j].año > libros[j + 1].año;
            }
  
            if (condicion) {
                // Intercambia libros
                let intercambiar = libros[j];
                libros[j] = libros[j + 1];
                libros[j + 1] = intercambiar;
            }
        }
    }
  
    // Muestra los libros ordenados
    console.log(`Libros ordenados por ${criterio}:`);
    libros.forEach(libro => {
        console.log(`${libro.titulo} (${libro.año})`);
    });
  }
  
  ordenarLibros("titulo"); // Ordena los libros por título
  ordenarLibros("año");    // Ordena los libros por año

// d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro. 

function borrarLibro(id) {
    let libroBiblioteca = libros.findIndex(libro => libro.id === id); //Declaramos la variable que nos mostrara 
                                                                     //el libro que buscamos y la posicion en la que esta
     // Aplicamos la condicional para eliminar el libro                                                                
    if (libroBiblioteca !== -1) {
        let eliminado = libros.splice(libroBiblioteca, 1)[0]; // Usamos el metodo .splice que permite eliminar un elemento del array sin modificar el mismo
        console.log(`Libro eliminado: ${eliminado.titulo} (${eliminado.año})`);
    } else {
        console.log(`No se encontró ningún libro con ID ${id}.`);
    }
}
//Invocamos la function con:

borrarLibro(3); // Eliminará "Bajo la misma estrella (2012)"
borrarLibro(12); // Mostrará que no se encontró el libro con Id 12

  // Punto 3 Gestión de usuarios

  // a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios. 

  function registrarUsuario(nombre, email) { //En este codigo la function registrarUsuario toma dos parametros nombre y email
    const nuevoUsuario = {  //Crea un objeto con esos datos 
      id: usuarios.length + 1,
      nombre: nombre,
      email: email,
      librosPrestados: [],
    };
    
    usuarios.push(nuevoUsuario);// Usamos el metodo basico .push y lo agrega al array usuarios
  
  console.log("Usuario registrado con éxito:", nuevoUsuario); //Luego imprime un mensaje de confirmacion
}

registrarUsuario("Ana", "ana@gmail.com"); //Usuario registrado con éxito: { id: 6, nombre: 'Ana', email: 'ana@gmail.com', librosprestados: [] }

// b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios

function mostrarTodosLosUsuarios(usuarios) { // Realizamos una function declarada
    return usuarios;
  }
  console.log(mostrarTodosLosUsuarios(usuarios)); //Llama a la function

  // c) Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.

  function buscarUsuario(email) {  // Function declarada
    const usuario = usuarios.find(u => u.email === email); //Usamos el metodo .find para buscar el usuario dentro del array
    return usuario || null; // En caso de ingresar un email incorrecto nos devolvera null
  }
  const resultadoUsuario = buscarUsuario("Mary@gmail.com"); //Al buscar este email existente 
  console.log("Usuario encontrado con exito", resultadoUsuario); //Usuario encontrado con exito { id: 2, nombre: 'Mary Lezama', email: 'Mary@gmail.com',librosprestados: []}

  // d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.

  function borrarUsuario(nombre, email) { //Creamos la function declarada
  
    usuarios.filtrar = usuarios.filter(usuario => //usamos el metodo .filter  que devuelve un nuevo array con todos los elementos que NO cumplen 
      !(usuario.nombre === nombre && usuario.email === email) // con esta condicion dada
    );
  
}
  borrarUsuario("Luciana Rojas", "Luciana@gmail.com"); //En este ejemplo queremos borrar este usuario
  console.log(usuarios.filtrar);
  
// Punto 4 Sistema de Préstamos

// a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no 
// disponible y lo agregue a la lista de libros prestados del usuario. Luego mostrar que libro 
// se prestó y a que usuario.

// Function para prestar un libro
function prestarLibro(idLibro, idUsuario) {
    // Busca el libro por su ID
    const libro = libros.find(l => l.id === idLibro); // Utilizamos .find para buscar un elemento que cumple con la condición
    //Aplicamos condicionales para checar diversas situaciones
    if (!libro) {   // Usamos el operador lógico NOT para invertir el valor de la expresión
        console.log(`El libro con ID ${idLibro} no existe.`);
        return;
    }

    // Verifica si el libro está disponible
    if (!libro.disponible) {
        console.log(`El libro '${libro.titulo}' no está disponible.`);
        return;
    }

    // Buscar el usuario por su ID
    const usuario = usuarios.find(u => u.id === idUsuario); //Es una función flecha que: Toma cada usuario y compara si el id de ese usuario es igual a idUsuario.
    
    if (!usuario) {
        console.log(`El usuario con ID ${idUsuario} no existe.`);
        return;
    }

    // Marca el libro como no disponible
    libro.disponible = false;

    // Agrega el libro a la lista de libros prestados del usuario
    usuario.librosPrestados.push(libro.id);

    // Muestra el libro prestado y el usuario al que se le presto
    console.log(`El libro '${libro.titulo}' ha sido prestado a ${usuario.nombre}.`);
}
prestarLibro(1, 1); //Invocamos la function "El libro El principito ha sido prestado a Karina Porcile"


// b) Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible
//  y lo elimine de la lista de libros prestados del usuario.

// Función para devolver un libro
function devolverLibro(idLibro, idUsuario) {
    // Busca el libro por su ID
    const libro = libros.find(l => l.id === idLibro);
    
    // Verifica si el libro está disponible
    if (libro.disponible) {
        console.log(`El libro '${libro.titulo}' ya está disponible.`);
        return;
    }
    // Busca el usuario por su ID
    const usuario = usuarios.find(u => u.id === idUsuario);
    
     // Verifica si el usuario tiene el libro prestado
    const verificar = usuario.librosPrestados.indexOf(idLibro);// Usamos método indexOf  busca la posición del valor idLibro dentro del array.
    
    if (verificar === -1) {
        console.log(`El usuario ${usuario.nombre} no tiene el libro '${libro.titulo}' prestado.`);
        return;
    }

    // Elimina el libro de la lista de libros prestados del usuario
    usuario.librosPrestados.splice(verificar, 1);

    // Marca el libro como disponible
    libro.disponible = true;

    // Muestra el mensaje de devolución
    console.log(`El libro '${libro.titulo}' ha sido devuelto por ${usuario.nombre}.`);
}

// Ejemplo de uso de la function:
devolverLibro(1, 1); //Invocamos la function "El libro El principito ha sido devuelto por Karina Porcile"

// Punto 5 Reportes
/* a) Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .filter(), 
.reduce()) para generar un reporte con la siguiente información:
Cantidad total de libros.
Cantidad de libros prestados.
Cantidad de libros por género.
Libro más antiguo y más nuevo*/

function generarReporteLibros() {
    const totalLibros = libros.length; //Creamos variable con cantidad total de libros
  
     // Cantidad de libros prestados
    const librosPrestados = libros.filter(libro => !libro.disponible).length; //Se utiliza .filter para contar cuantos libros tienen la propiedad librosPrestados 
                                                                             //Usamos .length para devolver la cantidad
     // Cantidad de libros por género                                                                        
    const librosPorGenero = libros.reduce((grupo, libro) => {  //Usamos .reduce para crear un objeto que cuenta cuántos libros hay de cada género
      const genero = libro.genero.toLowerCase();     //La variable genero nos permite modificar a minusculas con .toLowerCase
      grupo[genero] = (grupo[genero] || 0) + 1;   
      return grupo;
    }, {});
    // Libro más antiguo
    const libroMasAntiguo = libros.reduce((másAntiguo, libro) => { //Usamos el metodo .reduce para encontrar el libro con la fecha de publicación más baja, respectivamente.
      if (libro.año < másAntiguo.año) { //Usamos la condicional por que queremos que nos compare el mas antiguo con el mas actual
        return libro;
      } else {
        return másAntiguo;
      }
    });
    // Libro más nuevo
    const libroMasNuevo = libros.reduce((másNuevo, libro) => { //Usamos el metodo .reduce para encontrar el libro con la fecha de publicación más Alta, respectivamente.
      if (libro.año > másNuevo.año) {  
        return libro;
      } else {
        return másNuevo;
      }
    });
  // Generar el reporte
    console.log("Reporte de Libros:");
    console.log("Total:", totalLibros);
    console.log("Prestados:", librosPrestados);
    console.log("Por género:", librosPorGenero);
    console.log("Más antiguo:", libroMasAntiguo.titulo, "-", libroMasAntiguo.año);
    console.log("Más nuevo:", libroMasNuevo.titulo, "-", libroMasNuevo.año);
  }
  
  generarReporteLibros(); // Invocamos la function 


// Punto 6. Identificación Avanzada de libros

// a) Implementar una función librosConPalabrasEnTitulo() que identifique y muestre los títulos de los 
// libros que contienen más de una palabra. Además la función debe excluir aquellos títulos que contengan 
// números y/o caracteres especiales. Por último mostrar en la consola el array resultante. 

const librosConPalabrasEnTitulo = () => {
    // Caracteres no permitidos
    const caracteresInvalidos = ["0","1","2","3","4","5","6","7","8","9",
                                 "!","@","#","$","%","^","&","*","(",")",
                                 "+","=","{","}","[","]",":",";","'",'"',
                                 "<",">","/","\\","|","`","~","-","_",".",","];
  
    const resultados = libros.filter(libro => {  // Usamos filter para recorrer todos los libros y devolver solo los que cumplan la condición.
      const titulo = libro.titulo.trim(); // Variable que contiene el título del libro, pero sin espacios al principio ni al final por eso usamos .trim
  
      // Verificamos si tiene más de una palabra
      const palabras = titulo.split(" ");
      if (palabras.length <= 1) {
        return false;
      }
  
      // Verificamos si contiene algún carácter inválido
      let contieneCaracterInvalido = false;
  
      caracteresInvalidos.forEach(caracter => {
        if (titulo.includes(caracter)) {
          contieneCaracterInvalido = true;
        }
      });
  
      // Devolvemos solo si tiene más de una palabra y no tiene caracteres inválidos
      return !contieneCaracterInvalido;
    }).map(libro => libro.titulo);
  
    console.log(resultados);
  };
  
  librosConPalabrasEnTitulo();

// Punto 7 Cálculos Estadísticos

// a) Desarrollar una función calcularEstadisticas() que obtenga información sobre los años de
// publicación de los libros:
//Obtener un array con los años de publicación de todos los libros.
//Calcular el promedio de los años de publicación.
//Encontrar el año de publicación más frecuente.
//Calcular la diferencia en años entre el libro más antiguo y el más nuevo. Para este punto es 
// recomendable usar el objeto Math()

function calcularEstadisticas() {
    // Obtener array con los años
    const años = libros.map(libro => libro.año);
  
    // Calcular el promedio
    const sumaAños = años.reduce((acum, año) => acum + año, 0);
    const promedio = sumaAños / años.length;
  
    // Encontrar el año más frecuente
    const frecuencia = {};  //Se crea un objeto vacio para saber cuantas veces aparece
    let maxFrecuencia = 0;  // Guarda el número de repeticiones 
    let añoMasFrecuente = null; //Guarda el año que mas se repite 
  
    for (const año of años) {  // Bucle for que recorre el array de años uno por uno 
        frecuencia[año] = (frecuencia[año] || 0) + 1;   // Si el año ya existe le suma 1 sino existe se convierte en 0 y le suma 1
        if (frecuencia[año] > maxFrecuencia) {
            maxFrecuencia = frecuencia[año];
            añoMasFrecuente = año;
        }
    }
  
    // Calcular la diferencia entre el más antiguo y el más nuevo
    const añoMin = Math.min(...años);
    const añoMax = Math.max(...años);
    const diferencia = añoMax - añoMin;
  
    // Mostrar resultados
    console.log("Años de publicación:", años);
    console.log("Promedio de años:", Math.floor(promedio));
    console.log("Año más frecuente:", añoMasFrecuente);
    console.log(`Diferencia entre el libro más antiguo (${añoMin}) y el más nuevo (${añoMax}): ${diferencia} años`);
  }
  
  // Llamar a la functión
  calcularEstadisticas();

  // Punto 8 Manejo de Cadenas

//Crear una función normalizarDatos() que utilice métodos de strings para:
//Convertir todos los títulos a mayúsculas.
//Eliminar espacios en blanco al inicio y final de los nombres de autores.
//Formatear los emails de los usuarios a minúsculas.

function normalizarDatos() {
    // Normalizar títulos y autores en libros
    libros.forEach(libro => {
      // Convertir título a mayúsculas
      libro.titulo = libro.titulo.toUpperCase();
  
      // Quitar espacios al principio y final del autor
      libro.autor = libro.autor.trim();
    });
  
    // Normalizar correos electrónicos en usuarios
    usuarios.forEach(usuario => {
        usuario.email = usuario.email.toLowerCase();
    });
}
        
normalizarDatos();
console.log(libros);
console.log(usuarios);

// Punto 9 Interfaz de Usuario por Consola
// Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita 
// interactuar con el sistema utilizando prompt().
//El menú debe incluir opciones para todas las funcionalidades implementadas en el proyecto y 
// utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.

const prompt = require('prompt-sync')(); //Esta Variable es importante en estos casos para poder interactuar con el menú usando VSC                                         //

 //En esta function menuPrincipal se utiliza un bucle do...while
function menuPrincipal() {
    let opciones;

    do {   //Armamos el menu de opciones 
        opciones = prompt(  //Usamos prompt para que el usuario pueda seleccionar opciones
            "Bienvenido al Sistema de Biblioteca\n\n" +
            "1. Ver lista de libros\n" +
            "2. Prestar libro\n" +
            "3. Devolver libro\n" +
            "4. Ver estadísticas\n" +
            "5. Normalizar emails de usuarios\n" +
            "0. Salir\n\n" +
            "Seleccione una opción:" 
            
        );
        // Aquí  agregamos la lógica para la Opción 1
        switch (opciones) {    // Usamos switch para comparar valor ingresado por usuario y ejecutar un bloque de código segun sea el caso/sitaución
            case "1":
                verLibros();
                break;  // Parte del bloque que indica que se sale del Switch luego de que se ejecuto el caso/situación
        // Aquí  agregamos la lógica para la Opción 2
            case "2":  // Se ejecuta cuando el usuario selecciona opción 2 del menú
                const idLibro = parseInt(prompt("Ingrese el ID del libro a prestar:"));  // Usamos prompt para que el usuario ingrese valor y se guarda como script al tener parseint lo convierte en número
                const idUsuario = parseInt(prompt("Ingrese el ID del usuario que lo solicita:"));
                if (!isNaN(idLibro) && !isNaN(idUsuario)) { // Usamos !isNnan para evitar que el usuario escriba letras o espacios ya que !isNan significa que es un numero
                    prestarLibro(idLibro, idUsuario); //Permite a un usuario solicitar un libro ingresando su ID y el ID del libro.
                } else {
                    console.log("Datos inválidos. Intente nuevamente.");
                }
                break;
           // Aquí  agregamos la lógica para la Opción 3
            case "3":
                const idDevLibro = parseInt(prompt("Ingrese el ID del libro a devolver:"));
                const idDevUsuario = parseInt(prompt("Ingrese el ID del usuario que lo devuelve:"));
                if (!isNaN(idDevLibro) && !isNaN(idDevUsuario)) {
                    devolverLibro(idDevLibro, idDevUsuario); //Permite a un usuario devolver un libro ingresando su ID y el ID del libro.
                } else {
                    console.log("Datos inválidos. Intente nuevamente.");
                }
                break;
           // Aquí  agregamos la lógica para la Opción 4
            case "4":
                calcularEstadisticas(); //Muestra estadísticas sobre los libros
                break;
           // Aquí  agregamos la lógica para la Opción 5
            case "5":
                normalizarEmails(); 
                break; //Convierte todos los correos electrónicos de los usuarios a minúsculas para mantener la consistencia.
                
           // Aquí  agregamos la lógica para la Opción 6
            case "6":
                verUsuarios();
                break; //Muestra una lista de usuarios con sus detalles, incluyendo los libros que han prestado.

        }

    } while (opciones !== "0"); // Aquí  agregamos la lógica para la Opción 0. El 0 representa salir del menú y !== significa " distinto de" entonces mientras que la opcion no sea 0 se muestra el menu
}

// Llama a la función para mostrar el menú
menuPrincipal()

//Hacemos una function para lograr interactuar con la lógica de la Opcion 1 
function verLibros() {
    const lista = libros.map(libro =>
        `ID: ${libro.id} - ${libro.titulo} (${libro.año}) - Disponible: ${libro.disponible ? "Sí" : "No"}` 
    ).join("\n"); //Muestra todos los libros disponibles, indicando si están prestados o no por medio de su ID
    console.log("Libros:\n\n" + lista);
}
//Hacemos una function para lograr interactuar  con la lógica de la Opcion 6
function verUsuarios() {
    const lista = usuarios.map(usuario =>
        `ID: ${usuario.id} - ${usuario.nombre} - Email: ${usuario.email} - Libros prestados: [${usuario.librosprestados.join(", ")}]`
    ).join("\n"); //Podremos buscar un usuario por su ID
    console.log("Usuarios:\n\n" + lista);
}
//Hacemos una function para lograr interactuar con la lógica de la Opcion 5
function normalizarEmails() {
    usuarios.forEach(usuario => {
        usuario.email = usuario.email.toLowerCase(); //Usamos .toLowerCase
    });
    console.log("Emails normalizados a minúsculas.");
}
