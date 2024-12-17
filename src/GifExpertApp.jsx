import {useState} from 'react';
import { AddCategory, GifGrid } from './components';
// import {GifGrid }from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Puch Man'])

    const onAddCategory = (newCategory) => {
        // categories.push('Valorant');
        // setcategories([...categories, 'Valorant' ])
        if (categories.some((cat)=> cat.toLowerCase() == newCategory.toLowerCase())){
            alert(`El nombre ${newCategory} ya existe`)
            return
        }
        setcategories(cat => [ newCategory, ...cat])
    }


  return (
    <>

     <h1>GifExpertApp</h1>
    <AddCategory  onAddCategory ={onAddCategory}/>

        {
            categories.map(( category ) => (
                <GifGrid
                key={category}
                category={category} />
            ))
        }

    </>
  )
}
