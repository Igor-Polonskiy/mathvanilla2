(() => {
    const reloadTaskBtn = document.querySelector('.task15_reloadTask')
    const checkingTaskBtn = document.querySelector('.task15_checkingTask')
    const checkTask = document.querySelector('.task15_checkTask')
    const chek_answerTxt = document.querySelector('.task15_chek_answer')
    const imgsWrapper = document.querySelector('.task15_imgwrapper')
    const audioList = document.querySelectorAll('.task15_audio')


    let pictures = [{
            id: 1,
            data: true,
            text: 'Арбуз тяжелее дыни.'
        },
        {
            id: 2,
            data: false,
            text: 'Арбуз легче дыни.'

        },
        {
            id: 3,
            data: false,
            text: 'Дыня тяжелее арбуза.'
        },
        {
            id: 4,
            data: true,
            text: 'Дыня легче арбуза.'
        }
    ]


    function fillField() {
        pictures.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task15_img')
            answer.innerHTML = item.text
            answer.setAttribute('data-number', item.data)
            imgsWrapper.append(answer)

        })
    }

    fillField()

    imgsWrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('task15_img')) {
            e.target.classList.toggle('task15_active')
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        imgsWrapper.innerHTML = ''
        fillField()

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let imgs = document.querySelectorAll('.task15_active')
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