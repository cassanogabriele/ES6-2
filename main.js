const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// Définir l'opacité de la première image 
imgs[0].style.opacity;

imgs.forEach(img =>img.addEventListener('click', imgClick));

function imgClick(e){
	// Reste de l'opacité 
	imgs.forEach(img => (img.style.opacity = 1));
	
	// Change l'image courant avec le src de l'image cliquée.
	current.src = e.target.src;
	
	// Ajout d'une classe fadeIn
	current.classList.add('fade-in');
	
	// Enlever le fade 
	setTimeout(() => current.classList.remove('fade-in'), 500),
	
	// Change l'opacité à l'opacité de var 
	e.target.style.opacity = opacity;
}