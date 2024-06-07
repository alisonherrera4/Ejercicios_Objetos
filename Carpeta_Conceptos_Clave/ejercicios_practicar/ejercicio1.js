const texto = "Hola mundo este es un ejemplo de contador de palabras".toLowerCase().split(/\s+/);
const conteo = {};

for (let i = 0; i < texto.length;  i++){
    const palabra = texto [i];

    if (conteo[palabra]){
        conteo[palabra]++;
    }else{
        conteo[palabra] = 1;
    }
}
console.log(conteo);





