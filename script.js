const slides = document.querySelectorAll(".slider");

let counter = 0;
slides.forEach(
    (slider,index)=>{
        slider.style.left=`${index*100}%`
    }
)


const goPrev=()=>{
    counter--;
    slideImg();
}

const goNext=()=>{
    counter++;
    slideImg();
}

const slideImg=()=>{
    slides.forEach(
        (slider)=>{
            slider.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}