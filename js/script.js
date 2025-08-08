 let currentSlide = 0;

  function openModal(images) {
    const modal = document.getElementById('carouselModal');
    const inner = document.getElementById('carouselInner');
    currentSlide = 0;

    inner.innerHTML = ''; // Очистка

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
    const slide = carouselInner.children[0];
    if (!slide) return;

    const slideWidth = slide.offsetWidth;
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