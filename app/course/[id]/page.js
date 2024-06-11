import React from 'react';

const CourseDetails = async ({ params }) => {
    const { id } = params;
    const res = await fetch(`http://localhost:3000/api/courses/${id}`);
    const data = await res.json();

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Course Details</h1>
            <h2>{data.title}</h2>
            <img src={data.image} alt={data.title} style={{ maxWidth: '100%', maxHeight: '300px', marginBottom: '20px' }} />
            <p><strong>Description:</strong> {data.description}</p>
            <p><strong>Instructor:</strong> {data.instructor}</p>
            <p><strong>Duration:</strong> {data.duration}</p>
            <p><strong>Difficulty:</strong> {data.difficulty}</p>
            <p><strong>Price:</strong> ${data.price}</p>
        </div>
    );
};

export default CourseDetails;


