//Récupération de tous les articles
const panels = document.querySelectorAll('article');

//Fonction ajouter/supprimer une classe
function toggleOpen()
{
	this.classList.toggle('open');
}


//Ajout/Suppression si l'addEventListener renvoit une propriété contenant le mot "flex"
function toggleActive(event)
{
	// console.log(event.propertyName);
	if (event.propertyName.includes('flex')) {
		this.classList.toggle('open-active');		
	}
}

//Ecoute de chaque élément au click et à la fin de la transition.
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));