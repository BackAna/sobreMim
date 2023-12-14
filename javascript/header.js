fetch('header.html')
.then(response => response.text())
.then(data => {
    document.querySelector('body').insertAdjacentHTML('afterbegin', data);
});

function clickMenu() {
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}