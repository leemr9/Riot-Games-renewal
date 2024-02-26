document.addEventListener('click', function(event) {
    const button = event.target;
    const panel = button.closest('.panel');
    const quickBtnC = button.closest('.quickBtn-c');
    const quickBtnC2 = panel.querySelector('.quickBtn-c2');

    if (quickBtnC) {
        const aosNone = panel.querySelector('.aos-none');
        const hoverVideo = panel.querySelector('.hover_video');
        const videoClick = panel.querySelector('.aos-a-c');
        const hoverEffClose = panel.querySelector('.hover--eff');
        const aosLbT = panel.querySelector('.aos-lb_t');
        const textC = panel.querySelector('.text-c');

        quickBtnC.style.display = 'none';
        
        if (aosNone.style.display === 'none') {
            aosNone.style.display = 'block';
            hoverVideo.style.display = 'none';
            videoClick.classList.remove('aos-a-c_close');
            hoverVideo.classList.remove('hover_video-open');
            hoverEffClose.classList.remove('panel_close');
            aosLbT.classList.remove('aos-lb_t-c');
            textC.classList.remove('text-c2');
            quickBtnC.classList.remove('quickBtn-c-1');
            quickBtnC2.classList.add('quickBtnC2-1')

            if (quickBtnC2) {
                quickBtnC2.style.display = 'flex';
            }
        } else if (quickBtnC2) {
            const aosNone = panel.querySelector('.aos-none');
            const hoverVideo = panel.querySelector('.hover_video');
            const videoClick = panel.querySelector('.aos-a-c');
            const hoverEffClose = panel.querySelector('.hover--eff');
            const aosLbT = panel.querySelector('.aos-lb_t');
            const textC = panel.querySelector('.text-c');

            aosNone.style.display = 'none';
            hoverVideo.style.display = 'block';
            videoClick.classList.add('aos-a-c_close');
            hoverVideo.classList.add('hover_video-open');
            hoverEffClose.classList.add('panel_close');
            aosLbT.classList.add('aos-lb_t-c');
            textC.classList.add('text-c2');
            quickBtnC.classList.add('quickBtn-c-1');
            quickBtnC2.classList.remove('quickBtnC2-1')
            quickBtnC.style.display = 'block';
            quickBtnC2.style.display = 'none';
        }
    }
});
