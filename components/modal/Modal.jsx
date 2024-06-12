import React from 'react';

const Modal = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-5 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Notification</h2>
                <p>{message}</p>
                <button onClick={onClose} className="mt-4 py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
