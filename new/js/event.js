const videoClick = document.querySelector('.aos-a-c')
const aosNone = document.querySelector('.aos-none')
const hoverVideo = document.querySelector('.hover_video')
const quickBtnC = document.querySelector('.quickBtn-c')
const aosLbT = document.querySelector('.aos-lb_t')
const hoverEffClose = document.querySelector('.hover--eff')
const textC = document.querySelector('.text-c')

let quickHidden = false;

quickBtnC.addEventListener('click', function () {

    if (!quickHidden) {
        aosNone.style.display = 'none'
        hoverVideo.style.display = 'block'

        videoClick.classList.add('aos-a-c_close')
        hoverVideo.classList.add('hover_video-open')
        hoverEffClose.classList.add('panel_close')
        aosLbT.classList.add('aos-lb_t-c')
        quickBtnC.classList.add('quickBtn-c2')
        textC.classList.add('text-c2')
    } else {
        aosNone.style.display = 'block'
        hoverVideo.style.display = 'none'

        videoClick.classList.remove('aos-a-c_close')
        hoverVideo.classList.remove('hover_video-open')
        hoverEffClose.classList.remove('panel_close')
        aosLbT.classList.remove('aos-lb_t-c')
        quickBtnC.classList.remove('quickBtn-c2')
        textC.classList.remove('text-c2')
    }

    quickHidden = !quickHidden
})