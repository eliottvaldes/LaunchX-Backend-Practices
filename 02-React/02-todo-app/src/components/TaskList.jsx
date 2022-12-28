import React from 'react'
import Checkbox from './Checkbox'

const TaskList = (props) => {

    const {list, setList} = props    

    // manage onChangeStatus
    const onChangeStatus = (e) => {
        const {name, checked} = e.target
        const updateList = list.map(item => ({
            ...item, 
            done: item.id === name ? checked : item.done
        }))
        setList(updateList)
    }

    const onClickRemoveItem = (e) => {
        const updateList = list.filter(item => item.done)
        setList(updateList)
        console.log({list})
    }

    const checkbox = list.map(item => (
        <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
    ))


    return (
        <div className='todo-list'>
            {list.length ? checkbox : "There isn't any task yet"}

            {list.length ? (
                <p>
                    <button className='button-blue' onClick={onClickRemoveItem}> Delete</button>
                </p>
            ) : null}
        </div>
    )
}


export default TaskList