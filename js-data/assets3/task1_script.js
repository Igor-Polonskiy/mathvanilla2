(() => {
    const answers = document.querySelector('.task1_answers')
    const reloadTaskBtn = document.querySelector('.task1_reloadTask')
    const checkingTaskBtn = document.querySelector('.task1_checkingTask')
    const checkTask = document.querySelector('.task1_checkTask')
    const chek_answerTxt = document.querySelector('.task1_chek_answer')

    const winVarTask1 = '2'

    let answersItems = null
    let finishAnswer = null

    const answersData = [{
            id: 1,
            src: 'Images_2/assets3/task1_1.png',

        },
        {
            id: 2,
            src: 'Images_2/assets3/task1_2.png',
        },
        {
            id: 3,
            src: 'Images_2/assets3/task1_3.png',
        },
        {
            id: 4,
            src: 'Images_2/assets3/task1_4.png',
        }
    ]

    insertAnswers(answersData)

    answers.addEventListener('click', (e) => {
        if (e.target.classList.contains('task1_answer')) {
            answersItems.forEach(item => {
                if (finishAnswer) {
                    finishAnswer.classList.remove('task1_answer_active')
                    finishAnswer.classList.remove('task1_green')
                    finishAnswer.classList.remove('task1_red')
                }
                item.classList.remove('task1_answer_active')
            })
            e.target.classList.add('task1_answer_active')
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
            finishAnswer.classList.remove('task1_answer_active')

            if (finishAnswer.getAttribute('data-id') === winVarTask1) {
                finishAnswer.classList.add('task1_green')
                chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
                checkTask.style.background = 'lightgreen'
            } else {
                finishAnswer.classList.add('task1_red')
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
            e.classList.add('task1_answer')
            answers.append(e)
        })
        answersItems = answers.querySelectorAll('.task1_answer')
    }

})();