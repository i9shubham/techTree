import React from 'react';
import Gif404 from '../Images/404.gif';
const NotFound = () => {
    return (
        <div>
            <img
                src={Gif404}
                style={{ display: 'block', margin: '2rem auto' }}
                alt='404 Not Found'
            />
            <p style={{ fontWeight: 'bold', color: '#502274' }}>
                You entered wrong URL
            </p>
        </div>
    );
};

export default NotFound;
