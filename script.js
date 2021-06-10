//CONDICIONALES//

// 1- Solicitar al usuario que ingrese un texto y validar si contiene la letra “a”.//

/*let ingresetexto = prompt ("Ingrese un texto de su preferencia");
alert("¿Tiene este texto letras a? "+ingresetexto.includes("a"));*/

// 2- Solicitar al usuario que ingrese un texto y mostrarlo todo en minúsculas y todo en mayúsculas.//

/*let texto = prompt("Ingrese el texto que sea de su preferencia");
alert(texto.toUpperCase());
alert(texto.toLowerCase());*/


// 3- Solicitar al usuario que ingrese una palabra y mostrar con qué letra comienza.//

/*let text = prompt("Ingrese una palabra que sea de su preferencia");
alert("El texto ingresado comienza con la letra "+text.charAt(0));*/


// 4- Solicitar al usuario que ingrese una frase y mostrar cuántos caracteres tiene.//

/*let frase = prompt("Ingrese una frase que sea de su preferencia");
alert("La frase ingresada contiene "+frase.length+" caracteres.");*/

// 5- Solicitar a un usuario que ingrese un número y devolver cuántos dígitos tiene.//

/*let numero = parseInt(prompt("Ingrese un número de su preferencia"));
alert("El número ingresado contiene "+numero+" dígitos.");*/

// 6- Solicitar al usuario que ingrese una palabra y mostrar con qué letra termina.//

/*let palabra = prompt("Ingrese una palabra");
let ultimaletra = palabra.charAt(palabra.length - 1);
alert("La palabra ingresada termina con la letra: "+ultimaletra);*/

// 7- Ingresar una cadena de texto y reemplazar los espacios por asteriscos.//

/*let cadena = "La sopa esta exquisita";
alert(cadena);
alert("Reemplazamos los espacios por *: "+cadena.replaceAll(" ","*"));*/ 
//replaceAll para muchos caracteres, reeplace para el primero que encuentre//


// 8- Solicitar al usuario una letra y una cadena de texto e indicar si contiene la letra indicada.//

/* let frase = prompt("Ingrese una frase que sea de su preferencia");
let letra = prompt("Ingrese una letra");
alert("¿Contiene la frase la letra "+letra+"? "+frase.includes(letra)); */

// 9- Solicitar un texto y mostrarlo todo menos la primera letra.//

/*let texto = prompt("Ingrese un texto que sea de su preferencia");
alert("Este es el texto original: "+texto);
alert("Este es el texto sin la primera letra: "+texto.replace(texto[0]," "));*/

// 10- Solicitar al usuario que ingrese su nombre en minúscula y mostrarlo con la primera letra mayúscula.//

/* let nombre = prompt("Ingrese su nombre en minúscula");

function capitalizarPrimeraLetra(str) {
  alert(str.charAt(0).toUpperCase() + str.slice(1));
}

capitalizarPrimeraLetra(nombre);  */