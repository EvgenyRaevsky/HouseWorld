const droplist = document.querySelectorAll('.droplist')

for (let el of droplist) {
    el.addEventListener('click',
        () => {
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
