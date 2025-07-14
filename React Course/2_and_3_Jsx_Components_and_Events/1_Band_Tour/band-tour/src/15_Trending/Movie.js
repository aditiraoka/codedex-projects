export default function Movie(props){
    return (
        <div className="movie">
            <img src={props.imageUrl} alt={props.title} />
            <div className="movie-info">
                <h3>{props.title}</h3>
                <h4>Release in {props.releaseYear}</h4>
            </div>
        </div>
    );
}