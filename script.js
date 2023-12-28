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



// -----------------------------------Добавление карточек для 3 секции----------------------------------------------

const navListMenu = document.querySelector('.nav-list__menu')

const navList = {
    0: 'Одноэтажный',
    1: 'С мансардой',
    2: 'Двухэтажный',
    3: 'С цокольным этажом',
    4: 'Трехэтажный',
    5: 'С панорамными окнами',
    6: 'С гаражом',
    7: 'Все'
};

const createNav = () => {
    for (let i = 0; i < Object.keys(navList).length; i++) {
        const navListItem = document.createElement('li');
        i === Object.keys(navList).length - 1 ? navListItem.className = 'nav-list__item nav-list__item_active' : navListItem.className = 'nav-list__item';
        navListItem.innerText = navList[i];
        navListMenu.append(navListItem)
    }
};

createNav();

const houses = {
    0: {
        name: '"Атаман"',
        src: './images/homeOrange.png',
        square: 108,
        sizes: '7x9',
        constructionDates: 16,
        room: 5,
        typeHouse: 'Одноэтажный',
        price: '1 780 000',
    },
    1: {
        name: '"Гавань"',
        src: './images/homeGreen.png',
        square: 192,
        sizes: '13x15',
        constructionDates: 35,
        room: 9,
        typeHouse: 'Двухэтажный',
        price: '3 430 000',
    },
    2: {
        name: '"Атлантида"',
        src: './images/homeBlue.png',
        square: 94,
        sizes: '7x8',
        constructionDates: 15,
        room: 5,
        typeHouse: 'Одноэтажный',
        price: '1 550 000',
    },
    3: {
        name: '"Лилендс"',
        src: './images/homeViolet.png',
        square: 230,
        sizes: '12x14',
        constructionDates: 48,
        room: 11,
        typeHouse: 'Трехэтажный',
        price: '5 880 000',
    },
    4: {
        name: '"Уголок"',
        src: './images/homeGray.png',
        square: 132,
        sizes: '10x9',
        constructionDates: 26,
        room: 7,
        typeHouse: 'С гаражом',
        price: '2 090 000',
    },
    5: {
        name: '"Роза"',
        src: './images/homePink.png',
        square: 168,
        sizes: '13x13',
        constructionDates: 30,
        room: 9,
        typeHouse: 'С гаражом',
        price: '2 780 000',
    }
};

let visibleAreaLength = 3;

