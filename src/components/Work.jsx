import React from 'react';
import Image from 'next/image';
import Img1 from '../asstets/images/work1.png';
import Img2 from '../asstets/images/work2.png';
import Img3 from '../asstets/images/work3.png';
import BackImg from '../asstets/images/work.png';
import Build from '../asstets/images/buildings.png';

const Work = () => {
    return (
        <div className='Work parent'>
            <div className="wrapper">
                <div className="infos">
                    <Image src={BackImg} priority={true} alt="back" className="back-img round-1" width={1500} height={1000} />
                    <div className="info round-1 gap-2">
                        <Image src={Build} priority={true} alt="img" className="img" width={1500} height={1000} />
                        <div className="texts gap-1">
                            <h1 className="name">«Здание-лотос» The Lotus Building</h1>
                            <p className="big-text">«Здание-лотос» The Lotus Building</p>
                            <div className="line"></div>
                            <p className="btn-text">По задумке австралийских архитекторов,«Здание - лотос», состоящее из трех  частей, символизирует три этапа в жизни цветка лотоса </p>
                        </div>
                    </div>
                </div>
                <div className="imgs gap-1">
                    <Image src={Img1} priority={true} alt="img" className="img" width={1500} height={1000} />
                    <Image src={Img2} priority={true} alt="img" className="img" width={1500} height={1000} />
                    <Image src={Img3} priority={true} alt="img" className="img" width={1500} height={1000} />
                </div>
            </div>
        </div>
    );
};

export default Work;