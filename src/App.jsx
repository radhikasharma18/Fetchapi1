import { useState,useEffect } from "react";
import { getRandomJokes } from '/src/api/index.js';
import Random from "./components/Random";

function App(){
  const [data,setData]=useState(null);
 
 useEffect(() => {
  getRandomJokes().then((joke) => setData(joke));
}, []);

const refresh = () => {
  getRandomJokes().then((joke) => setData(joke));
};


return(
  <div className="App">
   {<Random data={data}/>}
   <button onClick={refresh}>Get new Joke</button>
  </div>
);
}
export default App;