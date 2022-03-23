(() => {
    const pencils = document.querySelector('.task4_pencils')
    const pencilsImg = document.querySelectorAll('.task4_pencilImg')
    const circleWrapper = document.querySelector('.task4_circleWrapper')
    const baloons = document.querySelectorAll('.task4_baloon')
    const reloadTaskBtn = document.querySelector('.task4_reloadTask')
    const checkingTaskBtn = document.querySelector('.task4_checkingTask')
    const checkTask = document.querySelector('.task4_checkTask')
    const chek_answerTxt = document.querySelector('.task4_chek_answer')

    let color = 'white'

    pencils.addEventListener('click', (e) => {
        if (e.target.classList.contains('task4_pencilImg')) {
            pencilsImg.forEach(item => {
                item.classList.remove('task4_pencilSelect')
            })
            e.target.classList.add('task4_pencilSelect')
            color = e.target.getAttribute('data-color')
        }
    })

    circleWrapper.addEventListener('click', (e) => {
        if (e.target.closest('.task4_baloon')) {
            e.target.closest('.task4_baloon').setAttribute('fill', color)
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        pencilsImg.forEach(item => {
            item.classList.remove('task4_pencilSelect')
        })
        color = 'white'
        baloons.forEach(item => {
            item.setAttribute('fill', color)
        })
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let winVar = 0

        baloons.forEach(item => {
            if (item.classList.contains('task4_red')) {
                if (item.getAttribute('fill') === 'red') {
                    winVar++
                }
            }

            if (item.classList.contains('task4_white')) {
                if (item.getAttribute('fill') === 'white') {
                    winVar++
                }
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

})()