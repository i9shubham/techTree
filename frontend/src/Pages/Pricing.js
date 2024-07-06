import {
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    Typography,
} from '@mui/material';
import React from 'react';

const Pricing = () => {
    return (
        <>
            <Container
                maxWidth='lg'
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2,
                    mt: 2,
                }}
            >
                <Card
                    sx={{
                        minWidth: 275,
                        border: '1px solid #502274',
                        color: '#502274',
                        bgcolor: '#fff',
                    }}
                >
                    <CardActions>
                        <Button
                            fullWidth
                            sx={{
                                height: '56px',
                                backgroundColor: '#502274',
                                color: '#fff',
                                fontWeight: 'bold',
                                '&:hover': { backgroundColor: '#502274' },
                            }}
                            variant='contained'
                            // onClick={handleTreeInputClick}
                        >
                            Basic
                        </Button>
                    </CardActions>
                    <CardContent>
                        <Typography
                            sx={{ textDecoration: 'underline' }}
                            gutterBottom
                        >
                            Our basic plan
                        </Typography>
                        <Typography
                            sx={{ mb: 1.5, textAlign: 'left', fontSize: 14 }}
                        >
                            Clicks per month
                        </Typography>
                        <Typography
                            sx={{ mb: 1.5, textAlign: 'left', fontSize: 14 }}
                        >
                            URL Analytics
                        </Typography>
                        <Typography
                            sx={{ mb: 1.5, textAlign: 'left', fontSize: 14 }}
                        >
                            Custom and stock background
                        </Typography>
                        <Typography
                            sx={{ mb: 1.5, textAlign: 'left', fontSize: 14 }}
                        >
                            Exclusive Content Library
                        </Typography>
                        <Typography
                            sx={{ mb: 1.5, textAlign: 'left', fontSize: 14 }}
                        >
                            Access to a premium library of templates, images,
                            and design elements.
                        </Typography>
                        <Typography
                            sx={{ mb: 1.5, textAlign: 'left', fontSize: 14 }}
                        >
                            Extended Storage Capacity
                        </Typography>
                        <Typography
                            sx={{ mb: 1.5, textAlign: 'left', fontSize: 14 }}
                        >
                            More space for storing your files, images, and data
                            securely.
                        </Typography>
                        <Typography
                            sx={{ mb: 1.5, textAlign: 'left', fontSize: 14 }}
                        >
                            Custom Fonts and Colors
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275, bgcolor: '#502274', color: '#fff' }}>
                    <CardActions>
                        <Button
                            fullWidth
                            sx={{
                                height: '56px',
                                color: '#502274',
                                backgroundColor: '#fff',
                                fontWeight: 'bold',
                                '&:hover': { backgroundColor: '#fff' },
                            }}
                            variant='contained'
                            // onClick={handleTreeInputClick}
                        >
                            Premium
                        </Button>
                    </CardActions>
                    <CardContent>
                        <Typography
                            sx={{ textDecoration: 'underline' }}
                            gutterBottom
                        >
                            Our best plan
                        </Typography>
                        <Typography
                            sx={{ mb: 1.5, textAlign: 'left', fontSize: 14 }}
                        >
                            Clicks per month
                        </Typography>
                        <Typography
                            sx={{ mb: 1.5, textAlign: 'left', fontSize: 14 }}
                        >
                            URL Analytics
                        </Typography>
                        <Typography
                            sx={{ mb: 1.5, textAlign: 'left', fontSize: 14 }}
                        >
                            Custom and stock background
                        </Typography>
                        <Typography
                            sx={{ mb: 1.5, textAlign: 'left', fontSize: 14 }}
                        >
                            Custom Fonts and Colors
                        </Typography>
                        <Typography
                            sx={{ mb: 1.5, textAlign: 'left', fontSize: 14 }}
                        >
                            Priority Customer Support
                        </Typography>
                        <Typography
                            sx={{ mb: 1.5, textAlign: 'left', fontSize: 14 }}
                        >
                            Access to a dedicated support team ensuring quick
                            resolution of issues.
                        </Typography>
                        <Typography
                            sx={{ mb: 1.5, textAlign: 'left', fontSize: 14 }}
                        >
                            Advanced Security Features
                        </Typography>
                        <Typography
                            sx={{ mb: 1.5, textAlign: 'left', fontSize: 14 }}
                        >
                            Enhanced protection with advanced encryption and
                            multi-factor authentication.
                        </Typography>

                        <Typography
                            sx={{ mb: 1.5, textAlign: 'left', fontSize: 14 }}
                        >
                            Enhanced Performance
                        </Typography>
                        <Typography
                            sx={{ mb: 1.5, textAlign: 'left', fontSize: 14 }}
                        >
                            Faster loading times and improved performance for
                            your content.
                        </Typography>
                        <Typography
                            sx={{ mb: 1.5, textAlign: 'left', fontSize: 14 }}
                        >
                            Monthly Performance Reports
                        </Typography>
                        <Typography
                            sx={{ mb: 1.5, textAlign: 'left', fontSize: 14 }}
                        >
                            Detailed reports on your content performance
                            delivered to your inbox.
                        </Typography>
                        <Typography
                            sx={{ mb: 1.5, textAlign: 'left', fontSize: 14 }}
                        >
                            Early Access to New Features
                        </Typography>
                        <Typography
                            sx={{ mb: 1.5, textAlign: 'left', fontSize: 14 }}
                        >
                            Be the first to try out new features and updates
                            before they are released to the public.
                        </Typography>
                        <Typography
                            sx={{ mb: 1.5, textAlign: 'left', fontSize: 14 }}
                        >
                            Multi-User Collaboration
                        </Typography>
                        <Typography
                            sx={{ mb: 1.5, textAlign: 'left', fontSize: 14 }}
                        >
                            Enable team members to collaborate and work on
                            projects together seamlessly.
                        </Typography>
                        <Typography variant='body2'>
                            Free Free Free ...
                            <br />
                            {'"Basic Plan with hidden advantages"'}
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
};

export default Pricing;
