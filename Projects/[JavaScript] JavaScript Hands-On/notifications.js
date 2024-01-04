let intervalsTitle;
let title1 = document.title;
let favicon1 = document.querySelector('link[rel="icon"]').href;

function startNotification(text) {

    let favicon = document.querySelector('link[rel="icon"]');

    intervalsTitle = setInterval(() => {
        if (document.title == title1) {
            document.title = text;
            favicon.href = 'bell.png';
        } else if (document.title == text) {
            document.title = title1;
            favicon.href = 'insta.png';
        }
    }, 1000);
}

function endNotification() {
    document.title = title1;
    let favicon = document.querySelector('link[rel="icon"]').href=favicon1;
    clearInterval(intervalsTitle);
}

