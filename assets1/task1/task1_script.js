(() => {
    const pencils = document.querySelector('.task1_pencils')
    const pencilsImg = document.querySelectorAll('.task1_pencilImg')
    const circleWrapper = document.querySelector('.task1_circleWrapper')
    const chears = document.querySelectorAll('.task1_fig')
    const reloadTaskBtn = document.querySelector('.task1_reloadTask')
    const checkingTaskBtn = document.querySelector('.task1_checkingTask')
    const checkTask = document.querySelector('.task1_checkTask')
    const chek_answerTxt = document.querySelector('.task1_chek_answer')

    let color = '#A6E1FF'

    pencils.addEventListener('click', (e) => {
        if (e.target.classList.contains('task1_pencilImg')) {
            pencilsImg.forEach(item => {
                item.classList.remove('task1_pencilSelect')
            })
            e.target.classList.add('task1_pencilSelect')
            color = e.target.getAttribute('data-color')
        }
    })

    circleWrapper.addEventListener('click', (e) => {
        if (e.target.closest('.task1_fig')) {
            e.target.closest('.task1_fig').setAttribute('fill', color)
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        pencilsImg.forEach(item => {
            item.classList.remove('task1_pencilSelect')
        })
        color = '#A6E1FF'
        chears.forEach(item => {
            item.setAttribute('fill', color)
        })
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let winVar = 0

        chears.forEach((item, index) => {
            if (index != 4 && index != 8) {
                if (item.getAttribute('fill') !== '#A6E1FF') {
                    winVar--
                }
            }

        })
        if (chears[4].getAttribute('fill') === 'red') {
            winVar++
        }

        if (chears[8].getAttribute('fill') === 'green') {
            winVar++
        }





        if (winVar === 2) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()