(() => {
    const answers = document.querySelector('.task14_answers')
    const reloadTaskBtn = document.querySelector('.task14_reloadTask')
    const checkingTaskBtn = document.querySelector('.task14_checkingTask')
    const checkTask = document.querySelector('.task14_checkTask')
    const chek_answerTxt = document.querySelector('.task14_chek_answer')
    const audioList = document.querySelectorAll('.task14_audio')

    const winVarTask14 = '2'

    let answersItems = null
    let finishAnswer = null

    const answersData = [{
            id: 1,
            src: 'Меньше слив у Сони — на 4',

        },
        {
            id: 2,
            src: 'Меньше слив у Сони — на 2',
        },
        {
            id: 3,
            src: 'Меньше слив у Коли — на 4',
        },
        {
            id: 4,
            src: 'Меньше слив у Коли — на 2',
        }
    ]


    answers.addEventListener('click', (e) => {
        if (e.target.classList.contains('task14_answer')) {
            answersItems.forEach(item => {
                if (finishAnswer) {
                    finishAnswer.classList.remove('task14_answer_active')
                    finishAnswer.classList.remove('task14_green')
                    finishAnswer.classList.remove('task14_red')
                }
                item.classList.remove('task14_answer_active')
            })
            e.target.classList.add('task14_answer_active')
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
        finishAnswer.classList.remove('task14_answer_active')
        if (finishAnswer.getAttribute('data-id') === winVarTask14) {
            finishAnswer.classList.add('task14_green')
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            if (finishAnswer) {
                finishAnswer.classList.add('task14_red')
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
            e.classList.add('task14_answer')
            answers.append(e)
        })
        answersItems = answers.querySelectorAll('.task14_answer')
    }

    insertAnswers(answersData)
})();