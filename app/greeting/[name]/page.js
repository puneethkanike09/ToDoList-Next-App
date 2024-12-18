import React from 'react'

const page = ({ params }) => {
    return (
        <div>
            <h1>nice to meet u {params.name}</h1>
        </div>
    )
}

export default page
