let Productos = [{
    id: 1,
    nombre: "remera",
    precio: 1500,
    stock: 5
}, {
    id: 2,
    nombre: "buzo",
    precio: 2500,
    stock: 2
} ]

let stock1= 5
let stock2=2
let envio=500;
let precioProducto=1500;
let contador = stock1+stock2
let gastoTotal = "suma entre producto y envio"
function sumar() {
	precioProducto = 1500(
		prompt('1500' + envio )
	);

	while (precioProducto > 0) {
		gastoTotal = calcularTotal(precioProducto + envio);
		contador++; 
		precioProducto = 1500(
			prompt('1500' + envio)
		);
	}

	if (precioProducto <= 0) {
		console.log('Metodos de pago');
	}
}

function calcularTotal (precioProducto, envio) {
	return gastoTotal + precioProducto;
}

function mostrarTotal() {

	console.log('Cantidad de productos: ' + contador);
	console.log('El precio total es $' + gastoTotal);
	console.log('El precio total es $', gastoTotal);
}

mostrarTotal(2000);

let carritovacio = 0
let eliminarproducto = ("precioproducto", "envio")
let resultado = precioProducto.shift
document.write("carrito con envio")
//document.write("producto removido" = eliminarproducto)
//document.write("resultado" = carritovacio)
let respuesta=prompt("¿Desea eliminar el preducto?")
	if (respuesta == "si") {
		borrarProducto = alert("Eliminar Remera/Buzo");
		find(producto => producto === borrarProducto); 
		if (eliminarproducto) { 
			alert("Producto a eliminar");
			(producto => producto == eliminarProducto);
			preguntar = false;
		} else {
			alert("No se encontro el producto que desea eliminar");
		respuesta = parseInt(prompt("Desea eliminar un producto \n\n1- Sí \n2- No."));
		}
	}
