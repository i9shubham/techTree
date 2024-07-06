import React from 'react';
import Links from '../Componants/Links';
import Profile from '../Componants/Profile';
import { data } from '../Utils/shubham';

const Shubham = () => {
    return (
        <>
            <Profile data={data} />
            <Links data={data} />
        </>
    );
};

export default Shubham;
