// import { useEffect, useState } from "react"
// import { getGifts } from "../helpers/getGifs"
import { GifItem } from "./gifItem"
import { useFethcGifs } from "../hooks/useFethcGifs"


export const GifGrid = ({ category }) => {
  
  // const [counter, setcounter] = useState(10)

  const {images, isLoading} = useFethcGifs(category)
  // console.log({images, isLoading})
  


  return (
    <>
      <h3>{category}</h3>
      {/* <h3>{counter}</h3> */}
      {/* <button onClick= { () => setcounter(counter+1)} >+1</button> */}


      { isLoading &&  <h2>Cargando...</h2>}

      <div className="card-grid">
        {/* imgenes.map... */}
        {images.map((image) => (
          <GifItem 
          key={image.id}
         { ...image }/>
        ))}
      </div>

    </>
  )

}
