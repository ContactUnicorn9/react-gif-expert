import { useState } from "react"

export const AddCategory = ({onAddCategory}) => {

    const [InputValue, setInputValue] = useState('One Punch')

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (InputValue.trim().length <= 1) return;
        onAddCategory(InputValue.trim())

        setInputValue("");
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={InputValue}
                onChange={onInputChange}>

            </input>
        </form>
    )
}
