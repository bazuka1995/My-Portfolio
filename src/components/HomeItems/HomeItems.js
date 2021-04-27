import React from 'react';
import { Link } from 'react-router-dom';
import './HomeItems.scss';
import { Waypoint } from 'react-waypoint';

const HomeItems = ({item, handleScroll, reviel, index}) => {
    return (
        <Link to={`/Portfolio/${item.title}`} >
            <div className='section slider-container'>
                <Waypoint onEnter={() => handleScroll(index, 'enter')} onLeave={() => handleScroll(index, 'leave')} />
                <div 
                    className={`slide ${reviel[index].revield ? 'revield' : ''}`}
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                >
                    <h1 className='title'>{item.title}</h1>
                    <h1 className="title-border">{item.title}</h1>
                    <div className="container-subtitile">
                        <div className="redline" />
                        <div className="subtitle">{item.subtitle}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
 
export default HomeItems;