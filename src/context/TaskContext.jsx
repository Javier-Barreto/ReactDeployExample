import { createContext, useState, useEffect } from "react"
import {tasks as data} from '../tasks.js'


export const TaskContext = createContext()

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(data)
    }, [])

    const createTask = (taskTitle, taskDescription) => {
        setTasks([...tasks,{
            title: taskTitle,
            id: tasks.length,
            description: taskDescription
        }
        ])
    }

    const deleteTask = (taskID) => {
        let newTasks = tasks.filter(task => task.id !== taskID)
        setTasks(newTasks)
    }

    useEffect(() => {
        setTasks(data)
    }, [])

    return (
        <TaskContext.Provider value={{
            tasks,
            deleteTask,
            createTask

            }}>
            {props.children}
        </TaskContext.Provider>
    )
}
