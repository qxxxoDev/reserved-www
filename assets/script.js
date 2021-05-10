const menuToggler = document.getElementById('menu-toggler')
const menu = document.getElementById('menu')
const newItemsList = document.getElementById('new-items-list')

menuToggler.onclick = function () {
    this.classList.toggle('active')
    menu.classList.toggle('active')
}

newItemsList.onmouseover = function (e) {
    if (e.target.nodeName == 'IMG'){
        e.target.src = e.target.dataset.swap
    }
}

newItemsList.onmouseout = function (e) {
    if (e.fromElement.nodeName == 'IMG'){
        e.target.src = e.target.dataset.static
    }
}