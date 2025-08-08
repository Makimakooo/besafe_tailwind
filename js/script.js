let currentSlide = 0;
let currentImages = [];

function openModal(images) {
  currentImages = images;
  currentSlide = 0;

  const modal = document.getElementById('carouselModal');
  const inner = document.getElementById('carouselInner');

  // Очищаем старые слайды
  inner.innerHTML = '';

  // Создаем новые слайды
  images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'w-full sm:w-1/3 object-cover';
    inner.appendChild(img);
  });

  modal.classList.remove('hidden');
  showSlide(currentSlide);
}

function closeModal() {
  document.getElementById('carouselModal').classList.add('hidden');
}

function showSlide(index) {
  const carouselInner = document.getElementById('carouselInner');
  const slideCount = carouselInner.children.length;

  if (slideCount === 0) return;

  const slideWidth = carouselInner.clientWidth / slideCount;
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