const createCards = (item) => {
    // Object.keys(item).length > visibleAreaLength ? visibleAreaLength : visibleAreaLength = Object.keys(item).length
    const cardWrapper = document.querySelector('.card-wrapper__str');
    for (let i = 0; i < Object.keys(item).length; i++) {
        const cell = document.createElement('article');
        cell.className = 'cell';

        const cellImage = new Image();
        cellImage.className = 'cell__img';
        cellImage.src = item[i].src;
        cell.append(cellImage);

        const cellTitle = document.createElement('h3');
        cellTitle.className = 'cell__title';
        cellTitle.innerText = item[i].name;
        cell.append(cellTitle);

        const cellHeader = document.createElement('div');
        cellHeader.className = 'cell__header';
        cell.append(cellHeader);

        for (let j = 0; j < 2; j++) {
            const cellDescription = document.createElement('div');
            j % 2 === 0 ? cellDescription.className = 'description description_mr-right' : cellDescription.className = 'description';
            cellHeader.append(cellDescription);

            for (let k = 0; k < 2; k++) {
                const cellDescriptionText = document.createElement('p');
                cellDescriptionText.className = 'description__text';

                const cellDescriptionTextDark = document.createElement('span');
                cellDescriptionTextDark.className = 'description__text_dark';

                if (j % 2 === 0) {
                    if (k % 2 === 0) {
                        cellDescriptionText.innerText = 'Площадь: ';
                        cellDescriptionTextDark.innerText = `${item[i].square} м`;
                    } else {
                        cellDescriptionText.innerText = 'Размеры: ';
                        cellDescriptionTextDark.innerText = item[i].sizes;
                    }
                } else {
                    if (k % 2 === 0) {
                        cellDescriptionText.innerText = 'Срок стройки: ';
                        cellDescriptionTextDark.innerText = `${item[i].constructionDates} дней`;
                    } else {
                        cellDescriptionText.innerText = 'Комнат: ';
                        cellDescriptionTextDark.innerText = item[i].room;
                    }
                }
                cellDescriptionText.append(cellDescriptionTextDark);
                cellDescription.append(cellDescriptionText);
            }
        }

        const cellMain = document.createElement('ul');
        cellMain.className = 'cell__main';

        for (let j = 0; j < 2; j++) {
            const cellItem = document.createElement('li');
            cellItem.className = 'cell__item';

            if (j % 2 === 0) {
                const cellItemBox = document.createElement('div');
                cellItemBox.className = 'cell__item-box';

                const cellItemWrap = document.createElement('div');
                cellItemWrap.className = 'cell__item-wrap';
                cellItemWrap.innerText = 'Тип дома: ';

                const cellItemDark = document.createElement('span');
                cellItemDark.className = 'cell__item_dark';
                cellItemDark.innerText = item[i].typeHouse;

                cellItemBox.append(cellItemWrap, cellItemDark);
                cellItem.append(cellItemBox);
            } else {
                for (let k = 0; k < 2; k++) {
                    const cellItemDiv = document.createElement('div');

                    if (k % 2 === 0) {
                        cellItemDiv.className = 'cell__item-cont';
                        cellItemDiv.innerText = 'Стоимость: ';
                    } else {
                        cellItemDiv.className = 'cell__item-block';

                        for (let l = 0; l < 3; l++) {
                            const cellItemSpan = document.createElement('span');

                            if (l === 0) {
                                cellItemSpan.className = 'cell__item_dark';
                                cellItemSpan.innerText = 'от ';
                            } else if (l === 1) {
                                cellItemSpan.className = 'cell__item_green';
                                cellItemSpan.innerText = item[i].price;
                            } else {
                                cellItemSpan.className = 'cell__item_dark';
                                cellItemSpan.innerText = ' руб';
                            }

                            cellItemDiv.append(cellItemSpan);
                        }
                    }
                    cellItem.append(cellItemDiv);
                }
            }
            cellMain.append(cellItem);
        }
        cell.append(cellMain);

        const cellFooter = document.createElement('div');
        cellFooter.className = 'cell__footer';

        const cellButton = document.createElement('button');
        cellButton.type = 'button';
        cellButton.className = 'cell__btn';

        const cellButtonCaps = document.createElement('span');
        cellButtonCaps.className = 'cell__btn_caps';
        cellButtonCaps.innerText = 'СМОТРЕТЬ ПРОЕКТЫ ';

        const cellButtonImage = new Image();
        cellButtonImage.src = './images/right.svg';
        cellButtonImage.className = 'cell__btn_img';

        cellButton.append(cellButtonCaps, cellButtonImage);

        const cellDiamant = document.createElement('div');
        cellDiamant.className = 'cell__diamant';

        const cellDiamantImage = new Image();
        cellDiamantImage.src = './images/ok.svg';
        cellDiamantImage.className = 'cell__diamant_img';

        const cellDiamantText = document.createElement('p');
        cellDiamantText.className = 'cell__diamant_text';
        cellDiamantText.innerText = 'Индивидуальная \n планировка дома';

        cellDiamant.append(cellDiamantImage, cellDiamantText);
        cellFooter.append(cellButton, cellDiamant);
        cell.append(cellFooter);
        cardWrapper.append(cell);
    }
};

createCards(houses);

const navListItemActive = document.querySelectorAll('.nav-list__item');
const notFound = () => {
    const notFoundContent = document.createElement('div');
    notFoundContent.className = 'not-found';
    notFoundContent.innerText = 'Ничего не найдено';
    document.querySelector('.card-wrapper-list').append(notFoundContent);
}

const filterCards = (el) => {
    let filter;
    if (el.innerText === navList[Object.keys(navList).length - 1]) {
        filter = Object.keys(houses);
    } else {
        filter = Object.keys(houses).filter((elem) => {
            return houses[elem].typeHouse === el.innerText;
        });
    }
    
    filter = filter.map((elem) => {
        return houses[elem];
    });

    if (document.querySelector('.card-wrapper-list').lastElementChild.classList.contains('not-found')) {
        document.querySelector('.not-found').remove();
    }

    document.querySelector('.card-wrapper__str').remove();
    const cardWrapperStr = document.createElement('div');
    cardWrapperStr.className = 'card-wrapper__str';
    document.querySelector('.card-wrapper-list').append(cardWrapperStr);
    filter.length ? createCards(filter) : notFound();
}

for (let el of navListItemActive) {
    el.addEventListener('click', () => {
        navListItemActive.forEach(elem => {
            elem.classList.remove('nav-list__item_active');
        });
        el.classList.add('nav-list__item_active');
        filterCards(el);
    });
}