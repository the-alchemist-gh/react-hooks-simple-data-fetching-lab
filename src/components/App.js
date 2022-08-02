// create your App component here
import React,{useEffect, useState} from "react";


function App(){
  const[image, setImage] = useState("")
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then((r) => setImage(r.message))
  },[])

  return (
    <div>
      {
        (image!=="")?<img src={image} alt="A Random Dog"/> : <p>Loading...</p>
      }
    </div>
    
    
  )
}

export default App;