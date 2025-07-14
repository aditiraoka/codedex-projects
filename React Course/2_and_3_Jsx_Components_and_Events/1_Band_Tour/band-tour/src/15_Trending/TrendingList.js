import Movie from "./Movie.js"

export default function TrendingList(props){
    return(
        <div className="movie-list">
            <h2>Trending Now</h2>
            <div>
                {props.movies.map(function(movie){
                    return <Movie title={movie.title} releaseYear={movie.releaseYear} imageUrl={movie.imageUrl} />
                })}
            </div>
        </div>
    );
}