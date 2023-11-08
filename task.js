const tabElements = [...document.querySelectorAll('.tab')]
let activeTabElement = document.querySelector('.tab_active')

let contentElements = document.querySelectorAll('.tab__content')
let activeContentElement = document.querySelector('.tab__content_active')

let indexTab = 0

function toggleActive() {    
    // если вкладка не меняется, то выходим
    if (activeTabElement === this) {
        return
    }

    // тут this это элемент tab
    activeTabElement.classList.remove('tab_active')
    this.classList.add('tab_active')
    activeTabElement = this
    indexTab = tabElements.indexOf(this)
    
    // разбираемся с контентом
    activeContentElement.classList.remove('tab__content_active')
    contentElements[indexTab].classList.add('tab__content_active')
    activeContentElement = contentElements[indexTab]
}

for (const el of tabElements) {
    el.addEventListener('click', toggleActive)
}
