let left = 0

const slider = document.querySelector('.catalog-block')

const btnLeft = document.querySelector('.nav-forvard')

const btnRight = document.querySelector('.nav-back')

document.querySelector('.nav-forvard').addEventListener('click', function(){

    left -= 600
    if (left == -1800) {
        btnLeft.style.cursor = 'none'
        btnLeft.setAttribute('disabled', true)
    }

    if (left < 600) {
        btnRight.style.cursor = 'pointer'
        btnRight.removeAttribute('disabled', true)
    }

    slider.style.left = left+'px'
})

document.querySelector('.nav-back').addEventListener('click', function(){
    
    left += 600

    if (left == 600) {
        btnRight.style.cursor = 'none'
        btnRight.setAttribute('disabled', true)
    }

    if (left > -1600) {
        btnLeft.style.cursor = 'pointer'
        btnLeft.removeAttribute('disabled', true)
    }

    slider.style.left = left+'px'
})