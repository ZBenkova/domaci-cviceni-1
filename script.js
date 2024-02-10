const stupneFahrenheit = Number(prompt("Zadej teplotu ve stupních Fahrenheita:"))

let stupneCelsia = ((stupneFahrenheit - 32) * 5) / 9 

document.body.innerHTML = ("Ekvivalent ve stupních Celsia:" + stupneCelsia + "°C")