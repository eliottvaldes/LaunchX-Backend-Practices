import React, {useState} from 'react'

// get the props
const FormTodo = (props) => {

    // using use state to get variables
    const [description, setDescription] = useState('')
    // define a method setItem from props
    const {setItem} = props

    // function to prevent default behavior at form submit
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(description)

        // set new Item
        
        setItem({
            done: false,
            id: (+new Date()).toString(),
            description
        })

        // clear description
        setDescription('')
    }

    return (
        <div>
            {/* implement prevent default f' */}
            <form onSubmit={handleSubmit}>
                <div className='todo-list'>
                    <div className='input'>
                        <input 
                        type='text'
                        className='input'
                        value={description}
                        // implement an event to setDescription
                        onChange={e => setDescription(e.target.value)}
                        />
                        <button
                        className='button-blue'
                        disabled={!description}
                        >
                            Add task
                        </button>

                        
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormTodo