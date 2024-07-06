import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AcUnitIcon from '@mui/icons-material/AcUnit';
// import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { FaGithub } from 'react-icons/fa';

const pages = [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/pricing' },
    { name: '404 Not Found', path: '/not-found' },
];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState(null);
    // const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        // setAnchorElUser(event.currentTarget);
        window.open('https://github.com/i9shubham/techTree', '_blank');
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };

    return (
        <AppBar
            position='fixed'
            sx={{
                backgroundColor: 'transparent',
                backdropFilter: 'blur(10px)',
            }}
        >
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <AcUnitIcon
                        sx={{
                            color: '#000',
                            display: { xs: 'none', md: 'flex' },
                            mr: 1,
                        }}
                    />
                    <Typography
                        variant='h6'
                        noWrap
                        component='a'
                        href='/'
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#000',
                            textDecoration: 'none',
                            fontFamily: 'cursive',
                        }}
                    >
                        TechTree
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='#502274'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={() => navigate(page.path)}
                                >
                                    <Typography textAlign='center'>
                                        {page.name}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AcUnitIcon
                        sx={{
                            color: '#000',
                            display: { xs: 'flex', md: 'none' },
                            mr: 1,
                        }}
                    />
                    <Typography
                        variant='h5'
                        noWrap
                        component='a'
                        href='/'
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,

                            letterSpacing: '.3rem',
                            color: '#000',
                            textDecoration: 'none',
                            fontFamily: 'cursive',
                        }}
                    >
                        TechTree
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => navigate(page.path)}
                                sx={{ my: 2, color: '#000', display: 'block' }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title='github'>
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                <FaGithub color='#502274' />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
