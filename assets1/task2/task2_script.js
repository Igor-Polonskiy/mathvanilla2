(() => {
    const answers = document.querySelector('.task2_answers')
    const reloadTaskBtn = document.querySelector('.task2_reloadTask')
    const checkingTaskBtn = document.querySelector('.task2_checkingTask')
    const checkTask = document.querySelector('.task2_checkTask')
    const chek_answerTxt = document.querySelector('.task2_chek_answer')

    const winVarTask2 = 'Маша'

    let answersItems = null
    let finishAnswer = null

    const answersData = [{
            id: 1,
            data: "Антон"
        },
        {
            id: 2,
            data: "Маша"
        },
        {
            id: 3,
            data: "Таня"
        },
        {
            id: 4,
            data: "Володя"
        }
    ]

    answers.addEventListener('click', (e) => {
        if (e.target.classList.contains('task2_answer')) {
            answersItems.forEach(item => {
                if (finishAnswer) {
                    finishAnswer.classList.remove('task2_answer_active')
                    finishAnswer.classList.remove('task2_green')
                    finishAnswer.classList.remove('task2_red')
                }
                item.classList.remove('task2_answer_active')
            })
            e.target.classList.add('task2_answer_active')
            finishAnswer = e.target
            chek_answerTxt.innerHTML = ''
            checkTask.style.background = ''
            console.log(finishAnswer)

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
        finishAnswer.classList.remove('task2_answer_active')
        if (finishAnswer.innerText === winVarTask2) {
            finishAnswer.classList.add('task2_green')
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            if (finishAnswer) {
                finishAnswer.classList.add('task2_red')
            }
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

    function shuffleArr(arr) {
        return arr.sort(() => Math.random() - 0.5)
    }

    function insertAnswers(arr) {
        shuffleArr(arr)
        arr.forEach(item => {
            let e = document.createElement('div')
            e.innerText = `${item.data}`
            e.classList.add('task2_answer')
            answers.append(e)
        })
        answersItems = answers.querySelectorAll('.task2_answer')
    }

    insertAnswers(answersData)
})();