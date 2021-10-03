const slide = document.querySelectorAll('.carousel-item');
const auto = true;
const intervalTime = 4000;
let slideInterval;

class Slide{
    static nextSlide(){
        const active = document.querySelector('.active');
        active.classList.remove('active');

        if(active.previousElementSibling){
            active.previousElementSibling.classList.add('active');
        }else{
            slide[slide.length - 1].classList.add('active');
        }
        setTimeout(() => active.classList.remove('active'));
    }

    static prevSlide(){
        const active = document.querySelector('.active');
        active.classList.remove('active');

        if(active.previousElementSibling){
            active.previousElementSibling.classList.add('active');
        }else{
            slide[slide.length - 1].classList.add('active');
        }
        setTimeout(() => active.classList.remove('active'));
    }
}

document.querySelector('.carousel-control-next').addEventListener('click', () => {
    Slide.nextSlide();
});

document.querySelector('.carousel-control-prev').addEventListener('click', () => {
    Slide.prevSlide();
});

if(auto){
    slideInterval = setInterval(Slide.nextSlide, intervalTime);
}

const fader = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0,
}

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

fader.forEach(fade => {
  appearOnScroll.observe(fade);
})