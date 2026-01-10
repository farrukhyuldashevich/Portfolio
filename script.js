function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  document.querySelectorAll('.work-slide-card').forEach(card => {
    const slides = card.querySelectorAll('.work-slide');
    let index = 0;
  
    const showSlide = (i) => {
      slides.forEach(s => s.classList.remove('active'));
      slides[i].classList.add('active');
    };
  
    card.querySelector('.next').addEventListener('click', () => {
      index = (index + 1) % slides.length;
      showSlide(index);
    });
  
    card.querySelector('.prev').addEventListener('click', () => {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    });
  
    showSlide(index);
  });
  