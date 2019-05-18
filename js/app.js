// nav btn
document.querySelector('.navBtn').addEventListener('click', () => {
	document.querySelector('.nav').classList.toggle('nav--show');
});

// control the video
document.querySelector('.video__switch').addEventListener('click', () => {
	let btn = document.querySelector('.video__switch-btn');
	if (!btn.classList.contains('btnSlide')) {
		btn.classList.add('btnSlide');
		document.querySelector('.video__item').pause();
	} else {
		btn.classList.remove('btnSlide');
		document.querySelector('.video__item').play();
	}
});

//display modal
const links = document.querySelectorAll('.work-item__icon');

links.forEach(item => {
	item.addEventListener('click', event => {
		event.preventDefault();
		if (event.target.parentElement.classList.contains('work-item__icon')) {
			let id = event.target.parentElement.dataset.id;

			const modal = document.querySelector('.work-modal');
			const modalItem = document.querySelector('.work-modal__item');

			modal.classList.add('work-modal--show');
			modalItem.style.backgroundImage = `url(img/work-${id}.jpg)`;
		}
	});
});

// hide modal
document.querySelector('.work-modal__close').addEventListener('click', () => {
	document.querySelector('.work-modal').classList.remove('work-modal--show');
});
