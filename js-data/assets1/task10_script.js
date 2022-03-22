(() => {
    const answers = document.querySelector('.task10_answers')
    const reloadTaskBtn = document.querySelector('.task10_reloadTask')
    const checkingTaskBtn = document.querySelector('.task10_checkingTask')
    const checkTask = document.querySelector('.task10_checkTask')
    const chek_answerTxt = document.querySelector('.task10_chek_answer')
    const audioList = document.querySelectorAll('.task10_audio')

    const winVarTask10 = '1'

    let answersItems = null
    let finishAnswer = null

    const answersData = [{
            id: 1,
            src: 'Первым',

        },
        {
            id: 2,
            src: 'Вторым',
        },
        {
            id: 3,
            src: 'Третьим',
        },
        {
            id: 4,
            src: 'Четвёртым',
        }
    ]


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
        finishAnswer.classList.remove('task10_answer_active')
        if (finishAnswer.getAttribute('data-id') === winVarTask10) {
            finishAnswer.classList.add('task10_green')
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            if (finishAnswer) {
                finishAnswer.classList.add('task10_red')
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
            e.innerText = item.src
            e.setAttribute('data-id', item.id)
            let audio = document.createElement('span');
            audio.innerHTML = '&#128265;'
            audio.addEventListener('click', (e) => {
                audioList[item.id - 1].play()
            })
            e.append(audio)
            e.classList.add('task10_answer')
            answers.append(e)
        })
        answersItems = answers.querySelectorAll('.task10_answer')
    }

    insertAnswers(answersData)
})();