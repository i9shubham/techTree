import React, { useEffect, useState } from 'react';
import { fetchData } from '../Services/user';
import { useLocation } from 'react-router-dom';
import NotFound from './NotFound';
import Links from '../Componants/Links';
import Profile from '../Componants/Profile';
import { getFromLS, setToLS } from '../Utils/storage';
// import { ThemeProvider } from 'styled-components';

const UserTree = () => {
    const location = useLocation();
    const [data, setData] = useState(null);
    const [theme, setTheme] = useState({
        name: 'light',
        bio: '#ffffff',
        button: {
            text: '#fff',
            bg: 'inherit',
        },
        font: 'seoge ui',
    });
    const path = location.pathname.slice(1);

    useEffect(() => {
        let mounted = true;
        fetchData(path).then((items) => {
            if (mounted) {
                setData(items.data);
                setToLS('theme', items.data.docs.theme);
            }
        });
        return () => (mounted = false);
    }, [path]);

    useEffect(() => {
        const themedata = getFromLS('theme');
        if (themedata !== null) {
            setTheme(themedata);
            document.body.style.backgroundImage = `url(data:image/jpeg;base64,${themedata?.bgImage})`;
        }
    }, []);

    console.log(data);
    return (
        <>
            {data !== null && typeof data.docs === 'object' ? (
                <>
                    <Profile data={data.docs} theme={theme} />
                    <Links link={data.docs?.socials} theme={theme} />
                </>
            ) : (
                <NotFound />
            )}
        </>
    );
};

export default UserTree;
