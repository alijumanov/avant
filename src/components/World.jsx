import React from 'react';
import Image from 'next/image';
import Img1 from '../asstets/images/world1.png';
import Img2 from '../asstets/images/world2.png';

const World = () => {
    return (
        <div className='World parent'>
            <div className="wrapper">
                <div className="left round-1">
                    <Image src={Img1} priority={true} alt="img" className="back-img" width={1500} height={1000} />
                    <div className="infos gap-1">
                        <Image src={Img2} priority={true} alt="img" className="img" width={1500} height={1000} />
                        <div className="texts">
                            <h1 className="name">ESAB Welding & Cutting</h1>
                            <p className="text">(Швеция)</p>
                            <div className="line"></div>
                            <p className="text">Сварочное оборудование и сварочные материалы</p>
                        </div>
                    </div>
                </div>
                <div className="right gap-1">
                    <h1 className="title">Оборудования <span>мировых лидеров</span></h1>
                    <p className="big-text">На площади комплекса размещено оборудованиемировыхлидеров в области металлообработки, такихкак:</p>
                </div>
            </div>
        </div>
    );
};

export default World;