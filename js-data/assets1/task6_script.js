(() => {
    const answers = document.querySelector('.task6_answers')
    const lettersField = document.querySelector('.task6_letters')
    const line1 = document.querySelector('.task6_line1')
    const line2 = document.querySelector('.task6_line2')
    const reloadTaskBtn = document.querySelector('.task6_reloadTask')
    const checkingTaskBtn = document.querySelector('.task6_checkingTask')
    const checkTask = document.querySelector('.task6_checkTask')
    const chek_answerTxt = document.querySelector('.task6_chek_answer')

    const winVarTask1 = '7'

    let answersItems = null
    let finishAnswer = null

    const letters1 = [{
            id: 1,
            letter: 'Т',
            data: true
        },
        {
            id: 2,
            letter: 'Е',
            data: true
        },
        {
            id: 3,
            letter: 'Т',
            data: true
        },
        {
            id: 4,
            letter: "Р",
            data: false
        },
        {
            id: 5,
            letter: "А",
            data: true
        },
        {
            id: 6,
            letter: "Д",
            data: false
        },
        {
            id: 7,
            letter: "Ь",
            data: false
        }

    ]
    const letters2 = [{
            id: 1,
            letter: 'Г',
            data: false
        },
        {
            id: 2,
            letter: 'А',
            data: true
        },
        {
            id: 3,
            letter: 'З',
            data: false
        },
        {
            id: 4,
            letter: "Е",
            data: true
        },
        {
            id: 5,
            letter: "Т",
            data: true
        },
        {
            id: 6,
            letter: "А",
            data: true
        }

    ]



    letters1.forEach(item => {
        let letter1 = document.createElement('div')
        letter1.innerText = item.letter
        letter1.setAttribute('data', item.data)
        letter1.classList.add('task6_letter')
        line1.append(letter1)
    })
    letters2.forEach(item => {
        let letter1 = document.createElement('div')
        letter1.innerText = item.letter
        letter1.setAttribute('data', item.data)
        letter1.classList.add('task6_letter')
        line2.append(letter1)
    })

    lettersField.addEventListener('click', (e) => {
        if (e.target.classList.contains('task6_letter')) {
            e.target.classList.toggle('task6_letter_active')
        }
    })




    reloadTaskBtn.addEventListener('click', () => {
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
        let letters = document.querySelectorAll('.task6_letter_active')
        letters.forEach(item => {
            item.classList.remove('task6_letter_active')
        })
    })

    checkingTaskBtn.addEventListener('click', () => {
        let winVar = 0

        line1.childNodes.forEach((item) => {
            if (item.classList.contains('task6_letter_active')) {
                if (item.getAttribute('data') === 'true') {
                    winVar++
                } else winVar--
            }
        })

        line2.childNodes.forEach((item, index) => {
            if (item.classList.contains('task6_letter_active')) {
                if (item.getAttribute('data') === 'true') {
                    winVar++
                } else winVar--
            }
        })


        if (winVar === 8) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })





})();