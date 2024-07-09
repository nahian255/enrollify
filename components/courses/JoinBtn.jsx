'use client';

import React from 'react';
import useNavigation from '@/components/hookes/Navigation' ;


const JoinButton = () => {
    const { navigateBasedOnAuth } = useNavigation();

    return (
        <button
            onClick={navigateBasedOnAuth}
            className="bg-purple-500 text-white py-2 px-4 rounded mt-4 hover:bg-purple-600"
        >
            Join Now
        </button>
    );
};

export default JoinButton;
