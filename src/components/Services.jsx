import React from 'react';
import Image from 'next/image';
import Img1 from '../asstets/images/serv1.png';
import Img2 from '../asstets/images/serv2.png';
import Img3 from '../asstets/images/serv3.png';
import Img4 from '../asstets/images/serv4.png';
import Img5 from '../asstets/images/serv5.png';
import Decor from '../asstets/images/decor.png';

const Services = () => {
    return (
        <div className='Services parent'>
            <Image src={Decor} priority={true} alt="img" className="decor" width={1500} height={1000} />
            <div className="wrapper gap-1">
                <div className="top gap-1">
                    <div className="service round-1 gap-2 get-bg">
                        <Image src={Img1} priority={true} alt="img" className="img" width={1500} height={1000} />
                        <p className="text">Создание 3D расчётной схемы каркаса сооружения</p>
                    </div>
                    <div className="service round-1 gap-2">
                        <Image src={Img2} priority={true} alt="img" className="img" width={1500} height={1000} />
                        <p className="text">Сбор постоянных и временных нагрузок, действующих на сооружение</p>
                    </div>
                    <div className="service round-1 gap-2">
                        <Image src={Img3} priority={true} alt="img" className="img" width={1500} height={1000} />
                        <p className="text">Разработка принципиальных узловых соединений элементов конструкции</p>
                    </div>
                </div>
                <div className="bottom gap-1">
                    <div className="service round-1 gap-2">
                        <Image src={Img4} priority={true} alt="img" className="img" width={1500} height={1000} />
                        <p className="text">Стадия расчетов, графического анализа и подбора сечений профилей</p>
                    </div>
                    <div className="service round-1 gap-2 get-bg">
                        <Image src={Img5} priority={true} alt="img" className="img" width={1500} height={1000} />
                        <p className="text">Выпуск комплектов чертежей проектной (стадия П) и/или рабочей документации (стадия Р) марки КМ (конструкции металлические)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;