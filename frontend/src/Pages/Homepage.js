import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import Tree from '../Images/tree-vector.jpg';
import './index.css';
const Homepage = () => {
    const navigate = useNavigate();
    const handleTreeInputClick = () => {
        navigate('/createTree');
    };
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
                <div style={{ textAlign: 'center' }}>
                    <img className='tree' src={Tree} alt='TechTree' />
                </div>
                <div>
                    <h1>Everything you are. In one, simple link in bio.</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque inventore repellendus tempora, amet praesentium,
                        commodi ad unde tenetur deleniti officiis beatae
                        deserunt quidem, delectus voluptatem. Commodi quam cum
                        esse quisquam?
                    </p>
                    <br />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className='create-link-comp'>
                        <button
                            className='treeinput'
                            onClick={handleTreeInputClick}
                        >
                            <span style={{ opacity: 0.8 }}>techtree.com/</span>
                            <span style={{ fontWeight: 'bold', opacity: 1 }}>
                                yourname
                            </span>
                        </button>
                    </div>
                </div>

                <p style={{ lineHeight: 1.8 }}>Find your Roots</p>
            </Container>
        </div>
    );
};

export default Homepage;
