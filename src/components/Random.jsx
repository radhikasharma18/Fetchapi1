import React from 'react'

const Random = (props) => {
    console.log(props.data)
    if (!props.data) return <div>Loading...</div>;
    return (
        <div className='jokes'>
            <h3>{props.data.type}</h3>
            <p>{props.data.setup}</p>
            <p>{props.data.punchline}</p>
            <p>{props.data.id}</p>
        </div>
    );
}

export default Random;