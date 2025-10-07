// index.js

// ✅ Load username from localStorage (if user logged in)
document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("loggedInUser");
  if (username) {
    document.getElementById("username-display").textContent = username;
  }

  // ✅ Fetch movies from movies.json
  fetch("movies.json")
    .then(response => response.json())
    .then(data => {
      loadTopPick(data.topPick);
      loadRecommendedMovies(data.recommended);
    })
    .catch(err => console.error("Error loading movies.json:", err));
});

// ✅ Load Top Pick movie
function loadTopPick(movie) {
  const topMovieContainer = document.getElementById("topmovie");
  topMovieContainer.innerHTML = `
    <div class="top-movie-container">
      <img src="${movie.image}" alt="${movie.title}">
      <a href="booking.html?movie=${encodeURIComponent(movie.title)}" class="quickly-button"></a>
    </div>
  `;
}

// ✅ Load Recommended Movies
// ✅ Load Recommended Movies
function loadRecommendedMovies(movies) {
  const moviesContainer = document.getElementById("recommended-movies");
  moviesContainer.innerHTML = ""; // clear first

  movies.forEach(movie => {
    let imgSrc = movie.image || movie["movie image"]; // handle both cases
    moviesContainer.innerHTML += `
      <div class="movie">
        <img src="${imgSrc}" alt="${movie.title}">
        <div class="movie-card">
          <div class="movie-desc">
            <h3>${movie.title}</h3>
            <div><button class="booknow" type="button" onclick="location.href='./booking.html'">Book Now</button>
</div>
          </div>
        </div>
      </div>
    `;
  });
}

