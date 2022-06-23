let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let texto = "hola mi nombre es david Molina";

const posts = [
  {
    nombre: "david",
    id: 1,
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi dolores, fuga quaerat obcaecati dolorem exercitationem natus dignissimos veritatis, voluptates voluptatibus nihil est dicta sunt iusto, repellendus ea mollitia? Pariatur?",
  },
  {
    nombre: "carly",
    id: 2,
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi dolores, fuga quaerat obcaecati dolorem exercitationem natus dignissimos veritatis, voluptates voluptatibus nihil est dicta sunt iusto, repellendus ea mollitia? Pariatur?",
  },
  {
    nombre: "franco",
    id: 3,
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi dolores, fuga quaerat obcaecati dolorem exercitationem natus dignissimos veritatis, voluptates voluptatibus nihil est dicta sunt iusto, repellendus ea mollitia? Pariatur?",
  },
];

// *******************************para transformar datos en nuevos arrays tenemos Array.from() o varibale.split()
// 1.- a partir del objeto array
let array = Array.from(texto);
console.log(array);
// 2.- con el metodo split()
let array2 = texto.split(" ");
console.log(array2);
// 3.- los cuatro metodos basicos de los Arrays push pop unshift y shift
array2.push("agregado al final");
array2.pop();
array2.unshift("agregado al comienzo");
array2.shift();
console.log(array2);

// ********************************estructura basica para recorrer un array

// for (let i = 0; i < numeros.length; i++) {
//   const element = numeros[i];
//   let result = element + 2;
//   console.log(result);
// }

// **********************************Metodos avanzados de los Arrays

// 1.- metodo Filter: es un callback que recibe como parametro el (Element, index y array),  utilizando una condicion podemos filtrar elementos de un array y devolver un NUEVO ARRAY con los elementos que cumplan la condicion
const result = numeros.filter((el) => el > 3 && el < 8);
console.log(result);

//2.-  metodo map:  es un callback que recibe como parametro el (Element, index y array), itera cada elemento y devuelve un NUEVO ARRAY, es igual al forEach

console.log(numeros.map((el) => el + 5));

//3.-  Metodo forEach: es un callback que recibe como parametro el (Element, index y array),
// itera cada elemento para realizar cualquier tipo de operacion
numeros.forEach((el) => {
  let numbers_names = `yo soy el numero ${el}`;
  console.log(numbers_names);
});

//4.-  Metodo Find: es un callback que recibe como parametro el (Element, index y array) busca una coincidencia y trae el elemento

posts.find((el) => {
  if (el.id === 2) {
    console.log(`el comentario numero 2 lo hizo ${el.nombre}`);
  }
});

// 5.- Metodo Some:  es un callback que recibe como parametro el (Element, index y array) busca una coincidencia y devuelve true o false
let postExistente = posts.some((el) => el.id === 2);
console.log(postExistente);

//6.-  Metodo Includes: se utiliza para saber si existe cierta palabra dentro de un array;

let palabraExistente = posts.some((el) => el.nombre.includes("carly"));
console.log(palabraExistente);

// 7.- metodo Every: es un callback igual al Metodo SOme, pero devuelve tru o false siempree que la coincidencia se cumpla en todos los elementos

let existeEnTodos = posts.every((el) => el.post.includes("lorem"));
console.log(existeEnTodos);

//8.- Metodo sort(), metodo que ordena el arreglo, cuando tenemos strings lo hace alfabeticamente, cuando tenemos number lo hace de menor a mayor; en el caso particular de los numeros se trabaja con un factor de comparacion. sort() recibe como parametro una funcion de comparacion

let frutas = ["cereza", "banana", "anana", "frambuesa", "durazno"];
let desorden = [7, 9, 34, 95, 83, 10, 110, 135];

function comparacion(a, b) {
  return a - b;
  // si a-b =-1; a se situa en un indice menor
  // si a-b =1; b se situa en un indice menor
  // si a-b=0; no hay cambios
}
frutas.sort();
console.log(frutas);
desorden.sort(comparacion);
console.log(desorden);

// 9.- metodo reduce:  recibe dos parametros; una callback que a diferencia de los demas recibe 4 parametros Element, index, array y el valorPrevio=acumulador; en este acumulador se guarda el resultado de las iteraciones que se van haciendo.
// elsugundo parametro de reduce es un valor inicial

let sumaTodos = numeros.reduce((acc, el) => {
  return acc + el;
}, 0);
console.log(sumaTodos);

let saludar = array2.reduce((acc, el) => {
  return (acc += " " + el);
});
console.log(saludar);
