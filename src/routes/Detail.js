import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Movie from "../component/Movie";

function Detail(){
    const [loading,setLoading] = useState(true);
    const [movie,setMovie] = useState([]);
    const {id} = useParams();
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setLoading(false);
        setMovie(json.data.movie);
        console.log(movie);
    }
    useEffect(() => {
        getMovie();
    },[]);
    return (
        <>
            {loading? <h1>loading</h1>: null }
            <Movie 
                id={movie.id}
                key={movie.id}
                summary={movie.description_intro}
                title={movie.title}
                coverImg={movie.medium_cover_image}
                genres={movie.genres}
            />
        </>
    );
}
export default Detail;