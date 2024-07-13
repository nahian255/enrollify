'use client';

import { useState, useEffect } from 'react';

const useCurrentUser = () => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const user = localStorage.getItem('currentUser');
        if (user) {
            setCurrentUser(JSON.parse(user));
        }
    }, []);

    return currentUser;
};

export default useCurrentUser;
