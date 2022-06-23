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

let array = Array.from(texto);
console.log(array);
let array2 = texto.split(" ");
array2.push("agregado al final");
array2.pop();
array2.unshift("agregado al comienzo");
array2.shift();
console.log(array2);

// for (let i = 0; i < numeros.length; i++) {
//   const element = numeros[i];
//   let result = element + 2;
//   console.log(result);
// }

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
