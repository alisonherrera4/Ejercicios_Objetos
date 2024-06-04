let libro = {

    titulo : "la magia de pensar en grande",
    autor : "David J. Schwartz"

};
libro.año = 1959;
libro.titulo = "la magia de pensar en grande";

delete libro.autor;

console.log(libro);
