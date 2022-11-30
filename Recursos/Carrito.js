const carrito = [];

let añadir=1;

while(añadir==1){
	let fruta = prompt("ingrese la fruta o deje un espacio en blanco para dejar de añadir");
		if (fruta == ""){
			alert("fin");
            añadir=0;
		}
		else{
			carrito.push(fruta);
		}
}

console.log(carrito)
