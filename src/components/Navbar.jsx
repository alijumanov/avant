import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../asstets/images/logo.png';

const Navbar = () => {

    const [language, setLanguage] = useState(1);
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className='Navbar'>
            <div className="navbar wrapper">
                <Link href="/" onClick={() => window.scrollTo(0, 0)} className="logo">
                    <Image src={Logo} priority={true} alt="logo" className="img" width={1500} height={1000} />
                </Link>
                <div className={`nav-links ${showMenu && "show"}`}>
                    <Link href="/" className='link btn-text active'>О нас</Link>
                    <Link href="/" className='link btn-text'>Услуги</Link>
                    <Link href="/" className='link btn-text'>Производство</Link>
                    <Link href="/" className='link btn-text'>Партнеры</Link>
                    <Link href="/" className='link btn-text'>Наши проекты</Link>
                    <div className="times" onClick={() => setShowMenu(false)}>X</div>
                </div>
                <div className="language gap-1">
                    <div className={`big-text ${language == 1 && "active"}`} onClick={() => setLanguage(1)}>Ru</div>
                    <div className={`big-text ${language == 2 && "active"}`} onClick={() => setLanguage(2)}>Uz</div>
                </div>
                <a href="tel:+998901234567" className="explore btn-text round-05">Контакты</a>
                <i className="fa fa-bars" onClick={() => setShowMenu(true)}></i>
            </div>
        </div>
    );
};

export default Navbar;