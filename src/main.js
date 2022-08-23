const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-type": "application/json;charset=utf-8",
  },
  params: {
    api_key: API_KEY,
  },
});

async function getTrendingMoviesPreview() {
  const { data } = await api("trending/movie/day");

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

async function getcategoriesPreview() {
  const { data } = await api("genre/movie/list");

  const categories = data.genres;

  categories.map((category) => {
    const PreviewCategoriesContainer =
      document.querySelector("#categoriesPreview");

    const categoryTitle = document.createElement("p");

    categoryTitle.setAttribute("id", category.name);
    const categoryTitleText = document.createTextNode(category.name);

    categoryTitle.appendChild(categoryTitleText);
    PreviewCategoriesContainer.appendChild(categoryTitle);
  });
}
