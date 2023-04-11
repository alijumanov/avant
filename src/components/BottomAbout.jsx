import React from 'react';
import Image from 'next/image';
import Img1 from '../asstets/images/about1.png';
import Img2 from '../asstets/images/about3.png';

const BottomAbout = () => {
    return (
        <div className='BottomAbout parent'>
            <div className="wrapper gap-2">
                <div className="infos">
                    <div className="image res-1">
                        <Image src={Img1} priority={true} alt="img" className="img" width={1500} height={1000} />
                    </div>
                    <div className="image res">
                        <Image src={Img1} priority={true} alt="img" className="img" width={1500} height={1000} />
                    </div>
                    <div className="texts gap-2">
                        <p className="name">Компания OOO ENGINEERING Avant Metal Group зарекомендовала себя какнадежного и ответственного производителя, в продукциикоторого вы можете быть уверены.</p>
                    </div>
                    <div className="image res-1">
                        <Image src={Img2} priority={true} alt="img" className="img" width={1500} height={1000} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomAbout;