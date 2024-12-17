export const getGifts = async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=wPwowEy4Ju6cCgqfn6NOYo3yhI8wLYo6&q=${category}&limit=30`
    const resp = await fetch(url)
    const { data } = await resp.json()
    const gifs = data.map((img)=> ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    // console.log(gifs);
    return gifs;
}
