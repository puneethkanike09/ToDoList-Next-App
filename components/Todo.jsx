import React from 'react'

const Todo = ({ id, title, description, mongoId, complete, deleteTodo }) => {
    return (
        <tr>
            <td className="border border-gray-300 px-4 py-2">{id + 1}</td>
            <td className="border border-gray-300 px-4 py-2">{title}</td>
            <td className="border border-gray-300 px-4 py-2">{description}</td>
            <td className="border border-gray-300 px-4 py-2">{complete ? "Completed" : "Not Completed"}</td>
            <td className="border border-gray-300 px-4 py-2 flex gap-1">
                <button onClick={() => deleteTodo(mongoId)} className='py-2 px-4 bg-red-500 text-white'>Delete</button>
                <button className='py-2 px-4 bg-green-500 text-white'>Done</button>
            </td>
        </tr>
    )
}

export default Todo
