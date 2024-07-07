import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    InputAdornment,
    TextField,
    Typography,
} from '@mui/material';
import IphoneLeft from '../Images/iphone-left.png';
import './index.css';
import Footer from '../Componants/Footer';

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
                        <img
                            className='tree'
                            src={IphoneLeft}
                            alt='TechTree mockup'
                        />
                    </div>
                    <div
                        style={{
                            color: '#502274',
                            width: '80rem',
                            margin: '0 10rem',
                            textAlign: 'center',
                            marginBottom: '2rem',
                        }}
                    >
                        <Typography
                            variant='h1'
                            sx={{
                                fontSize: {
                                    xs: '1.2rem',
                                    sm: '3rem',
                                    md: '4rem',
                                },
                            }}
                        >
                            Everything you are. In one, simple{' '}
                            <strong className='heading'>link in bio.</strong>
                        </Typography>
                        <Typography
                            variant='p'
                            sx={{
                                fontSize: {
                                    xs: '0.5rem',
                                    sm: '1rem',
                                    md: '1rem',
                                },
                            }}
                        >
                            This project is created using MERN stack and is a
                            clone of Linktree. This project healps to create a
                            single link that can be shared on social media
                            platforms and can be used to redirect to multiple
                            links. This project is created by Shubham Ingole.
                        </Typography>
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
