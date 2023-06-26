'use client'
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import './Navbar.css';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

function Navbar() {
    const [menu, setMenu] = useState(false);
    const router = usePathname();
    const [dark, setDark] = useState(false);

    const handleMenu = () => {
        menu ? setMenu(false) : setMenu(true);
    }
    const ref = useRef()
    const handleDarkMode = () => {
        document.body.classList.add('navbar-dark');
        setDark(true);
    }
    const handlelightMode = () => {
        document.body.classList.remove('navbar-dark');
        setDark(false);
    }

    return (
        <>
            <nav className='md:py-6 py-3'>
                <ul className={menu ? 'active' : ''}>
                    <li className={router == "/" ? "activemenu px-5" : "px-5"}><Link href={'/'} onClick={() => { setMenu(false) }}>Home</Link></li>
                    <li className={router == "/about" ? "activemenu px-5" : "px-5"}><Link href='/about' onClick={() => { setMenu(false) }}>About</Link></li>
                    <li className={router == "/project" ? "activemenu px-5" : "px-5"}><Link href='/project' onClick={() => { setMenu(false) }}>Projects</Link></li>
                    <li className={router == "/contact" ? "activemenu px-5" : "px-5"}><Link href='/contact' onClick={() => { setMenu(false) }}>Contact</Link></li>
                </ul>
                <div className='logo px-5'>
                    <div className='logoImg'>
                        <Image src={'/logo.webp'} width={39} height={28} alt='Logo' />
                    </div>
                    <div className='menu'>
                        <div id="nav-icon1" className={menu ? 'open' : ''} onClick={handleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className={menu ? 'socMedia active px-6' : 'socMedia px-6'}>
                    <a className='mr-5 md:mr-10' href='https://github.com/Kunaljethva369' target='_blank'><Image src={'/github.svg'} width={25} height={12} alt='img' /></a>
                    <a className='mr-5 md:mr-10' href='https://www.linkedin.com/in/kunal-jethva-6736841a9/' target='_blank'><Image src={'/linkedin.svg'} width={25} height={12} alt='img' /></a>
                    <a className='mr-5 md:mr-10' href='https://app.slack.com/client/T05BUMT9AQM/C05BXL1PFU2/rimeto_profile/U05BR0PLDP0?geocode=en-in' target='_blank'><Image src={'/slack-logo.svg'} width={25} height={12} alt='img' /></a>
                    {
                        dark ?
                            <a className='mr-5 md:mr-10 cursor-pointer mix-blend-lighten' onClick={() => handlelightMode()}><Image src={'/light.jpg'} className='text-white' width={30} height={12} alt='img' /></a> :
                            <a className='mr-5 md:mr-10 cursor-pointer' onClick={() => handleDarkMode()}><Image src={'/sleep.png'} width={25} height={12} alt='img' /></a>
                    }

                </div>
            </nav>
        </>
    )
}

export default Navbar