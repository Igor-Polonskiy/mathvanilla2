(() => {
    const reloadTaskBtn = document.querySelector('.task3_reloadTask')
    const checkingTaskBtn = document.querySelector('.task3_checkingTask')
    const checkTask = document.querySelector('.task3_checkTask')
    const chek_answerTxt = document.querySelector('.task3_chek_answer')
    const imgsWrapper1 = document.querySelector('.task3_imgwrapper1')
    const imgsWrapper2 = document.querySelector('.task3_imgwrapper2')
    const imgsWrapper3 = document.querySelector('.task3_imgwrapper3')
    const task3 = document.querySelector('.task3_wrapper')

    let pictures1 = [{
            id: 1,
            src: 'Images_2/assets4/task3_1.png',
            data: true
        },
        {
            id: 2,
            src: 'Images_2/assets4/task3_2.png',
            data: true
        },
        {
            id: 3,
            src: 'Images_2/assets4/task3_3.png',
            data: false
        },
        {
            id: 4,
            src: 'Images_2/assets4/task3_4.png',
            data: true
        }
    ]
    let pictures2 = [{
            id: 5,
            src: 'Images_2/assets4/task3_5.png',
            data: true
        },
        {
            id: 6,
            src: 'Images_2/assets4/task3_6.png',
            data: true
        },
        {
            id: 7,
            src: 'Images_2/assets4/task3_7.png',
            data: true
        },
        {
            id: 8,
            src: 'Images_2/assets4/task3_8.png',
            data: false
        }, ,
        {
            id: 9,
            src: 'Images_2/assets4/task3_9.png',
            data: false
        },
    ]

    let pictures3 = [{
            id: 1,
            src: 'Images_2/assets4/task3_10.png',
            data: true
        },
        {
            id: 2,
            src: 'Images_2/assets4/task3_11.png',
            data: true
        },
        {
            id: 3,
            src: 'Images_2/assets4/task3_12.png',
            data: true
        },
        {
            id: 4,
            src: 'Images_2/assets4/task3_13.png',
            data: true
        },
        {
            id: 5,
            src: 'Images_2/assets4/task3_14.png',
            data: false
        }
    ]


    let count = 0

    function fillField() {
        pictures1.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task3_img')
            answer.style.backgroundImage = `url(${item.src})`
            answer.setAttribute('data-number', item.data)
            imgsWrapper1.append(answer)
        })
        pictures2.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task3_img')
            answer.style.backgroundImage = `url(${item.src})`
            answer.setAttribute('data-number', item.data)
            imgsWrapper2.append(answer)
        })
        pictures3.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task3_img')
            answer.style.backgroundImage = `url(${item.src})`
            answer.setAttribute('data-number', item.data)
            imgsWrapper3.append(answer)
        })
    }

    fillField()

    task3.addEventListener('click', (e) => {
        if (e.target.classList.contains('task3_img')) {
            e.target.classList.toggle('task3_active')
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        imgsWrapper1.innerHTML = ''
        imgsWrapper2.innerHTML = ''
        imgsWrapper3.innerHTML = ''
        fillField()

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let imgs = document.querySelectorAll('.task3_active')
        let winVar = 0
        imgs.forEach(item => {
            if (item.getAttribute('data-number') === 'false') {
                winVar++
            } else winVar--
        })

        if (winVar === 3) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()