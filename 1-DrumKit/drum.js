function playSound(event)
{
	//récupération de l'audio dont data-key === keyCode
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	//récupération div donnt data-key === keyCode
	const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

	//si aucun data-key n'est trouvé, arrêter la fonction
	if(!audio) return;
	//remettre la lecture du son à 0 (cas des pressions rapide sur le clavier)
	audio.currentTime = 0; //rembobine le son
	//jouer le fichier audio
	audio.play();
	//animer le bouton pressé
	key.classList.add(`playing`);
}

function removeTrasition(event)
{
	//On ne s'occupe que de la propriété "transform"
	if(event.propertyName !== `transform`) return;
	//enlever la class sur la div concernée
	this.classList.remove(`playing`);
}

//On récupère toutes les boutons (div)
const allKeys = document.querySelectorAll(`div`);
//Pour chacune, on écoute si une transition se termine, se c'est le cas, on enlève la classe playing.
allKeys.forEach (key => key.addEventListener(`transitionend`, removeTrasition));


//ecoute si une touche est pressée et active la fonction playSound
window.addEventListener(`keydown`, playSound);