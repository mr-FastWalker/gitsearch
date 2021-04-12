import React from 'react';

const Error = (props) => {
    return (
        <div>
            <button onClick={() => props.history.push('/')} >GO TO MAIN PAGE</button>
            ERROR
        </div>
    );
};

export default Error;