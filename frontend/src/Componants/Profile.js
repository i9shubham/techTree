import { Avatar } from '@mui/material';
import './Profile.css';
import styled from 'styled-components';

const Div = styled.div`
    margin-top: 5rem;
    display: flex;
    justify-content: center;
`;

const ProfileIcon = styled.div`
    height: 8rem;
    width: 8rem;
    border-radius: 10rem;
    text-align: center;
    font-size: 5rem;
`;
const P = styled.p`
    text-align: center;
`;
const Bio = styled.p`
    text-align: center;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
`;
const Profile = (props) => {
    console.log(props);
    return (
        <>
            <Div className='profileDiv'>
                <Avatar sx={{ bgcolor: '#502274' }}>
                    {props.data.name.slice(0, 1).toUpperCase()}
                </Avatar>
            </Div>
            <h1 className='profileDiv'> {props.data.name}</h1>
            <P>
                {props.data.username} •{' '}
                <a
                    href={`mailto:${props.data.email}`}
                    style={{ textDecoration: 'underline' }}
                >
                    {props.data.email}
                </a>
            </P>
            <Bio>{props.data.bio}</Bio>
        </>
    );
};
export default Profile;
