import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
              <div>
            <nav className="flex justify-between bg-slate-400 p-6">
                <h1>logo</h1>
                <div>
                    <Link className="p-4" href={'/'}>Home</Link>
                    <Link className="p-4" href={'/course'}>course</Link>
                    <Link href={'/add-class'}>Add Class</Link>
                    <Link className="p-4" href={'/blog'}>Blog</Link>
                    {/* <Link href={'/about'}>About</Link> */}
                    <Link href={'/pricing'}>Pricing</Link>
                    {/* <Link className="p-4" href={'/extra'}>Extra</Link> */}
                </div>
            </nav>
        </div>
        </div>
    );
};

export default Navbar;