(() => {
    const audio = document.querySelectorAll('.task13_audio')
    const task13_prev = document.querySelector('.task13_prev')
    const task13_next = document.querySelector('.task13_next')
    const task13_slide = document.querySelector('.task13_img')
    const slide_caption = document.querySelector('.task13_slide_caption')
    const numberOfimgs = document.querySelector('.task13_count2')
    const count = document.querySelector('.task13_count1')
    const task13_begin = document.querySelector('.task13_begin')

    let currentSlide = 1
    let sound = false

    const pictures = [{
            id: 1,
            src: 'Images_2/assets1/task13-1.png',
            text: 'Как нарисовать столько же кругов, сколько квадратов на рисунке, не пересчитывая эти квадраты?'
        },
        {
            id: 2,
            src: 'Images_2/assets1/task13-2.png',
            text: 'Можно действовать так: рисуем один круг, зачёркиваем один квадрат...'
        },
        {
            id: 3,
            src: 'Images_2/assets1/task13-3.png',
            text: 'Рисуем один круг, зачёркиваем один квадрат...'
        },
        {
            id: 4,
            src: 'Images_2/assets1/task13-4.png',
            text: 'Рисуем один круг, зачёркиваем один квадрат...'
        },
        {
            id: 5,
            src: 'Images_2/assets1/task13-5.png',
            text: 'И так далее, пока все квадраты не окажутся зачёркнутыми.'
        }
    ]

    task13_begin.addEventListener('click', (e) => {
        if (e.target.classList.contains('task13_start1')) {
            sound = true
            audio[currentSlide - 1].play()
            task13_begin.style.display = 'none'
        } else if (e.target.classList.contains('task13_start2')) {
            task13_begin.style.display = 'none'
        }



    })

    count.innerText = currentSlide
    numberOfimgs.innerText = pictures.length
    task13_prev.style.opacity = 0

    slide_caption.innerText = pictures[0].text
    let element = document.createElement('img')
    element.src = pictures[0].src
    task13_slide.append(element)

    task13_prev.addEventListener('click', () => {
        if (currentSlide > 1) {
            currentSlide--
            if (sound) {
                audio[currentSlide].pause()
                audio[currentSlide].currentTime = 0
                audio[currentSlide - 1].play()
            }
            slide_caption.innerText = pictures[currentSlide - 1].text
            element.src = pictures[currentSlide - 1].src
            count.innerText = currentSlide
            task13_next.style.opacity = 1
        }
        if (currentSlide === 1) {
            task13_prev.style.opacity = 0
        }


    })

    task13_next.addEventListener('click', () => {
        if (currentSlide < pictures.length) {
            task13_prev.style.opacity = 1
            currentSlide++
            if (sound) {
                audio[currentSlide - 2].pause()
                audio[currentSlide - 2].currentTime = 0
                audio[currentSlide - 1].play()
            }
            slide_caption.innerText = pictures[currentSlide - 1].text
            element.src = pictures[currentSlide - 1].src
            count.innerText = currentSlide
        }
        if (currentSlide === pictures.length) {
            task13_next.style.opacity = 0
        }

    })
})()