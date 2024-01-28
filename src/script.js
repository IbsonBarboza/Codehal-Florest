const nextBtn = document.getElementById('next-btn')
const prevBtn = document.getElementById('prev-btn')
const slide = document.querySelectorAll('.slides')
const numberOfSlides = slide.length
let slideNumber = 0

nextBtn.onclick = () => {
    slide.forEach((slide) => {
        slide.classList.remove('active')
    })
    
    slideNumber++

    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0
    }

    slide[slideNumber].classList.add('active')
}

prevBtn.onclick = () => {
    slide.forEach((slide) => {
        slide.classList.remove('active')
    })
    
    slideNumber--

    if (slideNumber < 0 ) {
        slideNumber = numberOfSlides - 1
    }

    slide[slideNumber].classList.add('active')
}