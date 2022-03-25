(() => {
    const reloadTaskBtn = document.querySelector('.task4_reloadTask')
    const checkingTaskBtn = document.querySelector('.task4_checkingTask')
    const checkTask = document.querySelector('.task4_checkTask')
    const chek_answerTxt = document.querySelector('.task4_chek_answer')
    const answersWrapper = document.querySelector('.task4_answers')
    const task42 = document.querySelector('.task4_wrapper')



    const answers = [{
            id: 1,
            data: '1',
            src: 'Images_2/assets4/task4_1.png'
        },
        {
            id: 2,
            data: '2',
            src: 'Images_2/assets4/task4_2.png'
        },
        {
            id: 3,
            data: '3',
            src: 'Images_2/assets4/task4_3.png'

        }
    ]

    answers.forEach(item => {
        let answer = document.createElement('div')
        answer.classList.add('task4_answer')
        answer.setAttribute('data-number', item.data)
        answer.style.backgroundImage = `url(${item.src})`
        answersWrapper.append(answer)
    })

    let draggingItem;
    let elemBelow;
    let shiftX;
    let shiftY

    function moveAt(pageX, pageY) {
        draggingItem.style.left = pageX - shiftX + "px";
        draggingItem.style.top = pageY - shiftY + "px";
        console.log(pageX, shiftX)
    }

    task42.addEventListener('mousedown', (e) => {

        if (e.target.classList.contains('task4_answer')) {
            chek_answerTxt.innerHTML = ''
            checkTask.style.background = ''

            draggingItem = document.createElement('div')
            draggingItem.classList.add('task4_answer_drop')
            draggingItem.setAttribute('data-number', e.target.getAttribute('data-number'))
            draggingItem.style.backgroundImage = `url(${answers[e.target.getAttribute('data-number')-1].src})`


            //draggingItem = e.target

            draggingItem.style.cursor = "grabbing";


            draggingItem.style.position = "absolute";
            draggingItem.style.zIndex = 1000;



            document.body.append(draggingItem);
            shiftX = e.clientX - e.target.getBoundingClientRect().left;
            shiftY = e.clientY - e.target.getBoundingClientRect().top;
            moveAt(e.pageX, e.pageY);

        }
        if (e.target.classList.contains('task4_answer_drop')) {
            chek_answerTxt.innerHTML = ''
            checkTask.style.background = ''
            draggingItem = e.target

            draggingItem.style.cursor = "grabbing";


            draggingItem.style.position = "absolute";
            draggingItem.style.zIndex = 1000;




            shiftX = e.clientX - draggingItem.getBoundingClientRect().left;
            shiftY = e.clientY - draggingItem.getBoundingClientRect().top;
            moveAt(e.pageX, e.pageY);
            document.body.append(draggingItem);
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

            if (elemBelow.classList.contains("task4_dropeitem") && elemBelow.children.length === 0) {
                draggingItem.style.position = "static";
                draggingItem.style.zIndex = null;
                draggingItem.style.top = null;
                draggingItem.style.left = null;
                elemBelow.append(draggingItem);

            } else {
                /* draggingItem.style.position = "static";
                 draggingItem.style.zIndex = null;
                 draggingItem.style.top = null;
                 draggingItem.style.left = null;
                 answersWrapper.append(draggingItem);*/
                draggingItem.remove()
            }
            draggingItem = null
        }
    })

    const dropeitems = document.querySelectorAll('.task4_dropeitem')

    reloadTaskBtn.addEventListener('click', () => {

        dropeitems.forEach(item => {

            if (item.children.length) {
                [...item.children][0].remove()
            }
        })




        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let winVar = 0

        dropeitems.forEach(item => {
            if (item.children.length) {
                if ([...item.children][0].getAttribute('data-number') === item.getAttribute('data-number')) {
                    winVar++
                }
            }
        })


        if (winVar === 6) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()