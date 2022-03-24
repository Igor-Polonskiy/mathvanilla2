(() => {
    const answers = document.querySelector('.task17_answers')
    const reloadTaskBtn = document.querySelector('.task17_reloadTask')
    const checkingTaskBtn = document.querySelector('.task17_checkingTask')
    const checkTask = document.querySelector('.task17_checkTask')
    const chek_answerTxt = document.querySelector('.task17_chek_answer')

    const winVarTask17 = '1'

    let answersItems = null
    let finishAnswer = null

    const answersData = [{
            id: 1,
            src: '4',

        },
        {
            id: 2,
            src: '6',
        },
        {
            id: 3,
            src: '2',
        },
        {
            id: 4,
            src: '8',
        }
    ]

    insertAnswers(answersData)

    answers.addEventListener('click', (e) => {
        if (e.target.classList.contains('task17_answer')) {
            answersItems.forEach(item => {
                if (finishAnswer) {
                    finishAnswer.classList.remove('task17_answer_active')
                    finishAnswer.classList.remove('task17_green')
                    finishAnswer.classList.remove('task17_red')
                }
                item.classList.remove('task17_answer_active')
            })
            e.target.classList.add('task17_answer_active')
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
            finishAnswer.classList.remove('task17_answer_active')

            if (finishAnswer.getAttribute('data-id') === winVarTask17) {
                finishAnswer.classList.add('task17_green')
                chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
                checkTask.style.background = 'lightgreen'
            } else {
                finishAnswer.classList.add('task17_red')
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
            e.innerText = item.src
            e.setAttribute('data-id', item.id)
            e.classList.add('task17_answer')
            answers.append(e)
        })
        answersItems = answers.querySelectorAll('.task17_answer')
    }

})();