import React from 'react';
import { Container } from '@mui/material';
import UserCard from '../Componants/Homepage/UserCard';
import Tree from '../Images/tree-vector.jpg';
import './index.css'
const Homepage = () => {
    return (
        <div className='page'>
            <Container
                sx={{
                    marginTop: '5rem',
                    // height: '80vh',
                    // display: 'flex',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                }}
            >
                <div>
                    <h1>Everything you are. In one, simple link in bio.</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque inventore repellendus tempora, amet praesentium,
                        commodi ad unde tenetur deleniti officiis beatae
                        deserunt quidem, delectus voluptatem. Commodi quam cum
                        esse quisquam?
                    </p>
                </div>
                <div style={{textAlign: 'center'}}>
                    <img className='tree' src={Tree} alt='TechTree' />
                    <p style={{ }}>To the roots</p>
                </div>
                <div style={{textAlign: 'center', margin: '0, auto'}}>
                    <div className='create-link-comp'>
                        techtree.com/<span style={{fontWeight: 'bold'}}>yourname</span>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Homepage;
