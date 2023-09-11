let obj = {
    numero: 1,
};

console.log(obj.numero);

let copia = obj;

console.log(copia.numero);

console.log(obj);
console.log(copia);

obj.numero = 2;

console.log(copia);