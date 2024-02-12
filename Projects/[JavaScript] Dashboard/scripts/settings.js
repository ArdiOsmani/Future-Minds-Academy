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
}