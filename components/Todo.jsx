import React from 'react'

const Todo = () => {
    return (
        <tr>
            <td className="border border-gray-300 px-4 py-2">1</td>
            <td className="border border-gray-300 px-4 py-2">Buy groceries</td>
            <td className="border border-gray-300 px-4 py-2">Milk, Bread, Eggs</td>
            <td className="border border-gray-300 px-4 py-2">Pending</td>
            <td className="border border-gray-300 px-4 py-2 flex gap-1">
                <button className='py-2 px-4 bg-red-500 text-white'>Delete</button>
                <button className='py-2 px-4 bg-green-500 text-white'>Done</button>
            </td>
        </tr>
    )
}

export default Todo
