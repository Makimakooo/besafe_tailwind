let currentSlide = 0;

function openModal(images) {
  const modal = document.getElementById('carouselModal');
  const inner = document.getElementById('carouselInner');
  currentSlide = 0;

  // Очистка
  inner.innerHTML = '';

  // Добавляем слайды
  images.forEach(src => {
    const slide = document.createElement('div');
    slide.className = 'w-full flex justify-center items-center flex-shrink-0';
    slide.style.height = '80vh';

    const img = document.createElement('img');
    img.src = src;
    img.className = 'max-w-[90%] max-h-[90%] object-contain';

    slide.appendChild(img);
    inner.appendChild(slide);
  });

  modal.classList.remove('hidden');
  showSlide(currentSlide);
}

function closeModal() {
  document.getElementById('carouselModal').classList.add('hidden');
}

function showSlide(index) {
  const carouselInner = document.getElementById('carouselInner');
  const slideWidth = carouselInner.clientWidth;
  carouselInner.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
  const carouselInner = document.getElementById('carouselInner');
  const maxSlides = carouselInner.children.length;
  if (currentSlide < maxSlides - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
}

let startX = 0;
let isSwiping = false;

const carouselInner = document.getElementById('carouselInner');

carouselInner.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isSwiping = true;
});

carouselInner.addEventListener('touchmove', (e) => {
  if (!isSwiping) return;
  const currentX = e.touches[0].clientX;
  const diffX = startX - currentX;

  // если свайп больше 50px — меняем слайд
  if (Math.abs(diffX) > 50) {
    if (diffX > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
    isSwiping = false; // блокируем дальнейшие свайпы до конца тача
  }
});

carouselInner.addEventListener('touchend', () => {
  isSwiping = false;
});