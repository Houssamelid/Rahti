import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Searchfilter from './searchfilter';
import UserNav from './UserNav';
import { getUserId } from '@/app/lib/actions';

import AddPropertyButton from './AddPropertyButton';


const Navbar = async () => {
    const userId = await getUserId();
    return (
        <nav className='w-full fixed top-0 left-0 py-6 bg-white z-10 shadow-md'>
            <div className='max-w-[1500px] mx-auto px-6'>
                <div className='flex justify-between items-center'>
                    {/* Logo Section */}
                    <Link href='/'>
                        <Image src="/logo.png" alt="Logo" width={180} height={38} />
                    </Link>

                    {/* Searchfilter Component */}
                    <div className="flex flex-1 justify-center">
                        <Searchfilter />
                    </div>

                    {/* User and Add Property Section */}
                    <div className='flex items-center space-x-6'>
                        <AddPropertyButton/>
                        <UserNav
                            userId= {userId}
                        
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
