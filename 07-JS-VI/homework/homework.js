// Do not change any of the function names

function invocarCallback(cb) {
  // Invoca al callback `cb`
  cb(cb)
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  var nums = [1,2.,3,4,5]
  var numreduce = nums.reduce(function(acc, elemento){
    return acc + elemento;
  })
  cb(nums)
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  var nums = [1,2.,3,4,5]
  nums.forEach(function(elemento){
    console.log(elemento)
  })
  cb(array)
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  var nuevoArray = array.map(function(el) {
    return cb(el);
  });
  return nuevoArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  invocarCallback,
  sumarArray,
  forEach,
  map,
};
