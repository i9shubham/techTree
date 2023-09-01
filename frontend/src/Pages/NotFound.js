import React from 'react';
import Gif404 from '../Images/404.gif';
const NotFound = () => {
    return (
        <div>
            <img
                src={Gif404}
                style={{ display: 'block', margin: '0 auto' }}
                alt='404 Not Found'
            />
            <p style={{ fontWeight: 'bold' }}>You entered wrong URL</p>
        </div>
    );
};

export default NotFound;
