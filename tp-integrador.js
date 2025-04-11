//Integrantes
//Porcile Karina
//Lezama Mary

//Sistema de Gestion de Biblioteca

//Punto 1 Estructura de Datos
// a) Crear un array de objetos llamado libros que contenga al menos 10 libros.

const libros = [
    { id: 1, titulo: "El principito", autor: "Antoine de Saint-Exupéry", año: 1943, genero: "Infantil", disponible: true,},
    { id: 2, titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", año: 1997, genero: "Fantasia", disponible: true,},
    { id: 3, titulo: "Bajo la misma estrella", autor: "John Green", año: 2012, genero: "ficcion juvenil", disponible: true,},
    { id: 4, titulo: "Enciclopedia de los sabores", autor: "Niki Segnit", año: 2010, genero: "culinario", disponible: true,},
    {
        id: 5,
        titulo: "El león, la bruja y el armario",
        autor: "C.S. Lewis",
        año: 1950,
        genero: "Fantasia",
        disponible: true,
    },
    {
        id: 6,
        titulo:  "La culpa es de la vaca",
        autor: "Gabriel García Márquez",
        año: 1998,
        genero: "Autoayuda",
        disponible: true,
    },
    {
        id: 7,
        titulo: "En busca de la felicidad",
        autor: "Chris Gardner",
        año: 2006,
        genero: "Autobiografia",
        disponible: true,
    },
    {
        id: 8,
        titulo: "El diario de una joven",
        autor: "Anna Frank",
        año: 1942,
        genero: "Memorias",
        disponible: true,
    },
    {
        id: 9,
        titulo: "En los zapatos de Valeria 2",
        autor: "Elísabet Benavent",
        año: 2013,
        genero: "Ficcion conteporanea",
        disponible: true,
    },
    {
        id: 10,
        titulo: "Crepúsculo",
        autor: "Stephenie Meyer",
        año: 2005,
        genero: "Fantasia romantica",
        disponible: true,
    },
];

//console.log(libros) usamos console.log para ejecutar resultados

// b) Crear un array de objetos llamado usuarios con al menos 5 usuarios.

const usuarios = [
    {
        id: 1,
        nombre: "Karina pocile",
        email: "karu@gmail.com",
        librosprestados: []
    },
    {
        id: 2,
        nombre: "Mary Lezama",
        email: "mary@gmail.com",
        librosprestados: []
    },
    {
        id: 3,
        nombre: "Enrique Gonzales",
        email: "gonzales@gmail.com",
        librosprestados: []
    },
    {
        id: 4,
        nombre: "Adrian Gomez",
        email: "Adrian@gmail.com",
        librosprestados: []
    },
    {
        id: 5,
        nombre: "Luciana Rojas",
        email: "Luciana@gmail.com",
        librosprestados: []
    },
];

// console.log(usuarios) usamos console.log para ejecutar la variable usuarios

//Punto 2 Funciones de Géstion de Libros 

// a) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al 
// array libros.

// Ya tenemos hecho el array de libros
//const libros = []

// Realizamos la función para agregar un nuevo libro a nuestra estructura de datos.

function agregarLibro(id, titulo, autor, año, genero) {
    const nuevoLibro = {
        id: id,
        titulo: titulo,
        autor: autor,
        año: año,
        genero: genero,
    };

    libros.push(nuevoLibro);
}
agregarLibro(11, "Amanecer", "Stephenie Meyer", 2008, "Fantasia romantica");

//console.log(libros); para verificar el libro que se agrego

// b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género 
// utilizando el algoritmo de búsqueda lineal. 

const buscarLibro = (criterio, valor) => {
    
    // Recorrer el array de libros
    for (let i = 0; i < libros.length; i++) {
        // Comprobar el criterio y comparar el valor
        if (libros[i][criterio] === valor) {
            return libros[i]; // Retornar el libro encontrado
        }
    }
}

// Ejemplo de uso
const resultado = buscarLibro("autor", "Stephenie Meyer");
if (resultado) {
    console.log("Libro encontrado:", resultado);
} else {
    console.log("Libro no encontrado.");
}

// c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando 
// el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.

// d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro. 

function borrarLibro(id) {
    libros.Biblioteca = libros.filter(libro => libro.id !== id);
  }
  
  borrarLibro(2);
  console.log("Libro Eliminado", libros.Biblioteca); //podemos confirmar que el libro fue elimando del array

  // Punto 3 Gestión de usuarios

  // a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios. 
  // Ya tenemos hecho el array de usuarios
  //const usuarios = []

function registrarUsuario(nombre, email) {
    const nuevoUsuario = {
      id: usuarios.length + 1,
      nombre: nombre,
      email: email
    };
    
    usuarios.push(nuevoUsuario);
  }

  //Ejemplo de uso 

registrarUsuario("Ana", "ana@gmail.com");

console.log(usuarios);

// b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios

function mostrarTodosLosUsuarios(usuarios) {
    return usuarios;
  }
  console.log(mostrarTodosLosUsuarios(usuarios));

  // c) Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.

  function buscarUsuario(email) {
    const usuario = usuarios.find(u => u.email === email);
    return usuario || null;
  }
  const resultadoUsuario = buscarUsuario("mary@gmail.com");
  console.log(resultadoUsuario);

  // d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.

  function borrarUsuario(nombre, email) {
  
    usuarios.eliminar = usuarios.filter(usuario =>
      !(usuario.nombre === nombre && usuario.email === email)
    );
  
}
  borrarUsuario("Luciana Rojas", "Luciana@gmail.com");
  console.log(usuarios.eliminar);
  
// Punto 4 Sistema de Préstamos
// a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no 
// disponible y lo agregue a la lista de libros prestados del usuario. Luego mostrar que libro 
// se prestó y a que usuario.

// Función para prestar un libro
function prestarLibro(idLibro, idUsuario) {
    // Buscar el libro por su ID
    const libro = libros.find(l => l.id === idLibro);
    
    if (!libro) {
        console.log(`El libro con ID ${idLibro} no existe.`);
        return;
    }

    // Verificar si el libro está disponible
    if (!libro.disponible) {
        console.log(`El libro '${libro.titulo}' no está disponible.`);
        return;
    }

    // Buscar el usuario por su ID
    const usuario = usuarios.find(u => u.id === idUsuario);
    
    if (!usuario) {
        console.log(`El usuario con ID ${idUsuario} no existe.`);
        return;
    }

    // Marcar el libro como no disponible
    libro.disponible = false;

    // Agregar el libro a la lista de libros prestados del usuario
    usuario.librosprestados.push(libro.id);

    // Mostrar el libro prestado y el usuario
    console.log(`El libro '${libro.titulo}' ha sido prestado a ${usuario.nombre}.`);
}
prestarLibro(7, 2);
prestarLibro(5, 1);
prestarLibro(3, 5);

// b) Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible
//  y lo elimine de la lista de libros prestados del usuario.

// Función para devolver un libro
function devolverLibro(idLibro, idUsuario) {
    // Buscar el libro por su ID
    const libro = libros.find(l => l.id === idLibro);
    
    // Verificar si el libro está disponible
    if (libro.disponible) {
        console.log(`El libro '${libro.titulo}' ya está disponible.`);
        return;
    }
    // Buscar el usuario por su ID
    const usuario = usuarios.find(u => u.id === idUsuario);
    
     // Verificar si el usuario tiene el libro prestado
    const verificar = usuario.librosprestados.indexOf(idLibro);
    
    if (verificar === -1) {
        console.log(`El usuario ${usuario.nombre} no tiene el libro '${libro.titulo}' prestado.`);
        return;
    }

    // Eliminar el libro de la lista de libros prestados del usuario
    usuario.librosprestados.splice(verificar, 1);

    // Marcar el libro como disponible
    libro.disponible = true;

    // Mostrar el mensaje de devolución
    console.log(`El libro '${libro.titulo}' ha sido devuelto por ${usuario.nombre}.`);
}

// Ejemplos de uso de la función:
devolverLibro(7, 2);  
devolverLibro(5, 1);

// Punto 5 Reportes

/* a) Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .filter(), 
.reduce()) para generar un reporte con la siguiente información:
Cantidad total de libros.
Cantidad de libros prestados.
Cantidad de libros por género.
Libro más antiguo y más nuevo*/

function generarReporteLibros() {
    const totalLibros = libros.length;
  
    const librosPrestados = libros.filter(libro => !libro.disponible).length;
  
    const librosPorGenero = libros.reduce((acumulador, libro) => {
      const genero = libro.genero.toLowerCase();
      acumulador[genero] = (acumulador[genero] || 0) + 1;
      return acumulador;
    }, {});
  
    const libroMasAntiguo = libros.reduce((másAntiguo, libro) => {
      if (libro.año < másAntiguo.año) {
        return libro;
      } else {
        return másAntiguo;
      }
    });
    
    const libroMasNuevo = libros.reduce((másNuevo, libro) => {
      if (libro.año > másNuevo.año) {
        return libro;
      } else {
        return másNuevo;
      }
    });
  
    console.log("Reporte de Libros:");
    console.log("Total:", totalLibros);
    console.log("Prestados:", librosPrestados);
    console.log("Por género:", librosPorGenero);
    console.log("Más antiguo:", libroMasAntiguo.titulo, "-", libroMasAntiguo.año);
    console.log("Más nuevo:", libroMasNuevo.titulo, "-", libroMasNuevo.año);
  }
  
  generarReporteLibros();


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
  
    const resultados = libros.filter(libro => {
      const titulo = libro.titulo.trim();
  
      // 1. Verificamos si tiene más de una palabra
      const palabras = titulo.split(" ");
      if (palabras.length <= 1) {
        return false;
      }
  
      // 2. Verificamos si contiene algún carácter inválido
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

