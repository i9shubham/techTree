import './Profile.css';
// import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
// import LoyaltyIcon from '@mui/icons-material/Loyalty';
const Profile = (props) => {
    console.log(props.data.image);
    return (
        <>
            <div className='profileDiv'>
                <img
                    src={`data:image/jpeg;base64,${props.data.image}`}
                    alt='Profile Pic'
                    className='profile-pic'
                />
            </div>
            {/* <div className='tools'>
                <LoyaltyIcon />
                <QrCodeScannerIcon />
            </div> */}
            <h1 className='profileDiv'> {props.data.name}</h1>
            <p>
                <a href={`mailto:${props.data.email}`}>{props.data.email}</a>
            </p>
            <p className='profileDiv'>{props.data.bio}</p>
        </>
    );
};
export default Profile;
