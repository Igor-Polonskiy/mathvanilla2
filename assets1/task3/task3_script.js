(() => {
    const reloadTaskBtn = document.querySelector('.task3_reloadTask')
    const checkingTaskBtn = document.querySelector('.task3_checkingTask')
    const checkTask = document.querySelector('.task3_checkTask')
    const chek_answerTxt = document.querySelector('.task3_chek_answer')
    const imgs = document.querySelectorAll('.task3_img')
    const task = document.querySelector('.task3_wrapper')


    let count = 0
    let active = ['task3_active1', 'task3_active2', 'task3_active3']
    let arr1 = []
    let arr2 = []
    let arr3 = []


    imgs.forEach(item => {
        item.addEventListener('click', () => {

            if (count < 2 && item.classList.length < 2) {
                item.classList.add(active[active.length - 1])
                arr1.push(item.getAttribute('data-shape'))
                count++
            } else if (count > 1 && count < 4 && item.classList.length < 2) {
                item.classList.add(active[active.length - 1])
                arr2.push(item.getAttribute('data-shape'))
                count++
            } else if (count > 3 && item.classList.length < 2) {
                item.classList.add(active[active.length - 1])
                arr3.push(item.getAttribute('data-shape'))
                active.pop()
                count++
            } else if (item.classList.contains('task3_active1')) {
                item.classList.remove('task3_active1')
                arr1.pop()
                count--
            } else if (item.classList.contains('task3_active2')) {
                item.classList.remove('task3_active2')
                arr2.pop()
                count--
            } else if (item.classList.contains('task3_active3')) {
                item.classList.remove('task3_active3')
                arr3.pop()
                count--
            }
            console.log(active)

        })
    })
    task.addEventListener('click', (e) => {
        if (count < 2) {
            active = ['task3_active1', 'task3_active2', 'task3_active3']
        }
        if (count > 1 && count < 4) {
            active = ['task3_active1', 'task3_active2']
        }
        if (count > 3) {
            active = ['task3_active1']
        }
    })


    reloadTaskBtn.addEventListener('click', () => {
        imgs.forEach(item => {
            item.classList.remove('task3_active1')
            item.classList.remove('task3_active2')
            item.classList.remove('task3_active3')

        })
        count = 0
        arr1.length = 0
        arr2.length = 0
        arr3.length = 0


        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let winVar = 0
        if (arr1.length === 2 && arr1[0] === arr1[1]) {
            winVar++
        }
        if (arr2.length === 2 && arr2[0] === arr2[1]) {
            winVar++
        }
        if (arr3.length === 2 && arr3[0] === arr3[1]) {
            winVar++
        }
        console.log(winVar)
        if (winVar === 3) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()