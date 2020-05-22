import "./styles.css";
import "/index.html";

// document.getElementById("getMovie").innerHTML=
function getRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getMovie() {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=4bb244c6458b3ac69d076d9cff9adb88&language=es&page=1";

  fetch(url)
    .then(result => {
      return result.json();
    })
    .then(data => {
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
    .catch(function(err) {
      alert(err);
    });
}

document.getElementById("movie-button").onclick = getMovie;
