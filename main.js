var operadorElegido = "";

function agregarNumero(num) {
    let c1 = document.getElementById("campo1");
    let c2 = document.getElementById("campo2");

    // Si aún no hay operador, escribimos en el primer campo
    if (operadorElegido === "") {
        c1.value = c1.value + num;
    } else {
        // Si ya hay operador, escribimos en el segundo campo
        c2.value = c2.value + num;
    }
}

function seleccionarOperador(op) {
    // Solo dejamos poner operador si ya escribieron algo en el primer número
    if (document.getElementById("campo1").value !== "") {
        operadorElegido = op;
        document.getElementById("signo").innerHTML = op;
    }
}

function resolver() {
    let n1 = parseFloat(document.getElementById("campo1").value);
    let n2 = parseFloat(document.getElementById("campo2").value);
    let res = 0;

    if (operadorElegido == "+") { res = n1 + n2; }
    if (operadorElegido == "-") { res = n1 - n2; }
    if (operadorElegido == "*") { res = n1 * n2; }
    if (operadorElegido == "/") { res = n2 !== 0 ? n1 / n2 : "Err"; }

    document.getElementById("resultado").value = res;
}

function limpiar() {
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("signo").innerHTML = "";
    operadorElegido = "";
}