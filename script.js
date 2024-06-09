let slideIndex = {
  VampSlider: 1,
  MemoriaSlider: 1,
  HeritageSlider: 1
};

showSlides('VampSlider', slideIndex['VampSlider']);
showSlides('MemoriaSlider', slideIndex['MemoriaSlider']);
showSlides('HeritageSlider', slideIndex['HeritageSlider']);

function plusSlides(n, sliderId) {
  showSlides(sliderId, slideIndex[sliderId] += n);
}

function currentSlide(n, sliderId) {
  showSlides(sliderId, slideIndex[sliderId] = n);
}

function showSlides(sliderId, n) {
  let i;
  let slides = document.getElementById(sliderId).getElementsByClassName("mySlides");
  let dots = document.getElementById(sliderId).getElementsByClassName("dot");
  
  if (n > slides.length) { slideIndex[sliderId] = 1; }
  if (n < 1) { slideIndex[sliderId] = slides.length; }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex[sliderId]-1].style.display = "block";
  dots[slideIndex[sliderId]-1].className += " active";
}
