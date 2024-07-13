function verificarEdad() {
    let edad = document.getElementById("edad").value;
    let resultado = document.getElementById("resultadoEdad");

    if (edad >= 18) {
        resultado.textContent = "Puedes conducir.";
    } else {
        resultado.textContent = "No puedes conducir.";
    }
}

function mostrarCalificacion() {
    let nota = parseFloat(document.getElementById("nota").value);
    let calificacion = document.getElementById("calificacion");

    if (nota >= 0 && nota < 3) {
        calificacion.textContent = "Muy deficiente";
    } else if (nota >= 3 && nota < 6) {
        calificacion.textContent = "Insuficiente";
    } else if (nota >= 6 && nota < 7) {
        calificacion.textContent = "Bien";
    } else if (nota >= 8 && nota < 9.5) {
        calificacion.textContent = "Notable";
    } else if (nota >= 9.5 && nota <= 10) {
        calificacion.textContent = "Sobresaliente";
    } else {
        calificacion.textContent = "Nota no válida";
    }
}


let cadenas = [];

function agregarCadena() {
    let cadenaInput = document.getElementById("cadenaInput").value;
    if (cadenaInput) {
        cadenas.push(cadenaInput);
        document.getElementById("cadenaInput").value = '';
        document.getElementById("resultadoCadenas").textContent = "Cadena agregada: " + cadenaInput;
        setTimeout(() => {
            document.getElementById("resultadoCadenas").textContent = '';
        }, 2000);
    }
}

function concatenarCadenas() {
    let resultadoCadenas = document.getElementById("resultadoCadenas");
    resultadoCadenas.textContent = "Cadena concatenada: " + cadenas.join("-");
    setTimeout(() => {
        resultadoCadenas.textContent = '';
    }, 5000);
    cadenas = []; // Limpiar el array después de concatenar
}

function calcularLetraDNI() {
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    let dni = document.getElementById("dni").value;
    let letra = document.getElementById("letra");

    if (!/^\d{1,8}$/.test(dni)) {
        alert("Número de DNI no válido. Debe ser un número entre 0 y 99999999.");
        return;
    }

    let numero = parseInt(dni);
    let indice = numero % 23;
    letra.textContent = "La letra de tu DNI es: " + letras[indice];
    setTimeout(() => {
        letra.textContent = '';
    }, 5000);
}
