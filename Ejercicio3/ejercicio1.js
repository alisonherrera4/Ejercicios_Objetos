let libro = {
    titulo : "Las 48 leyes del poder",
    autor: "Robert Greene"
};
libro.año = 1998;
libro.titulo = "El arte de la seducción";

delete libro.autor;
console.log(libro);
