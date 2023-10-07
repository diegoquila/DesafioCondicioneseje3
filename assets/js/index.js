function verificarPassword() {
    const select1 = document.querySelector("#select1").value;
    const select2 = document.querySelector("#select2").value;
    const select3 = document.querySelector("#select3").value;
    const resultado = document.querySelector("#resultado");

    if (select1 === "9" && select2 === "1" && select3 === "1") {
        resultado.innerHTML = "Password 1 correcto";
    } else if (select1 === "7" && select2 === "1" && select3 === "4") {
        resultado.innerHTML = "Password 2 correcto";
    } else {
        resultado.innerHTML = "Password incorrecto";
    }
}