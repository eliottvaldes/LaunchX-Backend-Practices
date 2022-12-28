import React, { useState } from 'react'
import FormTodo from './FormTodo'
import TaskList from './TaskList'

const Container = () => {

    // craete variables useing useState
    const [list, setList] = useState([])

    // craete a f' to save item in list
    const setItem = (setItem) => {
        setList([list, setItem])
    }

    return (
        <div>
            {/* pass the setItem props to children */}
            <FormTodo setItem={setItem} />
            <TaskList list={list} setList={setList} />
        </div>
    )
}

export default Container