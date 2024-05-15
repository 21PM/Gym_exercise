import { useEffect, useState } from "react";
import styles from "../styles.module.css";
import axios from "axios";
import {Fetchdata} from "../instance"

function Allcard() {
  const [Data, Setdata] = useState([]);

  useEffect(() => {
    Fetchdata() 
    .then((data)=>{
      Setdata(data)
      // console.log(data);
    })  
    .catch(console.log)
  }, [Data]);


  console.log(Data);

  return (
    <>

     {/* <h1>exercies</h1> */}

     
      {
        Data.length === 0 ? <h2>Loading ....</h2> :
        <div>
      {Data.map((ele) => {
            return(
             
                <div className={styles.allcarddiv}>
                   
                <div className={styles.gifdiv}>
                  <img src={ele.gifUrl}></img>
                </div>
                <div className={styles.muscletype}>
                  <span className={styles.sp1}>{ele.bodyPart}</span>
                  <span className={styles.sp2}>{ele.target}</span>
                </div>
      
                <div className={styles.discription}>
                  <h2>{ele.name}</h2>
                </div>
              </div>
            )
      })}</div>
       }
 
    
    </>
  );
}

export default Allcard;
