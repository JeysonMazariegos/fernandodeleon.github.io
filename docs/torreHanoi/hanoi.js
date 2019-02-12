let contadorInstrucciones = 1;
let div = document.getElementById('instrucciones');
let bandera = 0;

function moverDisco(desde, hacia) {
    div.innerHTML += `<p class="card-text parrafos">${contadorInstrucciones++}. Mueva el disco de: ${desde}, a: ${hacia}</p>`;
}

function moverTorre(discos, origen, destino, auxiliar) {
    if (discos >= 1) {
        moverTorre(discos - 1, origen, auxiliar, destino);
        moverDisco(origen, destino);
        moverTorre(discos - 1, auxiliar, destino, origen);
    }
}

function removeElementsByClass(className) {
    var elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function discos() {

    if (bandera === 1) {
        removeElementsByClass("parrafos");
        contadorInstrucciones = 1;
        bandera = 0;
    } else {
        console.log("bandera cero!");
    }

    cantidadDiscos = document.getElementById("discos").value;
    moverTorre(parseInt(cantidadDiscos), "Origen", "Destino", "Auxiliar");
    bandera = 1;
}
