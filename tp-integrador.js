//Integrantes
//Porcile Karina
//Lezama Mary

//Sistema de Gestion de Biblioteca

//Punto 1 Estructura de Datos
// a) Crear un array de objetos llamado libros que contenga al menos 10 libros.

const Libros = [
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