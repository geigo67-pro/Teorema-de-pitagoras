function calcular() {

    let a = parseFloat(document.getElementById("catetoA").value);
    let b = parseFloat(document.getElementById("catetoB").value);
    let c = parseFloat(document.getElementById("hipotenusa").value);

    let resultado = document.getElementById("resultado");


    // CALCULAR HIPOTENUSA
    if (!isNaN(a) && !isNaN(b) && isNaN(c)) {

        if (a <= 0 || b <= 0) {
            resultado.innerHTML =
                "⚠️ Los valores deben ser mayores que 0.";
            return;
        }

        c = Math.sqrt((a * a) + (b * b));

        document.getElementById("hipotenusa").value = c.toFixed(2);

        resultado.innerHTML =
            `📐 <strong>Hipotenusa:</strong> c = √(${a}² + ${b}²) = <strong>${c.toFixed(2)}</strong>`;
    }


    // CALCULAR CATETO A
    else if (!isNaN(b) && !isNaN(c) && isNaN(a)) {

        if (c <= b) {
            resultado.innerHTML =
                "⚠️ La hipotenusa debe ser mayor que el cateto.";
            return;
        }

        a = Math.sqrt((c * c) - (b * b));

        document.getElementById("catetoA").value = a.toFixed(2);

        resultado.innerHTML =
            `📐 <strong>Cateto A:</strong> a = √(${c}² - ${b}²) = <strong>${a.toFixed(2)}</strong>`;
    }


    // CALCULAR CATETO B
    else if (!isNaN(a) && !isNaN(c) && isNaN(b)) {

        if (c <= a) {
            resultado.innerHTML =
                "⚠️ La hipotenusa debe ser mayor que el cateto.";
            return;
        }

        b = Math.sqrt((c * c) - (a * a));

        document.getElementById("catetoB").value = b.toFixed(2);

        resultado.innerHTML =
            `📐 <strong>Cateto B:</strong> b = √(${c}² - ${a}²) = <strong>${b.toFixed(2)}</strong>`;
    }


    // ERROR
    else {

        resultado.innerHTML =
            "⚠️ Introduce exactamente dos valores para realizar el cálculo.";
    }
}


function limpiar() {

    document.getElementById("catetoA").value = "";
    document.getElementById("catetoB").value = "";
    document.getElementById("hipotenusa").value = "";

    document.getElementById("resultado").innerHTML =
        "📊 Introduce los valores para comenzar.";
}


function irCalculadora() {

    document.getElementById("calculadora").scrollIntoView({
        behavior: "smooth"
    });

}