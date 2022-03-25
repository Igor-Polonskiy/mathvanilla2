(() => {
    const pencils = document.querySelector('.task2_pencils')
    const pencilsImg = document.querySelectorAll('.task2_pencilImg')
    const circleWrapper = document.querySelector('.task2_circleWrapper')
    const chears = document.querySelectorAll('.task2_fig')
    const reloadTaskBtn = document.querySelector('.task2_reloadTask')
    const checkingTaskBtn = document.querySelector('.task2_checkingTask')
    const checkTask = document.querySelector('.task2_checkTask')
    const chek_answerTxt = document.querySelector('.task2_chek_answer')

    let color = 'white'

    pencils.addEventListener('click', (e) => {
        if (e.target.classList.contains('task2_pencilImg')) {
            pencilsImg.forEach(item => {
                item.classList.remove('task2_pencilSelect')
            })
            e.target.classList.add('task2_pencilSelect')
            color = e.target.getAttribute('data-color')
        }
    })

    circleWrapper.addEventListener('click', (e) => {
        if (e.target.closest('.task2_fig')) {
            e.target.closest('.task2_fig').setAttribute('fill', color)
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        pencilsImg.forEach(item => {
            item.classList.remove('task2_pencilSelect')
        })
        color = 'white'
        chears.forEach(item => {
            item.setAttribute('fill', color)
        })
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let winVar = 0



        if (chears[2].getAttribute('fill') === 'red') {
            winVar++
        }

        if (chears[1].getAttribute('fill') === 'green') {
            winVar++
        }
        if (chears[3].getAttribute('fill') === 'blue') {
            winVar++
        }
        if (chears[0].getAttribute('fill') === 'yellow') {
            winVar++
        }





        if (winVar === 4) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()