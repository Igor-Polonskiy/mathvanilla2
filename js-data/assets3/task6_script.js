(() => {
    const reloadTaskBtn = document.querySelector('.task6_reloadTask')
    const checkingTaskBtn = document.querySelector('.task6_checkingTask')
    const checkTask = document.querySelector('.task6_checkTask')
    const chek_answerTxt = document.querySelector('.task6_chek_answer')
    const imgsWrapper = document.querySelector('.task6_imgwrapper')
    const audioList = document.querySelectorAll('.task6_audio')


    let pictures = [{
            id: 1,
            data: true,
            text: 'Круг расположен между треугольником и прямоугольником.'
        },
        {
            id: 2,
            data: false,
            text: 'Все фигуры — прямоугольники.'

        },
        {
            id: 3,
            data: true,
            text: 'Треугольник расположен слева от круга.'
        }
    ]


    function fillField() {
        pictures.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task6_img')
            answer.innerHTML = item.text
            let audio = document.createElement('span');
            audio.innerHTML = '&#128265;'
            audio.addEventListener('click', (e) => {
                audioList[item.id - 1].play()
            })
            answer.append(audio)
            answer.setAttribute('data-number', item.data)
            imgsWrapper.append(answer)

        })
    }

    fillField()

    imgsWrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('task6_img')) {
            e.target.classList.toggle('task6_active')
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        imgsWrapper.innerHTML = ''
        fillField()

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let imgs = document.querySelectorAll('.task6_active')
        let winVar = 0
        if (imgs.length) {
            imgs.forEach(item => {
                if (item.getAttribute('data-number') === 'true') {
                    winVar++
                } else winVar--
            })
        }

        if (winVar === 2) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()