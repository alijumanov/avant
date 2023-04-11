import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Img from '../asstets/images/header.png';
import Arrow from '../asstets/images/arrow.png';
import Icon1 from '../asstets/images/icon1.png';
import Icon2 from '../asstets/images/icon2.png';
import Ellipse1 from '../asstets/images/ellipse1.png';
import Ellipse2 from '../asstets/images/ellipse2.png';
import Ellipse3 from '../asstets/images/ellipse3.png';

const Header = () => {
    return (
        <div className='Header parent'>
            <Image src={Img} priority={true} alt="back" className="back-img" width={1500} height={1000} />
            <Image src={Ellipse1} priority={true} alt="back" className="ellipse1" width={1500} height={1000} />
            <Image src={Ellipse2} priority={true} alt="back" className="ellipse2" width={1500} height={1000} />
            <Image src={Ellipse3} priority={true} alt="back" className="ellipse3" width={1500} height={1000} />
            <div className="wrapper gap-2">
                <h1 className="big-title">Высокотехнологичные решения в области металлоконструкций и стройматериалов</h1>
                <p className="text">Компания OOO ENGINEERING AvantGroup зарекомендовала себя как AvantGroup зарекомендовала себя в которой вы можете быть уверены.</p>
                <Link href="/" className='round-f btn-text explore gap-1'>
                    Подробнее о производстве
                    <Image src={Arrow} priority={true} alt="arrow" className='arrow' width={100} height={100} />
                </Link>
                <div className="tools round-1">
                    <div className="tool gap-1">
                        <Image src={Icon1} priority={true} alt="icon" className='icon' width={100} height={100} />
                        <div className="texts">
                            <p className="text">30 000 т.</p>
                            <p className="min-text">Производственная мощность</p>
                        </div>
                    </div>
                    <div className="tool gap-1">
                        <Image src={Icon2} priority={true} alt="icon" className='icon' width={100} height={100} />
                        <div className="texts">
                            <p className="text">22 000</p>
                            <p className="min-text">квадратных метров</p>
                            <p className="min-text">Площадь производственного комплекса составляет более 22 тысяч квадратных метров.</p>
                        </div>
                    </div>
                    <div className="tool gap-1">
                        <Image src={Icon2} priority={true} alt="icon" className='icon' width={100} height={100} />
                        <div className="texts">
                            <p className="text">250</p>
                            <p className="min-text">человек</p>
                            <p className="min-text">Штат сотрудников насчитывает250человек.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;