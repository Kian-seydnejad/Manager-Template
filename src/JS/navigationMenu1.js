
function navigationMenu(e) {

    const messagesMenu = document.querySelector('.messagesMenu')
    if (messagesMenu.classList.contains('d-none')){
        messagesMenu.className = 'position-absolute mt-5 bgChange rounded messagesMenu '
    }else{
        messagesMenu.className = 'position-absolute mt-5 bgChange rounded d-none messagesMenu'
    }
    e.preventDefault()
}

export { navigationMenu }