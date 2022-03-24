(() => {
    const answers = document.querySelector('.task12_answers')
    const reloadTaskBtn = document.querySelector('.task12_reloadTask')
    const checkingTaskBtn = document.querySelector('.task12_checkingTask')
    const checkTask = document.querySelector('.task12_checkTask')
    const chek_answerTxt = document.querySelector('.task12_chek_answer')

    const winVarTask12 = '2'

    let answersItems = null
    let finishAnswer = null

    const answersData = [{
            id: 1,
            src: 'Images_2/assets3/task12_1.png',

        },
        {
            id: 2,
            src: 'Images_2/assets3/task12_2.png',
        },
        {
            id: 3,
            src: 'Images_2/assets3/task12_3.png',
        },
        {
            id: 4,
            src: 'Images_2/assets3/task12_4.png',
        }
    ]

    insertAnswers(answersData)

    answers.addEventListener('click', (e) => {
        if (e.target.classList.contains('task12_answer')) {
            answersItems.forEach(item => {
                if (finishAnswer) {
                    finishAnswer.classList.remove('task12_answer_active')
                    finishAnswer.classList.remove('task12_green')
                    finishAnswer.classList.remove('task12_red')
                }
                item.classList.remove('task12_answer_active')
            })
            e.target.classList.add('task12_answer_active')
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
            finishAnswer.classList.remove('task12_answer_active')

            if (finishAnswer.getAttribute('data-id') === winVarTask12) {
                finishAnswer.classList.add('task12_green')
                chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
                checkTask.style.background = 'lightgreen'
            } else {
                finishAnswer.classList.add('task12_red')
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
            let e = document.createElement('img')
            e.style.backgroundImage = `url(${item.src})`
            e.setAttribute('data-id', item.id)
            e.classList.add('task12_answer')
            answers.append(e)
        })
        answersItems = answers.querySelectorAll('.task12_answer')
    }

})();