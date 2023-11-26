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
const dropDownMenu = document.querySelectorAll('.drop-down-menu')
const headerSection = document.querySelectorAll('.header-section')

dropDownMenu[0].addEventListener('click', () => {
    if (menu.classList.contains('nav__menu_active')) {
        dropDownMenu[0].classList.add('drop-down-menu_turn-right')
        menu.classList.add('nav__menu_enter')
        headerSection[0].classList.add('header-section_shift-up')
        setTimeout(() => {
            menu.classList.remove('nav__menu_enter')
            dropDownMenu[0].classList.remove('drop-down-menu_turn-right')
            menu.classList.remove('nav__menu_active')
            dropDownMenu[0].classList.remove('drop-down-menu_active')
            headerSection[0].classList.remove('header-section_shift-up')
            headerSection[0].classList.remove('header-section_down')
        }, 490)
    } else {
        dropDownMenu[0].classList.add('drop-down-menu_turn-left')
        menu.classList.add('nav__menu_exit')
        headerSection[0].classList.add('header-section_shift-down')
        setTimeout(() => {
            menu.classList.remove('nav__menu_exit')
            dropDownMenu[0].classList.remove('drop-down-menu_turn-left')
            menu.classList.add('nav__menu_active')
            dropDownMenu[0].classList.add('drop-down-menu_active')
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

const firstRight = document.querySelector('.first-right');
const blackout = document.querySelectorAll('.blackout');

dropDownMenu[1].addEventListener('click', () => {
    if (dropDownMenu[1].classList.contains('drop-down-menu_active')) {
        dropDownMenu[1].classList.add('drop-down-menu_turn-right')
        firstRight.classList.add('first-right_r')
        blackout[1].classList.add('blackout_light')
        setTimeout(() => {
            blackout[1].classList.remove('blackout_block')
            blackout[1].classList.remove('blackout_light')
            dropDownMenu[1].classList.remove('drop-down-menu_turn-right')
            firstRight.classList.remove('first-right_r')
            dropDownMenu[1].classList.remove('drop-down-menu_active')
            firstRight.classList.remove('first-right_active')
        }, 490)
    } else {
        dropDownMenu[1].classList.add('drop-down-menu_turn-left')
        firstRight.classList.add('first-right_l')
        blackout[1].classList.add('blackout_dark')
        blackout[1].classList.add('blackout_block')
        setTimeout(() => {
            blackout[1].classList.remove('blackout_dark')
            dropDownMenu[1].classList.remove('drop-down-menu_turn-left')
            firstRight.classList.remove('first-right_l')
            dropDownMenu[1].classList.add('drop-down-menu_active')
            firstRight.classList.add('first-right_active')
        }, 490)
    }
})

const mark = document.querySelectorAll('.first-left-block__check-mark')

for (let el of mark) {
    el.addEventListener('click', () => {
        mark.forEach(e => {
            e.classList.remove('first-left-block__check-mark-active')
        })
    el.classList.add('first-left-block__check-mark-active')
    })
}

const navListMenu = document.querySelectorAll('.nav-list__item')

for (let el of navListMenu) {
    el.addEventListener('click', () => {
        navListMenu.forEach(e => {
            e.classList.remove('nav-list__item_active')
        })
        el.classList.add('nav-list__item_active')
    })
}

const navItem = document.querySelectorAll('.fourth-main-section__item')

for (let el of navItem) {
    el.addEventListener('click', () => {
        navItem.forEach(e => {
            e.classList.remove('fourth-main-section__item_active')
        })
        el.classList.add('fourth-main-section__item_active')
    })
}

const formMessenger = document.querySelectorAll('.messengers__icon')

for (let el of formMessenger) {
    el.addEventListener('click', () => {
        formMessenger.forEach(e => {
            e.classList.remove('messengers__icon-active')
        })
        el.classList.add('messengers__icon-active')
    })
}