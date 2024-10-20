
alert("¡Bienvenido!")

let precio = 400000;
let cantidad = 1;



let precioSpan = document.querySelector(".precio-inicial");
let cantidadSpan = document.querySelector(".cantidad");
let valorTotalSpan = document.querySelector(".valor-total");


precioSpan.innerHTML = precio;
valorTotalSpan.innerHTML = precio * cantidad;


const sumar = () => {
    cantidad++; 
    cantidadSpan.innerHTML = cantidad; 
    valorTotalSpan.innerHTML = precio * cantidad; 
}


const restar = () => { 
    if (cantidad > 0) { 
        cantidad--; 
        cantidadSpan.innerHTML = cantidad; 
        valorTotalSpan.innerHTML = precio * cantidad; 
    } else {
        alert("No puedes comprar -1")
    }

    
}

