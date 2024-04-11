let hodiny = 7
let hodinovka = 320
let dny = 21

let mesicniPrijem = hodiny * hodinovka * dny

document.body.innerHTML = "Měsíční příjem = " + mesicniPrijem
let zakladDane = mesicniPrijem*0.4

document.body.innerHTML += "<p>Výše zaplacené daně = " + Math.floor(zakladDane*0.15)+"</p>"


