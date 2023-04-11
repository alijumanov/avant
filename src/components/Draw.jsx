import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Img from '../asstets/images/draw.png';
import Decor from '../asstets/images/decor.png';

const Draw = () => {
    return (
        <div className='Draw parent'>
            <Image src={Decor} priority={true} alt="img" className="decor" width={1500} height={1000} />
            <div className="wrapper">
                <div className="left gap-1">
                    <h1 className="title">Разработка <span>чертежей КМ и КМД</span></h1>
                    <p className="big-text">Исходным документом для проектирования любого здания илисооружения является задание на проектирование, составленноезаказчиком.</p>
                    <Link href="/" className='explore btn-text round-f'>Задание на проектирование</Link>
                </div>
                <div className="right">
                    <Image src={Img} priority={true} alt="img" className="img" width={1500} height={1000} />
                </div>
            </div>
        </div>
    );
};

export default Draw;