'use client';

import React, { useState } from 'react';
// import useNavigation from '@/components/hookes/Navigation' ;


const JoinButton = () => {
    // const { navigateBasedOnAuth } = useNavigation();

    const [loading, setLoading] = useState(false);

    const handleJoinNow = async () => {
        setLoading(true);
        const response = await fetch('/api/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: 100, // Example amount
                customer_name: 'John Doe',
                customer_email: 'john@example.com',
                customer_address: '123 Main St',
                customer_phone: '0123456789',
                product_name: 'Example Product',
            }),
        });

        const result = await response.json();
        setLoading(false);

        if (result.url) {
            window.location.href = result.url;
        } else {
            alert('Failed to initiate payment');
        }
    };

    return (
        // <button
        //     // onClick={navigateBasedOnAuth}
        //     className="bg-purple-500 text-white py-2 px-4 rounded mt-4 hover:bg-purple-600"
        // >
        //     Join Now
        // </button>

        <button
            onClick={handleJoinNow}
            className="bg-purple-500 text-white py-2 px-4 rounded mt-4 hover:bg-purple-600"
            disabled={loading}
        >
            {loading ? 'Processing...' : 'Join Now'}
        </button>
    );
};

export default JoinButton;
