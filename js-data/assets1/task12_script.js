(() => {
    const audio = document.querySelectorAll('.task12_audio')
    const task12_prev = document.querySelector('.task12_prev')
    const task12_next = document.querySelector('.task12_next')
    const task12_slide = document.querySelector('.task12_img')
    const slide_caption = document.querySelector('.task12_slide_caption')
    const numberOfimgs = document.querySelector('.task12_count2')
    const count = document.querySelector('.task12_count1')
    const task12_begin = document.querySelector('.task12_begin')

    let currentSlide = 1
    let sound = false

    const pictures = [{
            id: 1,
            src: 'Images_2/assets1/task12-1.png',
            text: 'Как узнать, не считая, чего больше: ежей или яблок?'
        },
        {
            id: 2,
            src: 'Images_2/assets1/task12-2.png',
            text: 'Нужно создать пары.'
        },
        {
            id: 3,
            src: 'Images_2/assets1/task12-3.png',
            text: 'Не всем ежам хватило по яблоку. Следовательно, ежей больше, чем яблок, а яблок меньше, чем ежей.'
        },
        {
            id: 4,
            src: 'Images_2/assets1/task12-4.png',
            text: 'С яблони упало ещё несколько яблок. Что теперь можно сказать о количестве ежей и количестве яблок?'
        },
        {
            id: 5,
            src: 'Images_2/assets1/task12-5.png',
            text: 'Создадим пары. Дадим каждому ёжику по одному яблоку.'
        },
        {
            id: 6,
            src: 'Images_2/assets1/task12-6.png',
            text: 'Теперь у каждого ёжика по одному яблоку. Нет лишних ежей или яблок. Следовательно, ежей столько же, сколько яблок, а яблок столько же, сколько ежей.'
        }
    ]

    task12_begin.addEventListener('click', (e) => {
        if (e.target.classList.contains('task12_start1')) {
            sound = true
            audio[currentSlide - 1].play()
            task12_begin.style.display = 'none'
        } else if (e.target.classList.contains('task12_start2')) {
            task12_begin.style.display = 'none'
        }



    })

    count.innerText = currentSlide
    numberOfimgs.innerText = pictures.length
    task12_prev.style.opacity = 0

    slide_caption.innerText = pictures[0].text
    let element = document.createElement('img')
    element.src = pictures[0].src
    task12_slide.append(element)

    task12_prev.addEventListener('click', () => {
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
            task12_next.style.opacity = 1
        }
        if (currentSlide === 1) {
            task12_prev.style.opacity = 0
        }


    })

    task12_next.addEventListener('click', () => {
        if (currentSlide < pictures.length) {
            task12_prev.style.opacity = 1
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
            task12_next.style.opacity = 0
        }

    })
})()