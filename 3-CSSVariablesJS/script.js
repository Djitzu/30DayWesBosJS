
//Sélection de tous les inputs
const inputs = document.querySelectorAll('section input');

function upDate()
{
	//récupération de l'unité de mesure grâce à notre data-sizing.
	const suffixe = this.dataset.sizing || '';
	//Redéfinition des variables dans la balise html. Elles s'appliqueront partout selon le principe de cascade.
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffixe);
	//console.log(this.name);

}

//Ecoutes des inputs au changement et au passage de la souris.
//Combinaison forEach + Function fléchées ES6 function input() {input.addEvent...}
inputs.forEach(input => input.addEventListener('change', upDate));
inputs.forEach(input => input.addEventListener('mousemove', upDate));