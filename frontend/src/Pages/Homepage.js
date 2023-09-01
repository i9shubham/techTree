import React from 'react';
import { Container } from '@mui/material';
import UserCard from '../Componants/Homepage/UserCard';
const Homepage = () => {
    return (
        <div className='page'>
            <Container
            sx={{
                marginTop: '2rem'
                // height: '80vh',
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
            }}
            >
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
            </Container>
        </div>
    );
};

export default Homepage;
