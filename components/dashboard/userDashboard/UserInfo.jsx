'use client'
import useCurrentUser from '@/components/hookes/UseCurrentUser';
import Link from 'next/link';
import React from 'react'

export const UserInfo = () => {

    const currentUser = useCurrentUser();

  return (
    <div>
          {currentUser ? (
                    <div className='p-8'>
                        <p><strong>Username:</strong> {currentUser.user.username}</p>
                        <p><strong>Email:</strong> {currentUser.user.email}</p>
                        <hr className='my-4 border-2 border-green-500 urplerounded' />

                        <div className='flex flex-col gap-2'>
                            <Link href="/dashboard/profile">
                                <button className='bg-purple-500 text-white py-4 w-full rounded hover:bg-purple-600 transition-colors'>
                                    My Profile
                                </button>
                            </Link>
                            <Link href="/dashboard/payment-history">
                                <button className='bg-green-500 text-white py-4 w-full rounded hover:bg-green-600 transition-colors'>
                                    Payment History
                                </button>
                            </Link>
                            <Link href="/dashboard/allclasses">
                                <button className='bg-purple-500 text-white py-4 w-full rounded hover:bg-purple-600 transition-colors'>
                                    All Classes
                                </button>
                            </Link>
                            <Link href="/dashboard/user-review">
                                <button className='bg-green-500 text-white py-4 w-full rounded hover:bg-green-600 transition-colors'>
                                  Add Review
                                </button>
                            </Link>
                        </div>

                    </div>
                ) : (
                    <div className='p-6'>
                        <p>Loading user information...</p>
                    </div>

                )}
    </div>
  )
}
