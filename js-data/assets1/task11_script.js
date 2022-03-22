(() => {
    const pencils = document.querySelector('.task11_pencils')
    const pencilsImg = document.querySelectorAll('.task11_pencilImg')
    const circleWrapper = document.querySelector('.task11_circleWrapper')
    const circles = document.querySelectorAll('.task11_circle')
    const reloadTaskBtn = document.querySelector('.task11_reloadTask')
    const checkingTaskBtn = document.querySelector('.task11_checkingTask')
    const checkTask = document.querySelector('.task11_checkTask')
    const chek_answerTxt = document.querySelector('.task11_chek_answer')

    let color = 'white'

    pencils.addEventListener('click', (e) => {
        if (e.target.classList.contains('task11_pencilImg')) {
            pencilsImg.forEach(item => {
                item.classList.remove('task11_pencilSelect')
            })
            e.target.classList.add('task11_pencilSelect')
            color = e.target.getAttribute('data-color')
        }
    })

    circleWrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('task11_circle')) {
            e.target.style.backgroundColor = color
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        pencilsImg.forEach(item => {
            item.classList.remove('task11_pencilSelect')
        })
        color = 'white'
        circles.forEach(item => {
            item.style.backgroundColor = color
        })
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let winVar = 0
        for (let i = 0; i < 3; i++) {
            if (circles[i].style.backgroundColor === 'blue') {
                winVar++
            }
        }

        if (circles[3].style.backgroundColor === 'red' || circles[3].style.backgroundColor === '') {
            winVar++
        }
        if (circles[4].style.backgroundColor === 'red' || circles[3].style.backgroundColor === '') {
            winVar++
        }
        if (circles[5].style.backgroundColor === 'yellow' || circles[3].style.backgroundColor === '') {
            winVar++
        }
        if (circles[6].style.backgroundColor === 'yellow' || circles[3].style.backgroundColor === '') {
            winVar++
        }
        if (circles[7].style.backgroundColor === 'green' || circles[3].style.backgroundColor === '') {
            winVar++
        }


        if (winVar === 8) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()