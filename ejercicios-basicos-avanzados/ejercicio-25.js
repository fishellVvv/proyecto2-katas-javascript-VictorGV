const movies = [
  { title: "The Matrix", releaseYear: 1999 },
  { title: "Star Wars: Episode IV – A New Hope", releaseYear: 1977 },
  { title: "Inception", releaseYear: 2010 },
  { title: "Jurassic Park", releaseYear: 1993 },
  { title: "The Shawshank Redemption", releaseYear: 1994 },
  { title: "Pulp Fiction", releaseYear: 1994 },
  { title: "Avatar", releaseYear: 2009 },
  { title: "The Dark Knight", releaseYear: 2008 },
  { title: "Fight Club", releaseYear: 1999 },
  { title: "Forrest Gump", releaseYear: 1994 },
];

let oldMovies = 0;
for (const movie of movies) {
  if (movie.releaseYear < 2000) {
    oldMovies++;
  }
}

console.log(
  "En el listado hay " +
    oldMovies +
    " películas anteriores al año 2000 y " +
    (movies.length - oldMovies) +
    " películas posteriores."
);
