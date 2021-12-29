import {useState,useEffect} from "react";
import Movie from "../component/Movie";
import styles from "./Home.module.css";

function Home(){
    const [loading,setLoading] = useState(true);
    const [movies,setMovies] = useState([]);
    const getMovie = async () => {
      const json = await (
        await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
        ).json();
      setMovies(json.data.movies);
      setLoading(false);
    }
    useEffect(() => {
      getMovie();
    },[]);
    return(
      <div className={styles.container}>
        {loading ? <h1>loading</h1> :null}
        
        {movies.map((movie)=>
          <Movie 
            id={movie.id}
            key={movie.id}
            summary={movie.summary}
            title={movie.title}
            coverImg={movie.medium_cover_image}
            genres={movie.genres}
          />
        )}
      </div>
    );
}
export default Home;