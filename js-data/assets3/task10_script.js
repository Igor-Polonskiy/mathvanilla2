(() => {
    const answers = document.querySelector('.task10_answers')
    const reloadTaskBtn = document.querySelector('.task10_reloadTask')
    const checkingTaskBtn = document.querySelector('.task10_checkingTask')
    const checkTask = document.querySelector('.task10_checkTask')
    const chek_answerTxt = document.querySelector('.task10_chek_answer')

    const winVarTask10 = '2'

    let answersItems = null
    let finishAnswer = null

    const answersData = [{
            id: 1,
            src: 'Images_2/assets3/task10_1.png',

        },
        {
            id: 2,
            src: 'Images_2/assets3/task10_2.png',
        },
        {
            id: 3,
            src: 'Images_2/assets3/task10_3.png',
        },
        {
            id: 3,
            src: 'Images_2/assets3/task10_4.png',
        }
    ]

    insertAnswers(answersData)

    answers.addEventListener('click', (e) => {
        if (e.target.classList.contains('task10_answer')) {
            answersItems.forEach(item => {
                if (finishAnswer) {
                    finishAnswer.classList.remove('task10_answer_active')
                    finishAnswer.classList.remove('task10_green')
                    finishAnswer.classList.remove('task10_red')
                }
                item.classList.remove('task10_answer_active')
            })
            e.target.classList.add('task10_answer_active')
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
            finishAnswer.classList.remove('task10_answer_active')

            if (finishAnswer.getAttribute('data-id') === winVarTask10) {
                finishAnswer.classList.add('task10_green')
                chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
                checkTask.style.background = 'lightgreen'
            } else {
                finishAnswer.classList.add('task10_red')
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
            e.classList.add('task10_answer')
            answers.append(e)
        })
        answersItems = answers.querySelectorAll('.task10_answer')
    }

})();