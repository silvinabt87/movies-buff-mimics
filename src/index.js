import "./styles.css";
import "/index.html";

// document.getElementById("getMovie").innerHTML=
function getRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomGenre() {
  const genres = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];
  return getRandom(genres).id;
}

function randomSortBy() {
  const values = [
    "popularity.asc",
    "popularity.desc",
    "release_date.asc",
    "release_date.desc",
    "revenue.asc",
    "revenue.desc",
    "primary_release_date.asc",
    "primary_release_date.desc",
    "original_title.asc",
    "original_title.desc",
    "vote_average.asc",
    "vote_average.desc",
    "vote_count.asc",
    "vote_count.desc",
  ];
  return getRandom(values);
}
/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomQueryParams() {
  const page = getRandomInt(1, 5);
  const sortBy = randomSortBy();
  const withGenres = getRandomGenre();
  return `page=${page}&sort_by=${sortBy}&with_genres=${withGenres}`;
}

function getMovie() {
  const queryParam = getRandomQueryParams()
  const url =
    `https://api.themoviedb.org/3/movie/popular?api_key=4bb244c6458b3ac69d076d9cff9adb88&language=es&${queryParam}`;

  fetch(url)
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      console.log(data);
      const movies = data.results;
      const movie = getRandom(movies);
      const title = movie.title;
      const originalTitle = movie.original_title;
      const posterPath = movie.poster_path;
      const imageUrl = `https://image.tmdb.org/t/p/w200/${posterPath}`;
      const newHTML = `
      <div class="movie-found">
        <img src="${imageUrl}"/>
        <h3>${title}</h3>
        <p>${originalTitle}<p>

      </div>
      `;
      document.getElementById("movie-output").innerHTML = newHTML;
    })
    .catch(function (err) {
      alert(err);
    });
}

document.getElementById("movie-button").onclick = getMovie;
