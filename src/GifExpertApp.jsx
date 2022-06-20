import { useState } from "react"
import { AddCategory, GifGrid } from "./components/"

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(["Hunter X Hunter"])

    const onNewCategory = ( newCategorie ) => {
        if ( categories.includes(newCategorie) ) return;
        setcategories([...categories, newCategorie]);
    }

    return (
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
            onAddCategory={
                onNewCategory
            }/>

            {/* Listado de GIF */}
            { categories.map((category) => (
                <GifGrid key={ category } category={ category }/>
                )) 
            }
        </>
    )
}
