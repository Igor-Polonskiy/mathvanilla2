(() => {
    const pencils = document.querySelector('.task5_pencils')
    const pencilsImg = document.querySelectorAll('.task5_pencilImg')
    const circleWrapper = document.querySelector('.task5_circleWrapper')
    const baloons = document.querySelectorAll('.task5_baloon')
    const reloadTaskBtn = document.querySelector('.task5_reloadTask')
    const checkingTaskBtn = document.querySelector('.task5_checkingTask')
    const checkTask = document.querySelector('.task5_checkTask')
    const chek_answerTxt = document.querySelector('.task5_chek_answer')

    let color = 'white'

    pencils.addEventListener('click', (e) => {
        if (e.target.classList.contains('task5_pencilImg')) {
            pencilsImg.forEach(item => {
                item.classList.remove('task5_pencilSelect')
            })
            e.target.classList.add('task5_pencilSelect')
            color = e.target.getAttribute('data-color')
        }
    })

    circleWrapper.addEventListener('click', (e) => {
        if (e.target.closest('.task5_baloon')) {
            e.target.closest('.task5_baloon').setAttribute('fill', color)
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        pencilsImg.forEach(item => {
            item.classList.remove('task5_pencilSelect')
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
            if (item.classList.contains('task5_red')) {
                if (item.getAttribute('fill') === 'red') {
                    winVar++
                }
            }
            if (item.classList.contains('task5_green')) {
                if (item.getAttribute('fill') === 'green') {
                    winVar++
                }
            }
            if (item.classList.contains('task5_yellow')) {
                if (item.getAttribute('fill') === 'yellow') {
                    winVar++
                }
            }

            if (item.classList.contains('task5_blue')) {
                if (item.getAttribute('fill') === 'blue') {
                    winVar++
                }
            }
        })

        if (winVar === 4) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()