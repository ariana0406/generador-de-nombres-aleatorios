const maleNames = ['Alejandro', 'Carlos', 'Diego', 'Fernando', 'Gabriel', 'Hugo', 'Iván', 'Jorge', 'Luis', 'Manuel', 'Nicolás', 'Oscar', 'Pablo', 'Ricardo', 'Sergio', 'Tomás', 'Andrés', 'Bruno', 'César', 'Daniel', 'Eduardo', 'Francisco', 'Gonzalo', 'Héctor', 'Miguel', 'Rafael', 'Antonio', 'José', 'Juan', 'Pedro', 'Raúl', 'Víctor'];
const femaleNames = [ 'Ana', 'Beatriz', 'Carmen', 'Diana', 'Elena', 'Fernanda', 'Gabriela', 'Helena', 'Isabel', 'Julia', 'Laura', 'María', 'Natalia', 'Olivia', 'Paula', 'Rosa', 'Sofía', 'Teresa', 'Valentina', 'Andrea', 'Camila', 'Daniela', 'Esperanza', 'Florencia', 'Lucía', 'Patricia', 'Alejandra', 'Cristina', 'Mónica', 'Sandra', 'Verónica', 'Silvia'];
const generalNames = [...maleNames, ...femaleNames]
const lastNames = ['García', 'González', 'López', 'Martínez', 'Rodríguez', 'Pérez', 'Sánchez', 'Ramírez', 'Cruz', 'Flores', 'Morales', 'Murphy', 'Rivera', 'Ramos', 'Castro', 'Jiménez', 'Torres', 'Reyes', 'Díaz', 'Moreno', 'Muñoz', 'Álvarez', 'Romero', 'Navarro', 'Ruiz', 'Hernández', 'Herrera', 'Mendoza', 'Vargas', 'Castillo', 'Guzmán', 'Aguilar', 'Delgado', 'Medina', 'Vega', 'León', 'Ortega', 'Guerrero', 'Núñez', 'Campos', 'Serrano', 'Contreras', 'Suárez', 'Mendez', 'Domínguez', 'Carrillo', 'Vázquez', 'Cortés'];

let spanGeneratedName = document.getElementById("generated-name");

const manButton = document.getElementById("man-button");
const womanButton = document.getElementById("woman-button");
const generalButton = document.getElementById("general-button");

window.addEventListener("load", displayGeneralName)
manButton.addEventListener("click", displayMaleName);
womanButton.addEventListener("click", displayFemaleName);
generalButton.addEventListener("click", displayGeneralName);

function selectRandomElement(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index]
}

function generateRandomFullName(genderNames) {
    const name = selectRandomElement(genderNames);
    const firstLastName = selectRandomElement(lastNames);
    const secondLastName = selectRandomElement(lastNames);
    while (firstLastName === secondLastName) {
        secondLastName = selectRandomElement(lastNames);
    }
    return name + " " + firstLastName + " " + secondLastName
}

function displayMaleName() {
    spanGeneratedName.innerHTML = generateRandomFullName(maleNames);
}

function displayFemaleName() {
    spanGeneratedName.innerHTML = generateRandomFullName(femaleNames);
}

function displayGeneralName() {
    spanGeneratedName.innerHTML = generateRandomFullName(generalNames);
}