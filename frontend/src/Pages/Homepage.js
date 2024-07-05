import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tree from '../Images/tree.png';
import './index.css';
import Shubham from './Shubham';

const Homepage = () => {
    const navigate = useNavigate();
    const handleTreeInputClick = () => {
        navigate('/signup');
    };
    return (
        <div className='page'>
            <div
                style={{
                    marginTop: '5rem',
                    color: "#1DA1F2"
                    // height: '80vh',
                    // display: 'flex',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                }}
            >
                <div style={{ textAlign: 'center' }}>
                    <img className='tree' src={Tree} alt='TechTree' />
                </div>
                <div style={{color: '#1DA1F2'}}>
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
            </div>
            <Shubham />
        </div>
    );
};

export default Homepage;
