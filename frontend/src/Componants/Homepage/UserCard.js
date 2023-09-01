import * as React from 'react';
import Card from '@mui/material/Card';
import {
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@mui/material';

function UserCard() {
    return (
        <Card sx={{ maxWidth: 400, backgroundColor: '#ffffff50', backdropFilter: 'blur(10px)' }}>
            <CardMedia
                sx={{ height: 340 }}
                image='/ishubham.png'
                title='Shubham Ingole'
            />
            <CardContent sx={{}}>
                <Typography gutterBottom variant='h5' component='div'>
                    Shubham Ingole
                </Typography>
                <Typography variant='body' color='text.secondary'>
                Full-Stack Developer | CP-C++ | Graphics | CSE'24
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default UserCard;
