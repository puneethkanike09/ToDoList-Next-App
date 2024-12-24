const Todo = ({ id, title, description, mongoId, complete, deleteTodo, completeTodo, loading }) => {
    return (
        <tr>
            <td className="border border-gray-300 px-4 py-2">{id + 1}</td>
            <td className={`border border-gray-300 px-4 py-2 ${complete ? "line-through" : ""}`}>{title}</td>
            <td className={`border border-gray-300 px-4 py-2 ${complete ? "line-through" : ""}`}>{description}</td>
            <td className="border border-gray-300 px-4 py-2">{complete ? "Completed" : "Not Completed"}</td>
            <td className="border border-gray-300 px-4 py-2 flex gap-1">
                <button
                    onClick={() => deleteTodo(mongoId)}
                    className="py-2 px-4 bg-red-500 text-white"
                    disabled={loading.delete === mongoId}
                >
                    {loading.delete === mongoId ? "Deleting..." : "Delete"}
                </button>
                {!complete && (
                    <button
                        onClick={() => completeTodo(mongoId)}
                        className="py-2 px-4 bg-green-500 text-white"
                        disabled={loading.complete === mongoId}
                    >
                        {loading.complete === mongoId ? "Completing..." : "Done"}
                    </button>
                )}
            </td>
        </tr>
    );
};

export default Todo;
