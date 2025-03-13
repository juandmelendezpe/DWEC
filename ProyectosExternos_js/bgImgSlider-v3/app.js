const slides = document.querySelectorAll('.slide'); // recoge todos los elementos con la clase slide
const nextBtn = document.getElementById('next'); // recoge el elemento con el id next
const prevBtn = document.getElementById('prev'); // recoge el elemento con el id prev

const changeSlide = type => {
  const currentSlide = document.querySelector('.current');
  currentSlide.classList.remove('current');
  switch (type) {
    case 'next':
      if (currentSlide.nextElementSibling) {
        currentSlide.nextElementSibling.classList.add('current');
      } else {
        slides[0].classList.add('current'); // si no hay siguiente, se añade la primera
      }
      break;
    case 'previous':
      if (currentSlide.previousElementSibling) {
        currentSlide.previousElementSibling.classList.add('current');
      } else {
        slides[slides.length - 1].classList.add('current'); // si no hay anterior, se añade la última
      }
      break;
    default:
      break;
  }
  setTimeout(() => currentSlide.classList.remove('current'), 200); // se elimina la clase current del slide actual después de 200ms
};

nextBtn.addEventListener('click', () => changeSlide('next')); // añade un evento click al botón next
prevBtn.addEventListener('click', () => changeSlide('previous')); // añade un evento click al botón prev
