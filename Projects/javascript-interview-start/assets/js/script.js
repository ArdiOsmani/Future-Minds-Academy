const movieGernes = document.querySelector('.movieGernes');
let movieList = "";

allMovies.forEach(item =>{
    movieList += `<option value="${item.gerne}">${item.gerne}</option>`;
});

movieGernes.innerHTML = movieList;