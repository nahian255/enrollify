import React from 'react';

const courseDetails = ({params}) => {
    const {id}= params
    return (
        <div>
            <h1> course Details page </h1>
            <p> showing the course id number- {id}</p>
        </div>
    );
};

export default courseDetails;