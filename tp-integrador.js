//Integrantes
//Porcile Karina
//Lezama Mary

//Sistema de Gestion de Biblioteca

//Punto 1 Estructura de Datos
// a) Crear un array de objetos llamado libros que contenga al menos 10 libros.

const libros = [
    {
        id: 1,
        titulo: "El principito",
        autor: "Antoine de Saint-Exupéry",
        año: 1943,
        genero: "Infantil",
        disponible: true,
    },
    {
        id: 2,
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J.K. Rowling",
        año: 1997,
        genero: "Fantasia",
        disponible: true,
    },
    {
        id: 3,
        titulo: "Bajo la misma estrella",
        autor: "John Green",
        año: 2012,
        genero: "ficcion juvenil",
        disponible: true,
    },
    {
        id: 4,
        titulo: "Enciclopedia de los sabores",
        autor: "Niki Segnit",
        año: 2010,
        genero: "culinario",
        disponible: true,
    },
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
        titulo: "En los zapatos de Valeria",
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
        librosprestados: [5]
    },
    {
        id: 2,
        nombre: "Mary Lezama",
        email: "mary@gmail.com",
        librosprestados: [8]
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
        librosprestados: [1]
    },
    {
        id: 5,
        nombre: "Luciana Rojas",
        email: "Luciana@gmail.com",
        librosprestados: [7]
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
    libros.Biblio = libros.filter(libro => libro.id !== id);
  }
  
  borrarLibro(2);
  console.log("Libro Eliminado", libros.Biblio); //podemos confirmar que el libro fue elimando del array

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
    const longitudInicial = usuarios.length;
  
    usuarios.Eliminar = usuarios.filter(usuario =>
      ! (usuario.nombre === nombre && usuario.email === email)
    );
  
    if (usuarios.length < longitudInicial) {
      console.log(`No se encontró el usuario "${nombre}" con el email "${email}".`);
    } else {
      console.log(`Usuario "${nombre}" con el email "${email}" ha sido eliminado correctamente.`);
    }
  }

  borrarUsuario("Luciana Rojas", "Luciana@gmail.com");
console.log(usuarios.Eliminar);