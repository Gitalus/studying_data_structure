// scope se crea cuando se inicia unos curly brackets

function b() {
    let a = a; // esto solo vive dentro de la función
}

// Context nos dice donde estamos dentro del object
// console.log(this);
// console.log((this === window)); // true solo funciona si se ejecuta en el navegador

// En modo local, hace referencia a un objecto. Cada archivo es un objeto?
// this hace referencia al objeto donde estamos actualmente
/*
alert() funciona en el navegador porque está dentro del objeto window.
es lo mismo que hacer window.alert()
*/

function a() {
    console.log(this);
}

a(); // imprime el objeto donde estamos, no es la función, sigue siendo el objeto que representa al archivo

// para que this imprima otro contexto, podemos imprimirlo desde otro objeto:
const object1 = {
    a: () => {
        console.log(this);
    }
}

object1.a();