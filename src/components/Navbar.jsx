import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='w-full h-[80px] z-10 bg-zinc-200 flex drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-4xl cursor-pointer'>Brand.</h1>
                    <ul className='hidden md:flex'>
                        <li className='cursor-pointer'><Link
                            to="home"
                            smooth={true}
                            offset={50}
                            duration={500}>Home</Link></li>
                        <li className='cursor-pointer'><Link
                            to="about"
                            smooth={true}
                            offset={50}
                            duration={500}>About</Link></li>
                        <li className='cursor-pointer'><Link
                            to="support"
                            smooth={true}
                            offset={50}
                            duration={500}>Support</Link></li>
                        <li className='cursor-pointer'><Link
                            to="platform"
                            smooth={true}
                            offset={50}
                            duration={500}>Platform</Link></li>
                        <li className='cursor-pointer'><Link
                            to="pricing"
                            smooth={true}
                            offset={50}
                            duration={500}>Pricing</Link>
                        </li>
                    </ul>
                </div>

                <div className='hidden md:flex pr-4'>
                    <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
                    <button className='px-4 py-3'>Sign Up</button>
                </div>

                <div className='md:hidden' onClick={handleClick}>
                    {!nav ? <MenuIcon /> : <CloseIcon />}
                </div>
            </div>

            <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full my-20"}>
                <li className='cursor-pointer'><Link onClick={handleClick}
                    to="home"
                    smooth={true}
                    offset={50}
                    duration={500}>Home</Link></li>
                <li className='cursor-pointer'><Link onClick={handleClick}
                    to="about"
                    smooth={true}
                    offset={50}
                    duration={500}>About</Link></li>
                <li className='cursor-pointer'><Link onClick={handleClick}
                    to="support"
                    smooth={true}
                    offset={50}
                    duration={500}>Support</Link></li>
                <li className='cursor-pointer'><Link onClick={handleClick}
                    to="platform"
                    smooth={true}
                    offset={50}
                    duration={500}>Platform</Link></li>
                <li className='cursor-pointer'><Link onClick={handleClick}
                    to="pricing"
                    smooth={true}
                    offset={50}
                    duration={500}>Pricing</Link>
                </li>
                <div className='flex flex-col'>
                    <button className='bg-transparent text-indigo-600 mb-2 py-3 px-8'>Sign In</button>
                    <button className='px-4 py-3'>Sign Up</button>
                </div>
            </ul>
        </div>
    )
}

export default Navbar

