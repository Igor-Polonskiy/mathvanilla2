(() => {
    const audio = document.querySelectorAll('.task5_audio')
    const task5_prev = document.querySelector('.task5_prev')
    const task5_next = document.querySelector('.task5_next')
    const task5_slide = document.querySelector('.task5_img')
    const slide_caption = document.querySelector('.task5_slide_caption')
    const numberOfimgs = document.querySelector('.task5_count2')
    const count = document.querySelector('.task5_count1')
    const task5_begin = document.querySelector('.task5_begin')

    let currentSlide = 1
    let sound = false

    const pictures = [{
            id: 1,
            src: 'Images_2/assets2/task5_1.png',
            text: 'Катя поставила на наборное полотно 5 ёлочек и столько же ёжиков.'
        },
        {
            id: 2,
            src: 'Images_2/assets2/task5_2.png',
            text: 'Затем убрала 2 ёжиков. Ёлочек стало на 2 больше.'
        },
        {
            id: 3,
            src: 'Images_2/assets2/task5_3.png',
            text: 'Дима ответил на этот вопрос по-другому.'
        },
        {
            id: 4,
            src: 'Images_2/assets2/task5_4.png',
            text: 'Он добавил две ёлочки. Теперь ёлочек на 2 больше.'
        },
        {
            id: 5,
            src: 'Images_2/assets2/task5_5.png',
            text: 'Оба решения оказались верными.'
        }
    ]

    task5_begin.addEventListener('click', (e) => {
        if (e.target.classList.contains('task5_start1')) {
            sound = true
            audio[currentSlide - 1].play()
            task5_begin.style.display = 'none'
        } else if (e.target.classList.contains('task5_start2')) {
            task5_begin.style.display = 'none'
        }



    })

    count.innerText = currentSlide
    numberOfimgs.innerText = pictures.length
    task5_prev.style.opacity = 0

    slide_caption.innerText = pictures[0].text
    let element = document.createElement('img')
    element.src = pictures[0].src
    task5_slide.append(element)

    task5_prev.addEventListener('click', () => {
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
            task5_next.style.opacity = 1
        }
        if (currentSlide === 1) {
            task5_prev.style.opacity = 0
        }


    })

    task5_next.addEventListener('click', () => {
        if (currentSlide < pictures.length) {
            task5_prev.style.opacity = 1
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
            task5_next.style.opacity = 0
        }

    })
})()