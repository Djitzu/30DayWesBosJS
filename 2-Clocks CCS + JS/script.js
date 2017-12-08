const aiguilleSeconde = document.querySelector(`.secondes`);
const aiguilleMinutes = document.querySelector(`.minutes`);
const aiguilleHeures = document.querySelector(`.heures`);

function setDate()
{
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const heures = now.getHours();

	const secondsDegrees = ((seconds / 60) *360) + 90;
	const minutesDegrees = ((minutes / 60) *360) + 90;
	const heuresDegrees = ((heures / 12) *360) + 90;

	aiguilleSeconde.style.transform = `rotate(${secondsDegrees}deg)`;
	aiguilleMinutes.style.transform = `rotate(${minutesDegrees}deg)`;
	aiguilleHeures.style.transform = `rotate(${heuresDegrees}deg)`;

	if (secondsDegrees > 440)
	{
		aiguilleSeconde.style.transition = `none`;
	}
	
	if (minutesDegrees > 440)
	{
		aiguilleMinutes.style.transition = `none`;
	}

	if (aiguilleHeures > 440)
	{
		aiguilleMinutes.style.transition = `none`;
	}
}

setInterval(setDate, 1000);