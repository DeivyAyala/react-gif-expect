import { useState } from "react"

    
export function AddCategory({onAddCategory}) {
    const value = ''
    const [inputValue, setinputValue] = useState(value)

    const onInputChange = (event)=>{
        setinputValue(event.target.value)
        // console.log(event.target.value)
    }   

    const onSubmit = (event) =>{
        event.preventDefault(); // Para que no se recarge el from
        const newCategory = inputValue.trim();
        if (newCategory.length <= 1) return; //Regresa si en el input hay menos de 2 caracteres
        // setCategories(...inputValue)
        onAddCategory(inputValue);
        setinputValue(''); //Limpia el Input
    }


  return (
    <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="Escribe tu gif"
            value={inputValue}
            // onChange={event => onInpuntChange(event)}
            onChange={onInputChange}
        />
        {/* <button onClick={AddCategory}>Agregar</button> */}
    </form>
  )
}
