
function removeMenu() {

    const MenuBtn = document.querySelector('.MenuBtn')
    const Xeader = document.querySelector('.Xeader')
    const Xside = document.querySelector('.Xside')
    const Xmain = document.querySelector('.Xmain')

    if (Xside.classList.contains('p-1')) {
        Xside.className = 'Xside p-2'
        Xside.style.setProperty("display", "none");
        Xeader.className = 'Xeader col-12 position-fixed bgChange'
        Xmain.className = 'bg-dark col-12 Xmain mt-5'
        MenuBtn.className = 'bi bi-x-lg p-2 rounded-circle bg-dark MenuBtn d-none d-lg-block'
    }else{
        Xside.className = 'Xside col-3 bgChange position-fixed p-1 text-danger d-grid d-none d-lg-block  h-100 '
        Xside.style.setProperty("display", "none");
        Xeader.className = 'Xeader col-md-9 col-sm-12 col-12 position-fixed m25 bgChange m25'
        Xmain.className = 'bg-dark col-12 col-sm-12 col-md-9 mt-5 m25 Xmain'
        MenuBtn.className = 'bi bi-sliders2 p-2 rounded-circle bg-dark MenuBtn d-none d-lg-block'
    }
}

export { removeMenu };