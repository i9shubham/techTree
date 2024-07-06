import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    InputAdornment,
    TextField,
    Typography,
} from '@mui/material';
import Tree from '../Images/tree.png';
import './index.css';
import {
    Github,
    Instagram,
    Linkedin,
    Twitter,
    Yoututbe,
    Website,
} from '../Utils/icons';
import Footer from '../Componants/Footer';
// import Shubham from './Shubham';

const socialIcons = [
    { src: Github, id: 1, x: 40, y: -100 },
    { src: Instagram, id: 2, x: -80, y: -100 },
    { src: Linkedin, id: 3, x: 150, y: -170 },
    { src: Twitter, id: 4, x: -155, y: -130 },
    { src: Yoututbe, id: 5, x: -170, y: -180 },
    { src: Website, id: 6, x: 100, y: -250 },
    // Add more icons as needed
];

const Homepage = () => {
    const [username, setUsername] = React.useState('i9shubham');
    const navigate = useNavigate();
    const handleTreeInputClick = () => {
        if (username === 'i9shubham') navigate('/i9shubham');
        else navigate('/not-found');
    };
    return (
        <>
            <div className='page'>
                <div
                    style={{
                        // marginTop: '5rem',
                        color: '#1877F2',
                        // height: '80vh',
                        // display: 'flex',
                        // justifyContent: 'center',
                        // alignItems: 'center',
                    }}
                >
                    <div style={{ textAlign: 'center' }}>
                        <img className='tree' src={Tree} alt='TechTree' />
                        {socialIcons.map((icon) => {
                            return (
                                <img
                                    key={icon.id}
                                    src={icon.src}
                                    alt={`Social Icon ${icon.id}`}
                                    style={{
                                        position: 'absolute',
                                        left: `50%`,
                                        top: `50%`,
                                        transform: `translate(${icon.x}px, ${icon.y}px)`,
                                        zIndex: 0,
                                        width: '2rem',
                                    }}
                                />
                            );
                        })}
                    </div>
                    <div
                        style={{
                            color: '#502274',
                            width: '80rem',
                            margin: '0 10rem',
                        }}
                    >
                        <Typography
                            variant='h1'
                            sx={{
                                fontSize: {
                                    xs: '2rem',
                                    sm: '3rem',
                                    md: '4rem',
                                },
                            }}
                        >
                            Everything you are. In one, simple{' '}
                            <strong className='heading'>link in bio.</strong>
                        </Typography>
                        <p>
                            This project is created using MERN stack and is a
                            clone of Linktree. This project healps to create a
                            single link that can be shared on social media
                            platforms and can be used to redirect to multiple
                            links. This project is created by Shubham Ingole.
                        </p>
                        <br />
                    </div>

                    {/* <div
                    className='btn'
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '0.2rem',
                    }}
                >
                    <div>
                        <div className='create-link-comp'>
                            <span style={{ opacity: 0.8 }}>techtree.com/ </span>
                            <input
                                style={{
                                    fontWeight: 'bold',
                                    opacity: 1,
                                    width: '5rem',
                                    outline: 'none',
                                    border: 'none',
                                    background: 'none',
                                    color: '#fff',
                                }}
                                placeholder='username'
                                defaultValue='i9shubham'
                            />
                        </div>
                    </div>

                    <div className='create-link-comp'>
                        <button
                            className='treeinput'
                            onClick={handleTreeInputClick}
                        >
                            Get
                        </button>
                    </div>
                </div> */}

                    {/* <Box> */}
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                            }}
                        >
                            <TextField
                                id='outlined-basic'
                                variant='outlined'
                                fullWidth
                                defaultValue={username}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment
                                            position='start'
                                            sx={{ color: '#502274' }}
                                        >
                                            techtree.com/
                                        </InputAdornment>
                                    ),
                                }}
                                placeholder='username'
                                sx={{
                                    height: 56,
                                    maxWidth: '15rem',
                                    backgroundColor: '#fff',
                                    input: {
                                        color: '#502274',
                                        fontWeight: 'bold',
                                        textShadow:
                                            '0 0 2px #fff, 0 0 12px #fff, 0 0 2px #ff00ff', // Corrected text-shadow syntax
                                    },
                                }}
                                onChange={(e) => setUsername(e.target.value)}
                                autoFocus
                            />
                            <Button
                                sx={{
                                    height: '56px',
                                    backgroundColor: '#502274',
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    '&:hover': { backgroundColor: '#502274' },
                                }}
                                variant='contained'
                                onClick={handleTreeInputClick}
                            >
                                Get
                            </Button>
                        </Box>
                    </Box>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Homepage;
