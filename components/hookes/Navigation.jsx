'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

const useNavigation = () => {
    const router = useRouter();

    const navigateBasedOnAuth = useCallback(() => {
        const user = localStorage.getItem('currentUser');
        if (user) {
            router.push('/pricing');
        } else {
            router.push('/login');
        }
    }, [router]);

    return { navigateBasedOnAuth };
};

export default useNavigation;
