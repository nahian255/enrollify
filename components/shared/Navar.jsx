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
                    <Link className="p-4" href={'course'}>course</Link>
                    <Link href={'about'}>About</Link>
                    <Link className="p-4" href={'blog'}>Blog</Link>
                    <Link className="p-4" href={'extra'}>Extra</Link>
                </div>
            </nav>
        </div>
        </div>
    );
};

export default Navbar;