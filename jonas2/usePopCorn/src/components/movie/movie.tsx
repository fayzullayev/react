type MovieProps = {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
};

function Movie({ imdbID, Poster, Title, Year }: MovieProps) {
  return (
    <li key={imdbID}>
      <img src={Poster} alt={`${Title} poster`} />
      <h3>{Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{Year}</span>
        </p>
      </div>
    </li>
  );
}

export default Movie;
