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