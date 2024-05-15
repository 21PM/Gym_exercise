import axios from "axios"




const instance =  axios.create({
    method: 'GET',
    baseURL: 'https://exercisedb.p.rapidapi.com',
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': '09f15f3113msh9e5928f61d262c9p19ad6fjsne3778de1e48a',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
})




async function Fetchdata() {
  
  try{
    const response = await instance.get("/exercises");
    return  response.data
    console.log(response);
  }
  catch(e){
    throw new Error("something went wrong ",e)
    // console.log(e);
  }

}


export {Fetchdata}
