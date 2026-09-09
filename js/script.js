// Sliders
const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");

// Campos numéricos
const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

// Color Picker
const colorPicker = document.getElementById("colorPicker");

// Recuadro de color
const colorBox = document.getElementById("colorBox");

// Textos
const rgbCode = document.getElementById("rgbCode");
const hexCode = document.getElementById("hexCode");


// Convierte decimal a hexadecimal
function convertirHex(valor) {

    let hexadecimal = parseInt(valor).toString(16);

    if (hexadecimal.length === 1) {
        hexadecimal = "0" + hexadecimal;
    }

    return hexadecimal;
}


// Valida que el valor esté entre 0 y 255
function validarValor(valor) {

    valor = parseInt(valor);

    if (isNaN(valor)) {
        return 0;
    }

    if (valor < 0) {
        return 0;
    }

    if (valor > 255) {
        return 255;
    }

    return valor;
}


// Actualizar todo usando los valores RGB
function actualizarColor() {

    const rojo = validarValor(redInput.value);
    const verde = validarValor(greenInput.value);
    const azul = validarValor(blueInput.value);


    // Sincronizar sliders
    redSlider.value = rojo;
    greenSlider.value = verde;
    blueSlider.value = azul;


    // Crear RGB
    const rgb = `rgb(${rojo}, ${verde}, ${azul})`;

    colorBox.style.backgroundColor = rgb;

    rgbCode.textContent = rgb;


    // Crear hexadecimal
    const hexadecimal =
        "#" +
        convertirHex(rojo) +
        convertirHex(verde) +
        convertirHex(azul);


    // Mostrar hexadecimal
    hexCode.textContent = hexadecimal.toUpperCase();


    // Sincronizar Color Picker
    colorPicker.value = hexadecimal;
}


// Convertir hexadecimal a RGB
function hexadecimalARGB(hexadecimal) {

    // Quitar el #
    hexadecimal = hexadecimal.replace("#", "");

    const rojo = parseInt(hexadecimal.substring(0, 2), 16);

    const verde = parseInt(hexadecimal.substring(2, 4), 16);

    const azul = parseInt(hexadecimal.substring(4, 6), 16);


    return {
        rojo: rojo,
        verde: verde,
        azul: azul
    };
}


// Cuando movemos slider ROJO
redSlider.addEventListener("input", function () {

    redInput.value = redSlider.value;

    actualizarColor();
});


// Cuando movemos slider VERDE
greenSlider.addEventListener("input", function () {

    greenInput.value = greenSlider.value;

    actualizarColor();
});


// Cuando movemos slider AZUL
blueSlider.addEventListener("input", function () {

    blueInput.value = blueSlider.value;

    actualizarColor();
});


// Cuando escribimos valores RGB
redInput.addEventListener("input", actualizarColor);

greenInput.addEventListener("input", actualizarColor);

blueInput.addEventListener("input", actualizarColor);


// Cuando seleccionamos un color con el Color Picker
colorPicker.addEventListener("input", function () {

    const colorSeleccionado = colorPicker.value;

    const rgb = hexadecimalARGB(colorSeleccionado);


    // Actualizar campos numéricos
    redInput.value = rgb.rojo;

    greenInput.value = rgb.verde;

    blueInput.value = rgb.azul;


    // Actualizar sliders
    redSlider.value = rgb.rojo;

    greenSlider.value = rgb.verde;

    blueSlider.value = rgb.azul;


    // Actualizar cuadro
    colorBox.style.backgroundColor = colorSeleccionado;


    // Mostrar RGB
    rgbCode.textContent =
        `rgb(${rgb.rojo}, ${rgb.verde}, ${rgb.azul})`;


    // Mostrar hexadecimal
    hexCode.textContent =
        colorSeleccionado.toUpperCase();
});


// Color inicial
actualizarColor();