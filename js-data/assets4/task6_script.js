(() => {
    const answers = document.querySelector('.task6_answers')
    const reloadTaskBtn = document.querySelector('.task6_reloadTask')
    const checkingTaskBtn = document.querySelector('.task6_checkingTask')
    const checkTask = document.querySelector('.task6_checkTask')
    const chek_answerTxt = document.querySelector('.task6_chek_answer')

    const winVarTask6 = '3'

    let answersItems = null
    let finishAnswer = null

    const answersData = [{
            id: 1,
            src: 'Images_2/assets4/task6_1.png',

        },
        {
            id: 2,
            src: 'Images_2/assets4/task6_2.png',
        },
        {
            id: 3,
            src: 'Images_2/assets4/task6_3.png',
        },
        {
            id: 4,
            src: 'Images_2/assets4/task6_4.png',
        }
    ]

    insertAnswers(answersData)

    answers.addEventListener('click', (e) => {
        if (e.target.classList.contains('task6_answer')) {
            answersItems.forEach(item => {
                if (finishAnswer) {
                    finishAnswer.classList.remove('task6_answer_active')
                    finishAnswer.classList.remove('task6_green')
                    finishAnswer.classList.remove('task6_red')
                }
                item.classList.remove('task6_answer_active')
            })
            e.target.classList.add('task6_answer_active')
            finishAnswer = e.target
            chek_answerTxt.innerHTML = ''
            checkTask.style.background = ''
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        answers.innerHTML = ''
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
        insertAnswers(answersData)
        finishAnswer = null
    })

    checkingTaskBtn.addEventListener('click', () => {
        if (finishAnswer) {
            finishAnswer.classList.remove('task6_answer_active')

            if (finishAnswer.getAttribute('data-id') === winVarTask6) {
                finishAnswer.classList.add('task6_green')
                chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
                checkTask.style.background = 'lightgreen'
            } else {
                finishAnswer.classList.add('task6_red')
                chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
                checkTask.style.background = 'lightpink'
            }
        }
    })

    function shuffleArr(arr) {
        return arr.sort(() => Math.random() - 0.5)
    }

    function insertAnswers(arr) {
        shuffleArr(arr)
        arr.forEach(item => {
            let e = document.createElement('div')
            e.style.backgroundImage = `url(${item.src})`
            e.setAttribute('data-id', item.id)
            e.classList.add('task6_answer')
            answers.append(e)
        })
        answersItems = answers.querySelectorAll('.task6_answer')
    }

})();