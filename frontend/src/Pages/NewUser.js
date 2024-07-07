import React, { useEffect, useState } from 'react';
import Input from '../Componants/CreateUser/Input';
import { Container } from '@mui/material';
import Details from '../Componants/CreateUser/Details';

const NewUser = () => {
    const [login, setLogin] = useState(false);
    const signup = window.localStorage.getItem('signup');
    const [submittedDetails, setSubmittedDetails] = useState(false);
    const settingFunc = (val) => {
        setSubmittedDetails(val);
    };

    useEffect(() => {
        if (submittedDetails === true) {
            setLogin(true);
        }
    }, [login, submittedDetails]);

    return (
        <>
            <Container
                sx={{
                    marginTop: '5rem',
                }}
            >
                {/* {signup === 'false' && ( */}
                <Details submit={submittedDetails} setSubmit={settingFunc} />
                {/* )} */}
                {/* {signup === 'true' && <Input />} */}
            </Container>
        </>
    );
};

export default NewUser;
