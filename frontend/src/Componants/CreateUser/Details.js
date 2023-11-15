import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
// import Input from './Input';
import { findUserName, registerUser } from '../../Services/user';
import Popup from '../../Utils/Popup';

//setting styles
// const Container = styled.div`
//     display: flex;
//     justify-content: center;
//     alignitems: center;
// `;

const Input = styled.input`
    width: 100%;
    padding: 0.5rem 0 0.5rem 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 1rem;
    margin-top: 1rem;
    color: #000;
    transition: 0.4s;
    &:focus {
        outline: none;
        box-shadow: 0 0 4px #000;
    }
`;
const Button = styled.button`
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 1rem;
    box-shadow: 0 0 4px #000;
    font-weight: bold;
    color: inherit;
    background-color: #ffffff40;
`;

const Details = (props) => {
    const [error, setError] = useState(null);
    const [details, setDeatils] = useState({
        username: '',
        email: '',
        password: '',
    });
    const setDefaultError = () => {
        setError(null);
    };
    // function debounce(func, timeout = 500) {
    //     let timer;
    //     return (...args) => {
    //         clearTimeout(timer);
    //         timer = setTimeout(() => {
    //             func.apply(this, args);
    //         }, timeout);
    //     };
    // }

    // const handleUserNameChange = async (e) => {
    //     await findUserName(e.target.value);
    //     console.log(e.target.value);
    // };
    // const processChange = debounce((e) => handleUserNameChange(e));
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await findUserName(details.username);

        if (user?.data?.code === 200) {
            const data = await registerUser(details);
            console.log(data);
            if (data.data.code === 201) {
                props.setSubmit(true);
            }
            else{
                setError(data?.data?.message);
            }
        } else {
            setError(user?.data?.message);
        }
    };
    const handleTextChange = async (e) => {
        // const { username, email, bio } = e.target;
        // await findUserName(e.target.value);
        // console.log(e.target.name);
        setDeatils({ ...details, [e.target.name]: e.target.value });
    };
    // useEffect(() => {

    // }, [error]);

    useEffect(() => {
        if (props.submit === true) {
            window.localStorage.setItem('signup', 'true');
            window.localStorage.setItem('user', details.username);
        }
    }, [props.submit, details.username]);

    if (error !== null) {
        return <Popup overlay setError={setDefaultError} error={error} />;
    }
    return (
        <>
            <Box
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#ffffff40',
                    padding: '1rem',
                }}
            >
                <form
                    style={{ boxShadow: 'none', padding: '1rem' }}
                    action=''
                    onSubmit={(e) => handleSubmit(e)}
                >
                    {/* <Stack> */}
                    <label htmlFor='username'>Username</label>
                    <Input
                        placeholder='@johndoe'
                        type='text'
                        name='username'
                        onChange={(e) => handleTextChange(e)}
                    />
                    <label htmlFor='email'>Email</label>
                    <Input
                        placeholder='johndoe@gmail.com'
                        type='text'
                        name='email'
                        onChange={(e) => handleTextChange(e)}
                    />
                    <label htmlFor='password'>Password</label>
                    <Input
                        placeholder='Password'
                        type='text'
                        name='password'
                        onChange={(e) => handleTextChange(e)}
                    />

                    <div>
                        <Button type='submit'>Submit</Button>
                    </div>
                </form>
            </Box>
        </>
    );
};

export default Details;
