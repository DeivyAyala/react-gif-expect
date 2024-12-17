import { useEffect, useState } from "react"
import { getGifts } from "../helpers/getGifs"


export const useFethcGifs = (category) => {
  
    const [images, setimages] = useState([])
    const [isLoading, setisLoading] = useState(true)


    const getImages = async () => {
    const newImages = await getGifts(category)
    setimages(newImages)
    setisLoading(false)
  }

  useEffect(() => {
    getImages()
  }, [])

    return {
        images: images,
        isLoading: isLoading
    }
}
