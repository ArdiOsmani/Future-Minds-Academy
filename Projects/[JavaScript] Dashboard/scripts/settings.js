export function settings() {

    let setGreen = document.getElementById('set-green');
    let setPurple = document.getElementById('set-purple');
    let setBlue = document.getElementById('set-blue');
    let setOrange = document.getElementById('set-orange');

    setGreen.addEventListener('click', ()=>{
        setGreen.classList.add('with-border');
        setPurple.classList.remove('with-border');
        setBlue.classList.remove('with-border');
        setOrange.classList.remove('with-border');
        document.documentElement.style.setProperty('--active-color', 'green');
    })

    setPurple.addEventListener('click', ()=>{
        setGreen.classList.remove('with-border');
        setPurple.classList.add('with-border');
        setBlue.classList.remove('with-border');
        setOrange.classList.remove('with-border');
        document.documentElement.style.setProperty('--active-color', 'purple');
    })

    setBlue.addEventListener('click', ()=>{
        setGreen.classList.remove('with-border');
        setPurple.classList.remove('with-border');
        setBlue.classList.add('with-border');
        setOrange.classList.remove('with-border');
        document.documentElement.style.setProperty('--active-color', 'lightblue');
    })

    setOrange.addEventListener('click', ()=>{
        setGreen.classList.remove('with-border');
        setPurple.classList.remove('with-border');
        setBlue.classList.remove('with-border');
        setOrange.classList.add('with-border');
        document.documentElement.style.setProperty('--active-color', 'orangered');
    })

    let img1 = document.getElementById('img-1');
    let img2 = document.getElementById('img-2');

    img1.addEventListener('click', ()=>{
        img1.classList.add('with-border');
        img2.classList.remove('with-border');
        document.documentElement.style.setProperty('--leftmenu-background-image', 'url(images/sidebar-1.jpg)');
    })

    img2.addEventListener('click', ()=>{
        img2.classList.add('with-border');
        img1.classList.remove('with-border');
        document.documentElement.style.setProperty('--leftmenu-background-image', 'url(images/sidebar-2.jpg)');
    })

}