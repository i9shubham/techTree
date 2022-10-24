import "./Profile.css";
import myImage from "./Shubham.png";
const Profile = () => {
  return (
    <>
    <div className="profileDiv">
      <img src={myImage} alt="Profile Pic" className="profile-pic" />
    </div>
    <h1 className="profileDiv">Shubham Ingole</h1>
    <p className="profileDiv">Full-Stack Developer | CP-C++ | Graphics | CSE'24</p>
    </>
  );
};
export default Profile;
