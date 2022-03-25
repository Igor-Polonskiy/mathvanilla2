(() => {
    const pencils = document.querySelector('.task8_pencils')
    const pencilsImg = document.querySelectorAll('.task8_pencilImg')
    const circleWrapper = document.querySelector('.task8_circleWrapper')
    const baloons = document.querySelectorAll('.task8_baloon')
    const reloadTaskBtn = document.querySelector('.task8_reloadTask')
    const checkingTaskBtn = document.querySelector('.task8_checkingTask')
    const checkTask = document.querySelector('.task8_checkTask')
    const chek_answerTxt = document.querySelector('.task8_chek_answer')

    let color = 'white'

    pencils.addEventListener('click', (e) => {
        if (e.target.classList.contains('task8_pencilImg')) {
            pencilsImg.forEach(item => {
                item.classList.remove('task8_pencilSelect')
            })
            e.target.classList.add('task8_pencilSelect')
            color = e.target.getAttribute('data-color')
        }
    })

    circleWrapper.addEventListener('click', (e) => {
        if (e.target.closest('.task8_baloon')) {
            e.target.closest('.task8_baloon').setAttribute('fill', color)
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        pencilsImg.forEach(item => {
            item.classList.remove('task8_pencilSelect')
        })
        color = 'white'
        baloons.forEach(item => {
            item.setAttribute('fill', color)
        })

    })
})()