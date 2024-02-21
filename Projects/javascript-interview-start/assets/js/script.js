const movieGernes = document.querySelector('.movieGernes');
const listMovies = document.querySelector('.movielist');
let index=0

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

        allListMovies += `<li>
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

listAllMovies(0);

buildGenres();