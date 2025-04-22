import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <div className='bg-black text-gray-400 py-12'>
                <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
                    <div className=''>
                        <h2 className="text-1xl md:text-2xl lg:text-3xl text-white font-bold  mb-8">Meet Our
                            Instructors</h2>
                        <p className="text-base md:text-lg text-white  mb-4">Discover the talented
                            professionals who will guide your musical
                            journey</p>
                    </div>
                    <div className=''>
                        <h2 className="text-1xl md:text-2xl lg:text-3xl text-white font-bold  mb-8">Meet Our
                            Instructors</h2>
                        <ul>
                            <li><Link href={'/'}>Home</Link></li>
                            <li><Link href={'/'}>About</Link></li>
                            <li><Link href={'/'}>Courses</Link></li>
                            <li><Link href={'/'}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className=''>
                        <h2 className="text-1xl md:text-2xl lg:text-3xl text-white font-bold  mb-8">Meet Our
                            Instructors</h2>
                        <ul>
                            <li><Link href={'/'}>Home</Link></li>
                            <li><Link href={'/'}>About</Link></li>
                            <li><Link href={'/'}>Courses</Link></li>
                            <li><Link href={'/'}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className=''>
                        <h2 className="text-1xl md:text-2xl lg:text-3xl text-white font-bold  mb-8">Meet Our
                            Instructors</h2>
                        <ul>
                            <li><Link href={'/'}>Home</Link></li>
                            <li><Link href={'/'}>About</Link></li>
                            <li><Link href={'/'}>Courses</Link></li>
                            <li><Link href={'/'}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <p className='text-center mt-10'>Copyright 2025, Saharul Sifat</p>
            </div>
        </footer>
    );
};

export default Footer;