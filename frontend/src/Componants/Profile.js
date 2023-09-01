import './Profile.css';
import myImage from '../Images/ishubham.png';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import { Container } from '@mui/material';
const Profile = () => {
    return (
        <>
            <div className='profileDiv'>
                <img src={myImage} alt='Profile Pic' className='profile-pic' />
            </div>
            <div className='tools'>
                <LoyaltyIcon />
                <QrCodeScannerIcon />
            </div>
            <h1 className='profileDiv'> Mr. Shubham Ingole</h1>
            <p className='profileDiv'>
                Full-Stack Developer | CP-C++ | Graphics | CSE'24
            </p>
        </>
    );
};
export default Profile;
