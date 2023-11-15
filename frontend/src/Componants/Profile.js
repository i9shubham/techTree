import { ThemeProvider } from 'styled-components';
import './Profile.css';
import styled from 'styled-components';

const Div = styled.div`
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    font-family: ${(props) => props.theme.font};
`;

const ProfileIcon = styled.div`
    height: 8rem;
    width: 8rem;
    border-radius: 10rem;
    text-align: center;
    font-size: 5rem;
    border: 1px solid ${(props) => props.theme.button.text};
    color: ${(props) => props.theme.bio};
`;
const P = styled.p`
    text-align: center;
`;
const Bio = styled.p`
    text-align: center;
    color: ${(props) => props.theme.bio};
    margin-top: 2rem;
    display: flex;
    justify-content: center;
`;
const Profile = (props) => {
    console.log(props);
    return (
        <>
            <ThemeProvider theme={props.theme}>
                <Div className='profileDiv'>
                    {props.data.image ? (
                        <img
                            src={`data:image/jpeg;base64,${props.data.image}`}
                            alt='Profile Pic'
                            className='profile-pic'
                        />
                    ) : (
                        <ProfileIcon>
                            {props.data.username.slice(0, 1).toUpperCase()}
                        </ProfileIcon>
                    )}
                </Div>
                <h1 className='profileDiv'> {props.data.name}</h1>
                <P>
                    <a href={`mailto:${props.data.email}`}>
                        {props.data.email}
                    </a>
                </P>
                <Bio>{props.data.bio}</Bio>
            </ThemeProvider>
        </>
    );
};
export default Profile;
