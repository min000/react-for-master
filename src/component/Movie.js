import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id,title,coverImg,summary,genres}){
    return (
    <div className={styles.box}>
    <img src={coverImg} alt="" className={styles.thumbnail}/>
    <h2><Link to={`/movie/${id}`} className={styles.title}>{title}</Link></h2>
    <p>{summary.length > 200 ? `${summary.slice(0,200)}...` : summary}</p>
    <ul>
      {genres && genres.map((m) => 
        {
          return <li key={m}>{m}</li>;
        }
      )}
    </ul>
    </div>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    coverImg : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;