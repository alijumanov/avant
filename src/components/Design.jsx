import React from 'react';
import Image from 'next/image';
import Img1 from '../asstets/images/design1.png';
import Img2 from '../asstets/images/design2.png';
import Img3 from '../asstets/images/design3.png';
import Img4 from '../asstets/images/design4.png';
import Img5 from '../asstets/images/design5.png';

const Design = () => {
    return (
        <div className='Design parent'>
            <div className="wrapper gap-2">
                <h1 className="title">КОНСТРУКТОРСКОЕ <span>БЮРО</span></h1>
                <div className="infos gap-2">
                    <div className="info c1 gap-1">
                        <div className="child round-1">
                            <div className="image">
                                <Image src={Img1} priority={true} alt="img" className="back-img" width={1500} height={1000} />
                            </div>
                            <h1 className="min-title">Мархи</h1>
                        </div>
                        <div className="child round-1">
                            <div className="image">
                                <Image src={Img2} priority={true} alt="img" className="back-img" width={1500} height={1000} />
                            </div>
                            <h1 className="name">Промышленные здания</h1>
                        </div>
                    </div>
                    <div className="info round-1">
                        <div className="image">
                            <Image src={Img3} priority={true} alt="img" className="back-img" width={1500} height={1000} />
                        </div>
                        <h1 className="name">Уникальные дизайны</h1>
                    </div>
                    <div className="info c1 round-1 gap-1">
                        <div className="child round-1">
                            <div className="image">
                                <Image src={Img4} priority={true} alt="img" className="back-img" width={1500} height={1000} />
                            </div>
                            <h1 className="min-title">Ангары</h1>
                        </div>
                        <div className="child round-1">
                            <div className="image">
                                <Image src={Img5} priority={true} alt="img" className="back-img" width={1500} height={1000} />
                            </div>
                            <h1 className="name">Мархи</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Design;