import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Nav.module.css";

// props로 메뉴 정리하기
function Nav({index}){
    return (
      <ul className={styles.menu}>
        <li className={styles.menuItem}><Link to="/home">Movie</Link></li>
        <li className={styles.menuItem}><Link to="/CoinTracker">Coin tracker</Link></li>
        <li className={styles.menuItem}><Link to="/MinutesToHours">Hour & km</Link></li>
        <li className={styles.menuItem}><Link to>TodoList</Link></li>
      </ul>
    );
}

Nav.propTypes = {
    //id : PropTypes.number.isRequired,
}
export default Nav;