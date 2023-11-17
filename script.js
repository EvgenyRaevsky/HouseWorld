const droplist = document.querySelectorAll('.droplist')

for (let el of droplist) {
    el.addEventListener('click', () => {
            let next = el
            droplist.forEach((el, i) => {
                el.classList.contains('droplist_active') && el.classList.remove('droplist_active')
                if (i === droplist.length - 1) {
                    next.classList.add('droplist_active')
                }
            })
        }
    )
}

const menu = document.querySelector('.nav__menu')
const dropDownMenu = document.querySelector('.drop-down-menu')
const headerSection = document.querySelectorAll('.header-section')

dropDownMenu.addEventListener('click', () => {
    if (menu.classList.contains('nav__menu_active')) {
        dropDownMenu.classList.add('drop-down-menu_turn-right')
        menu.classList.add('nav__menu_enter')
        headerSection[0].classList.add('header-section_shift-up')
        setTimeout(() => {
            menu.classList.remove('nav__menu_enter')
            dropDownMenu.classList.remove('drop-down-menu_turn-right')
            menu.classList.remove('nav__menu_active')
            dropDownMenu.classList.remove('drop-down-menu_active')
            headerSection[0].classList.remove('header-section_shift-up')
            headerSection[0].classList.remove('header-section_down')
        }, 490)
    }
    else {
        dropDownMenu.classList.add('drop-down-menu_turn-left')
        menu.classList.add('nav__menu_exit')
        headerSection[0].classList.add('header-section_shift-down')
        setTimeout(() => {
            menu.classList.remove('nav__menu_exit')
            dropDownMenu.classList.remove('drop-down-menu_turn-left')
            menu.classList.add('nav__menu_active')
            dropDownMenu.classList.add('drop-down-menu_active')
            headerSection[0].classList.remove('header-section_shift-down')
            headerSection[0].classList.add('header-section_down')
        }, 490)
    }
})

const calcBlock = document.querySelectorAll('.calculation-block__img')

for (let el of calcBlock) {
    el.addEventListener('click', () => {
        calcBlock.forEach(el => {
            el.classList.remove('calculation-block__img_active')
        })
        el.classList.add('calculation-block__img_active')
    })
}