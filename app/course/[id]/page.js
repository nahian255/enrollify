import React from 'react';

const courses = [
   {
    id : 1 ,
    name :"lmarai",

   },
   {
    id : 2 ,
    name :"Almarai",

   },

        // Add more courses as needed
];


const courseDetails = async ({params}) => {
    const {id}= params
    // console.log(courses.id) 

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const data = await res.json();
    console.log(data) 


    // const singleData = data.find( ({ id }) => id === id )
    // const singleData = data.find(user => user.id === params.id);
    // console.log(singleData) 


    return (
        <div>
            <h1> course Details page </h1>
            <p> showing the course id number- {id}</p>
            <p> name : {data.name}</p>
        </div>
    );
};

export default courseDetails;