(() => {
    const reloadTaskBtn = document.querySelector('.task8_reloadTask')
    const checkingTaskBtn = document.querySelector('.task8_checkingTask')
    const checkTask = document.querySelector('.task8_checkTask')
    const chek_answerTxt = document.querySelector('.task8_chek_answer')
    const inputElephant = document.querySelector('#task8_1')
    const inputFlamingo = document.querySelector('#task8_2')
    const inputLegs = document.querySelector('#task8_3')
    const plays = document.querySelectorAll('.task8_play')
    const audios = document.querySelectorAll('.task8_audio')

    let answer1 = 0
    let answer2 = 0
    let answer3 = 0

    plays.forEach((item, index) => {
        item.addEventListener('click', () => {
            audios[index].play()
        })
    })

    inputElephant.addEventListener('change', (e) => {
        answer1 = e.target.value
    })

    inputFlamingo.addEventListener('change', (e) => {
        answer2 = e.target.value
    })

    inputLegs.addEventListener('change', (e) => {
        answer3 = e.target.value
    })

    reloadTaskBtn.addEventListener('click', () => {
        inputElephant.value = ''
        inputFlamingo.value = ''
        inputLegs.value = ''
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        if (answer1 === '2' && answer2 === '3' && answer3 === '1') {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()