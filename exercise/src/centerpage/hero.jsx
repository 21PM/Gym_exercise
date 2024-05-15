import styles from "../styles.module.css"
import Card from "../card/card";
import {Link} from "react-router-dom"


function Hero(){


    // function  getallexercise(){
    //     console.log("clicked");
    //     <Link to="/all"></Link>
    // }

    return(
        <div className={styles.HeroDiv}>
                <h1 style={{textAlign:"center"}}>Awesome Exercise you <br></br>should know</h1>

            <div className={styles.inputDiv}>
                    <input type="text" placeholder="Search Exercise"></input>
                    <button>Search</button>
            </div>

            <div className={styles.cardOuterdiv}>
            <Card label={"All"} keys={"all"}/>
            <Card label={"Back"}  keys={"back"}/>
            <Card label={"Cardio"}  keys={"cardio"}/>
            <Card label={"Chest"}  keys={"chest"}/> 
            </div>

        </div>
    )
}


export default Hero;