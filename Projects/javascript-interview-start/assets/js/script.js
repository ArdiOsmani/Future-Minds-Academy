const movieGernes = document.querySelector('.movieGernes');
const listMovies = document.querySelector('.movielist');
const movieDetailsPage = document.querySelector('.movie-details-page');
let index = 0

movieGernes.addEventListener('click', ()=>{
    listAllMovies(movieGernes.value);
});

function buildGenres() {
    let movieList = "";
    let i = 0;
    allMovies.forEach(item => {

        movieList += `<option value="${i}">${item.gerne}</option>`;
        i++;
    });
    movieGernes.innerHTML = movieList;
}

function listAllMovies(index) {
    let allListMovies = "";

    for (let i = 0; i < allMovies[index].movies.length; i++) {
        let movie = allMovies[index].movies[i];

        allListMovies += `<li onclick="revealMovie(${index}, ${i})">
        <h4>${movie.title}</h4>
        <img src="assets/img/${movie.thumb}" alt="${movie.title}">
        <p class="description">${movie.desc}</p>
        <div class="row movie-stats m0 p0">
            <div class="col m0 p0">Date: <span>${movie.date}</span> </div>
            <div class="col m0 p0">Length: <span>${movie.length}</span> </div>
        </div>
    </li>`;
    }

    listMovies.innerHTML = allListMovies;
}

function revealMovie(index, i) {
    let movie = allMovies[index].movies[i];
    let movieShow = `
    <h1>${movie.title} (2023)</h1>
    <h4>Date: ${movie.date} | Length: ${movie.length}min</h4>
    <div class="container">
    ${movie.trailer}
    </div>

    <h4>Gerard Butler, Mike Colter, Tony Goldwyn, Yoson An</h4>
    <p>${movie.desc}</p>
    `;



    movieDetailsPage.innerHTML = movieShow;
}


function changeMovieInterval(){


    for (let i = 0; i < allMovies[movieGernes.value].movies.length; i++) {
        let movie = allMovies[movieGernes.value].movies[i];
    
        setTimeout(() => {
            movieDetailsPage.innerHTML = `
                <h1>${movie.title} (2023)</h1>
                <h4>Date: ${movie.date} | Length: ${movie.length}min</h4>
                <div class="container">
                    ${movie.trailer}
                </div>
    
                <h4>Gerard Butler, Mike Colter, Tony Goldwyn, Yoson An</h4>
                <p>${movie.desc}</p>
            `;
        }, 1000);
    }


  /*  allMovies[movieGernes.value].movies.forEach(movie=>{
        setTimeout(()=>{
            movieDetailsPage.innerHTML = `
            <h1>${movie.title} (2023)</h1>
            <h4>Date: ${movie.date} | Length: ${movie.length}min</h4>
            <div class="container">
            ${movie.trailer}
            </div>
        
            <h4>Gerard Butler, Mike Colter, Tony Goldwyn, Yoson An</h4>
            <p>${movie.desc}</p>
            `;
            
        }, 500)
        console.log('hello');
    })  
    */
}


listAllMovies(0);

buildGenres();