import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Img1 from '../asstets/images/about1.png';
import Img2 from '../asstets/images/about2.png';
import Decor from '../asstets/images/decor.png';

const About = () => {
    return (
        <div className='About parent'>
            <Image src={Decor} priority={true} alt="img" className="decor" width={1500} height={1000} />
            <div className="wrapper gap-2">
                <h1 className="title">Коротко <span>о нас</span></h1>
                <div className="infos">
                    <div className="image res-1">
                        <Image src={Img1} priority={true} alt="img" className="img" width={1500} height={1000} />
                    </div>
                    <div className="image res">
                        <Image src={Img1} priority={true} alt="img" className="img" width={1500} height={1000} />
                        <Image src={Img2} priority={true} alt="img" className="img" width={1500} height={1000} />
                    </div>
                    <div className="texts gap-2">
                        <p className="big-text">Мы стремимся к тому, чтобы все наши решения и технологии были максимально полезны на практике и делали жизнь лучше</p>
                        <p className="text">OOO ENGINEERING Avant Metal Group - компания, которая зарекомендовала себя как надежного и ответственного производителя. Также, тесно сотрудничает с различными локальными и лидирующими зарубежными компаниями в таких странах как Корея, Турция, Китай, Россия.</p>
                        <Link href="/" className='explore btn-text round-05'>Подробнее</Link>
                    </div>
                    <div className="image res-1">
                        <Image src={Img2} priority={true} alt="img" className="img" width={1500} height={1000} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;