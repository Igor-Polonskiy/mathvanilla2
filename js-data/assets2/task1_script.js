(() => {
    const reloadTaskBtn = document.querySelector('.task1_reloadTask')
    const checkingTaskBtn = document.querySelector('.task1_checkingTask')
    const checkTask = document.querySelector('.task1_checkTask')
    const chek_answerTxt = document.querySelector('.task1_chek_answer')
    const dropZone = document.querySelector('.task1_drop')
    const answersWrapper = document.querySelector('.task1_answers')
    const task1 = document.querySelector('.task1_wrapper')

    const dropitems = [{
            id: 1,
            data: '1'
        },
        {
            id: 2,
            data: '2'
        },
        {
            id: 3,
            data: '3'
        },
        {
            id: 4,
            data: '4'
        },
        {
            id: 5,
            data: '5'
        },
        {
            id: 6,
            data: '6'
        },
        {
            id: 7,
            data: '7'
        }
    ]

    const answers = [{
            id: 1,
            data: '2',
            src: 'Images_2/assets2/task1_2.png'
        },
        {
            id: 2,
            data: '4',
            src: 'Images_2/assets2/task1_3.png'
        },
        {
            id: 3,
            data: '6',
            src: 'Images_2/assets2/task1_4.png'
        }
    ]

    function fillAnswers() {
        answers.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task1_answer')
            answer.style.backgroundImage = `url(${item.src})`
            answer.setAttribute('data-number', item.data)
            answersWrapper.append(answer)
        })
    }

    fillAnswers()

    dropitems.forEach(item => {
        let el = document.createElement('div')
        el.classList.add('task1_dropeitem')
        el.setAttribute('data-number', item.data)
        dropZone.append(el)
    })




    let draggingItem;
    let elemBelow;
    let shiftX;
    let shiftY

    function moveAt(pageX, pageY) {
        draggingItem.style.left = pageX - shiftX + "px";
        draggingItem.style.top = pageY - shiftY + "px";
    }

    task1.addEventListener('mousedown', (e) => {

        if (e.target.classList.contains('task1_answer')) {
            chek_answerTxt.innerHTML = ''
            checkTask.style.background = ''

            draggingItem = e.target
            draggingItem.style.cursor = "grabbing";

            shiftX = e.clientX - draggingItem.getBoundingClientRect().left;
            shiftY = e.clientY - draggingItem.getBoundingClientRect().top;

            draggingItem.style.position = "absolute";
            draggingItem.style.zIndex = 1000;
            document.body.append(draggingItem);

            moveAt(e.pageX, e.pageY);
        }
    })

    document.addEventListener('mousemove', (e) => {
        if (draggingItem) {
            moveAt(e.pageX, e.pageY);
            draggingItem.style.cursor = "grabbing";
        }
    })

    document.addEventListener('mouseup', (e) => {
        if (draggingItem) {
            draggingItem.style.visibility = 'hidden';
            elemBelow = document.elementFromPoint(e.clientX, e.clientY);
            draggingItem.style.visibility = 'visible';
            draggingItem.style.cursor = "grab";

            if (elemBelow.classList.contains("task1_dropeitem") && elemBelow.childNodes.length === 0) {
                draggingItem.style.position = "static";
                draggingItem.style.zIndex = null;
                draggingItem.style.top = null;
                draggingItem.style.left = null;
                elemBelow.append(draggingItem);

            } else {
                draggingItem.style.position = "static";
                draggingItem.style.zIndex = null;
                draggingItem.style.top = null;
                draggingItem.style.left = null;
                answersWrapper.append(draggingItem);
            }
            draggingItem = null
        }
    })

    const dropeitems = document.querySelectorAll('.task1_dropeitem')

    reloadTaskBtn.addEventListener('click', () => {
        dropeitems.forEach(item => {
            item.innerHTML = ''
        })

        answersWrapper.innerHTML = ''

        fillAnswers()

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let winVar = 0
        if (dropeitems[1].children.length) {
            if (dropeitems[1].getAttribute('data-number') === [...dropeitems[1].children][0].getAttribute('data-number')) {
                winVar++
            }
        }

        if (dropeitems[3].children.length) {
            if (dropeitems[3].getAttribute('data-number') === [...dropeitems[3].children][0].getAttribute('data-number')) {
                winVar++
            }
        }
        if (dropeitems[5].children.length) {
            if (dropeitems[5].getAttribute('data-number') === [...dropeitems[5].children][0].getAttribute('data-number')) {
                winVar++
            }
        }

        if (winVar === 3) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()