import React from 'react';
import '../css/Characters.css'

const Characters = ({ characters = [] }) => {
    return (
        <div className='row'>
            {characters.map((item, index) => (
                <div key={index} className='col'>
                    <div className='container-img'>
                        <img src={item.image} alt='' />
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title'>{item.name}</h5>
                        <p>specie: {item.species}</p>
                        <p>location: {item.location.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Characters;