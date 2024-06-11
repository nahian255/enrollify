'use client'
import React, { useState } from 'react';

const AddClass = () => {

    const [formData, setFormData] = useState({
        id: '',
        title: '',
        description: '',
        duration: '',
        difficulty: '',
        instructor: '',
        price: '',
        image: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData)

        try {
            const response = await fetch('/api/courses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            if (response.ok) {
                // Handle successful submission (e.g., show a success message or redirect)
                console.log('Course added successfully:', result);
            } else {
                // Handle error response
                console.error('Error adding course:', result);
            }
        } catch (error) {
            console.error('Error adding course:', error);
        }
    };

    return (
        <div>
            <h1>Add Class</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ID:</label>
                    <input type="number" name="id" value={formData.id} onChange={handleChange} required />
                </div>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} required />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} required />
                </div>
                <div>
                    <label>Duration:</label>
                    <input type="text" name="duration" value={formData.duration} onChange={handleChange} required />
                </div>
                <div>
                    <label>Difficulty:</label>
                    <input type="text" name="difficulty" value={formData.difficulty} onChange={handleChange} required />
                </div>
                <div>
                    <label>Instructor:</label>
                    <input type="text" name="instructor" value={formData.instructor} onChange={handleChange} required />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} required />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input type="url" name="image" value={formData.image} onChange={handleChange} required />
                </div>
                <button type="submit">Add Course</button>
            </form>
        </div>
    );
};

export default AddClass;
