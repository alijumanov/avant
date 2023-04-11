import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../asstets/images/logo1.png';

const Footer = () => {
    return (
        <div className='Footer parent'>
            <div className="top">
                <Link href="/" onClick={() => window.scrollTo(0, 0)} className="logo">
                    <Image src={Logo} priority={true} alt="logo" className="img" width={1500} height={1000} />
                </Link>
                <div className="texts gap-1">
                    <p className="min-text">Компания OOO ENGINEERING Avant Metal Group зарекомендовала себя как надежного и ответственного производителя, в продукции которой вы можете быть уверены.</p>
                    <div className="line"></div>
                    <div className="socials gap-1">
                        <a href="#" className="icon big-text">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#" className="icon big-text">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#" className="icon big-text">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className="links gap-1">
                    <Link href="/" className='text link'>About</Link>
                    <Link href="/" className='text link'>Pricing Table</Link>
                    <Link href="/" className='text link'>Contact Us</Link>
                    <Link href="/" className='text link'>Meet Our Team</Link>
                    <Link href="/" className='text link'>Latest News</Link>
                </div>
                <div className="links gap-1">
                    <Link href="/" className='text link'>Case Studies</Link>
                    <Link href="/" className='text link'>UsFAQ’s</Link>
                    <Link href="/" className='text link'>Services</Link>
                    <Link href="/" className='text link'>Customer Support</Link>
                </div>
                <div className="links c1 gap-1">
                    <Link href="/" className='text link'>Контакты</Link>
                    <Link href="/" className='text link'>Обратная свзяь</Link>
                    <div className="line"></div>
                    <p className="min-text">По вопросам партнерства+998 95 606 33 33 info@avantgroup.uz</p>
                </div>
            </div>
            <div className="bottom">
                <p className="text">OOO ENGINEERING Avant Metal Group © 2021 Все права защищены</p>
                <p className="text">Условия обработки персональных данных</p>
            </div>
        </div>
    );
};

export default Footer;