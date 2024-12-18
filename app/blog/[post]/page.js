import React from 'react'

const page = ({ params }) => {
    return (
        <div>
            <h1>post : {params.post} </h1>
        </div>
    )
}

export default page
