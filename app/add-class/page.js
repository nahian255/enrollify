'use client'
import React, { useState } from 'react';
import Modal from '@/components/modal/Modal'; // Import the Modal component

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

    const [modalMessage, setModalMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

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
                setModalMessage('Course added successfully!');
                setShowModal(true);
                setFormData({
                    id: '',
                    title: '',
                    description: '',
                    duration: '',
                    difficulty: '',
                    instructor: '',
                    price: '',
                    image: ''
                });
            } else {
                setModalMessage(`Error adding course: ${result.error}`);
                setShowModal(true);
            }
        } catch (error) {
            setModalMessage(`Error adding course: ${error.message}`);
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setModalMessage('');
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
            <h1 className="text-center text-4xl font-serif font-semibold">
               Add New <span className="text-purple-500">Course</span> Here
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-bold mb-2">ID:</label>
                    <input type="number" name="id" value={formData.id} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Title:</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Description:</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Duration:</label>
                    <input type="text" name="duration" value={formData.duration} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Difficulty:</label>
                    <input type="text" name="difficulty" value={formData.difficulty} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Instructor:</label>
                    <input type="text" name="instructor" value={formData.instructor} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Price:</label>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Image URL:</label>
                    <input type="url" name="image" value={formData.image} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                </div>
                <button type="submit" className="w-full py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">Add Course</button>
            </form>
            {showModal && <Modal message={modalMessage} onClose={closeModal} />}
        </div>
    );
};

export default AddClass;
