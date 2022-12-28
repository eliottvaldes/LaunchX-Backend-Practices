import React from 'react'

// get the data inside the comp
const Checkbox = (props) => {

    const {data, onChange} = props

    console.log(onChange, data.id)

    const changeStatus = (e) => {
        data.done = !data.done
        console.log(data.done)
    }

    return (
        <div>
            <p className={data.done ? 'task-done' : 'task-pending'}> 
                {data.description} 
            </p>
            <input type="checkbox" onClick={changeStatus} value={data.id} name={data.description} />
            <hr/>
        </div>
    )
}

export default Checkbox