//mutabilidad
//Por defecto, los objetos en JavaScript son mutables, que significa que puedes cambiar sus propiedades después de crearlos.


//let persona = { nombre: "Ana" };
//persona.nombre = "María"; // Cambiamos el valor de la p
//ropiedad

//inmutabilidad
//Puedes hacer que un objeto sea inmutable usando Object.freeze() . Esto impide agregar, eliminar o modificar propiedades

//const persona = { nombre: "Ana" };
//Object.freeze(persona);
//persona.nombre = "María"; // Retorna Ana ya que no perm
//ite su modificación




const persona = {
    nombre : "ana",
    apellido : "perez",
    edad : 19,
}



const cuidadano ={
    ...persona,
    genero : "F",
    identificacion : 1026132634,
    estadoCivil : "casada"
};
