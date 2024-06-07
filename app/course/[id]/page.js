import React from 'react';

const courseDetails = async ({params}) => {
    const {id}= params
    console.log(params.id) 

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    // console.log(data?.id) 


    // const singleData = data.find( ({ id }) => id === id )
    const singleData = data.find(user => user.id === params.id);
    console.log(singleData) 


    return (
        <div>
            <h1> course Details page </h1>
            <p> showing the course id number- {id}</p>
        </div>
    );
};

export default courseDetails;