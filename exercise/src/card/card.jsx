import styles from "./cardstyle.module.css"
import {Link} from "react-router-dom"


function Card({label,keys,func}){

    function func(){
        console.log("func clicked");
        // <Link to="/all"></Link>
    }

    return(
        <>
        {/* <div className={styles.card} key={keys} onClick={func}> */}
        <Link to="/all" className={styles.card}>
        <div>
             <img src="https://cdn.icon-icons.com/icons2/1508/PNG/512/accerciser_103989.png"></img>
            <p>{label}</p>
        </div>
        </Link>
        {/* </div> */}
        </>
    )
}


export default Card;