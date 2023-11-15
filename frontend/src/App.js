import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import NewUser from './Pages/NewUser';
// import Shubham from './Pages/Shubham';
import Navbar from './Componants/Navbar';
import Footer from './Componants/Footer';
import UserTree from './Pages/UserTree';
import styled from 'styled-components';

const Container = styled.div`
    margin: 5px auto 5px auto;
`;

function App() {
    useEffect(() => {
        if (!window.localStorage.getItem('user')) {
            window.localStorage.setItem('user', null);
            window.localStorage.setItem('signup', 'false');
            window.localStorage.setItem('theme', null);
        }
    }, []);
    return (
        <>
            <Container style={{ fontFamily: 'seoge ui' }}>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Homepage />} />
                    <Route path='/signup' element={<NewUser />} />
                    <Route path='/*' element={<UserTree />} />
                    {/* <Route path='*' element={<NotFound />} /> */}
                </Routes>
                <Footer />
            </Container>
        </>
    );
}
export default App;
