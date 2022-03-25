(() => {
    const pencils = document.querySelector('.task7_pencils')
    const pencilsImg = document.querySelectorAll('.task7_pencilImg')
    const circleWrapper = document.querySelector('.task7_circleWrapper')
    const chears = document.querySelectorAll('.task7_fig')
    const reloadTaskBtn = document.querySelector('.task7_reloadTask')
    const checkingTaskBtn = document.querySelector('.task7_checkingTask')
    const checkTask = document.querySelector('.task7_checkTask')
    const chek_answerTxt = document.querySelector('.task7_chek_answer')

    let color = 'white'

    pencils.addEventListener('click', (e) => {
        if (e.target.classList.contains('task7_pencilImg')) {
            pencilsImg.forEach(item => {
                item.classList.remove('task7_pencilSelect')
            })
            e.target.classList.add('task7_pencilSelect')
            color = e.target.getAttribute('data-color')
        }
    })

    circleWrapper.addEventListener('click', (e) => {
        if (e.target.closest('.task7_fig')) {
            e.target.closest('.task7_fig').setAttribute('fill', color)
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        pencilsImg.forEach(item => {
            item.classList.remove('task7_pencilSelect')
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

        chears.forEach(item => {
            if (item.classList.contains('task7_red') && item.getAttribute('fill') === 'red') {
                winVar++
            }
            if (item.classList.contains('task7_yellow') && item.getAttribute('fill') === 'yellow') {
                winVar++
            }
            if (item.classList.contains('task7_green') && item.getAttribute('fill') === 'green') {
                winVar++
            }
            if (item.classList.length === 1 && item.getAttribute('fill') === 'white') {
                winVar++
            }
        })

        /* if (chears[2].getAttribute('fill') === 'red') {
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
*/
        console.log(winVar)




        if (winVar === 13) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()