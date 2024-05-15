import styles from "../styles.module.css"

function NavBar(){
    return (
        <div className={styles.navbardiv}>
        <div className={styles.logo}>
            <h2>FITGURU</h2>
        </div>
        <div className={styles.home}>
            <span>Home</span>
            <span>Exercise</span>
        </div>
</div>
    )
}


export default NavBar;
