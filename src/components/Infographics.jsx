import React from 'react';

const Infographics = () => {
    return (
        <div className='Infographics parent'>
            <div className="wrapper gap-2">
                <h1 className="title">Главный двигатель нашей компании <span>– высокий уровень мотивации.</span></h1>
                <div className="infos">
                    <div className="info round-1 gap-1">
                        <h1 className="min-title">30 000 т.</h1>
                        <p className="big-text">производственной мощности</p>
                    </div>
                    <div className="info round-1 gap-1">
                        <h1 className="min-title">22 000</h1>
                        <p className="big-text">квадратных метров</p>
                        <p className="text">Площадь производственного комплекса составляет более 22 тысяч квадратных метров.</p>
                    </div>
                    <div className="info round-1 gap-1">
                        <h1 className="min-title">250</h1>
                        <p className="big-text">человек</p>
                        <p className="text">Штат сотрудников насчитывает 250человек.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Infographics;