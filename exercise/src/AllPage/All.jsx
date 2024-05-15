import styles from "../styles.module.css"
import Allcard  from "./allcard";
function All(){
    return(
        <div className={styles.alldiv}>
            <h1>Showing results</h1>
                <div className={styles.allinnerdiv}>

                    <Allcard/>
                    <Allcard/>
                    <Allcard/>
                </div>

        </div>
    )
}

export default All;