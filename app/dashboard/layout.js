import { UserInfo } from '@/components/dashboard/userDashboard/UserInfo';
import React from 'react';

const dashboardLayout = ({ children }) => {
    return (
        <div className='flex p-10'>
            {/*  Information  */}
            <div className=' w-1/3 bg-purple-10 rounded-2xl'>
                <h1 className="text-4xl font-serif font-semibold text-center"> Informa<span className="text-purple-500">tion</span> </h1>
                <UserInfo />
            </div>

            {/* contenet here */}
            <div className='bg-slate-300 w-2/3'>
                {/* Add your content here */}
                {children}
            </div>
        </div>
    );
};

export default dashboardLayout;