function notificationMenu(x) {
    const notificationMenu = document.querySelector('.notificationMenu')
    if (notificationMenu.classList.contains('d-none')){
        notificationMenu.className = 'position-absolute mt-5 ms-5 notificationMenu'
    }else {
        notificationMenu.className = 'position-absolute mt-5 ms-5 d-none notificationMenu '
    }
    x.preventDefault()
}

export { notificationMenu };