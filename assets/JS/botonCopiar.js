const textoBoton = document.querySelector("#hboton");
const boton = document.querySelector("#boton")
boton.addEventListener("click", () => {
    navigator.clipboard.writeText("https://figueduff.github.io/argentina_programa")
        .then
        (() => {
            textoBoton.innerHTML = "Dirección web copiada al portapapeles";
            setTimeout(() => {
                textoBoton.innerHTML = "";
            }, 3000);
        });
});