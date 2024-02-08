export function initializeSidebar() {
    console.log('hello');
    let closeElements = document.querySelectorAll('[id="data"]');
    let closeSldier = document.querySelectorAll('[class="user-slider"]');
    let icon = document.querySelectorAll('[id="icon"]');

    let slider = false;
    let menu = true;

    let user = document.getElementById('user');
    let pages = document.getElementById('pages');
    let data = document.getElementById('data');
    let forms = document.getElementById('forms');
    let table = document.getElementById('table');
    let maps = document.getElementById('maps');
    let components = document.getElementById('components');

    user.addEventListener('click', () => {
        let userSlider = document.getElementById('user-slider');

        if (menu == false) {
            return;
        }
        userSlider.classList.toggle('remove');
    });

    pages.addEventListener('click', () => {
        let userSlider = document.getElementById('pages-slider');
        if (menu == false) {
            return;
        }
        userSlider.classList.toggle('remove');
    });

    components.addEventListener('click', () => {
        console.log(slider);
        let userSlider = document.getElementById('components-slider');

        if (menu == false) {
            return;
        }
        userSlider.classList.toggle('remove');
    });

    forms.addEventListener('click', () => {
        console.log(slider);
        let userSlider = document.getElementById('forms-slider');

        if (menu == false) {
            return;
        }
        userSlider.classList.toggle('remove');
    });

    table.addEventListener('click', () => {
        console.log(slider);
        let userSlider = document.getElementById('table-slider');

        if (menu == false) {
            return;
        }
        userSlider.classList.toggle('remove');
    });

    maps.addEventListener('click', () => {
        console.log(slider);
        let userSlider = document.getElementById('maps-slider');

        if (menu == false) {
            return;
        }
        userSlider.classList.toggle('remove');
    });

    document.getElementById('close-menu').addEventListener('click', () => {
        menu = !menu;

        closeElements.forEach(element => {
            element.classList.toggle('remove');
        });

        closeSldier.forEach(element => {
            element.classList.toggle('remove');
        });

        icon.forEach(element => {
            element.classList.toggle('remove');
        });
    });
}
