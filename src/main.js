async function getTrendingMoviesPreview() {
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=" + API_KEY
  );
  const data = await response.json();

  const movies = data.results;

  movies.map((movie) => {
    const trendigPreviewMoviesContainer =
      document.querySelector("#trendingPreview");
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("card");

    const movieImg = document.createElement("img");
    movieImg.classList.add("movie-img");
    movieImg.setAttribute("alt", movie.title);
    movieImg.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300" + movie.poster_path
    );

    movieContainer.appendChild(movieImg);
    trendigPreviewMoviesContainer.appendChild(movieContainer);
  });
}

getTrendingMoviesPreview();
