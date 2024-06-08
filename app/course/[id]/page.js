import React from 'react';


const courseDetails = async ({params}) => {
    const {id}= params
    // console.log(courses.id) 

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    // console.log(data) 

    return (
        <div>
            <h1> course Details page </h1>
            <p> showing the course id number- {id}</p>
            <p> name : {data.name}</p>
        </div>
    );
};

export default courseDetails;