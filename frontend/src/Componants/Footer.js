import './Footer.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <p>©️2022 Shubham Ingole</p>
                <div className='footer-links'>
                    <a href='https://www.linkedin.com/in/i9shubham/'>
                        <FaLinkedin />
                    </a>
                    <a href='https://www.github.com/i9shubham/'>
                        <FaGithub />
                    </a>
                    <a href='https://twitter.com/i9shubham'>
                        <FaXTwitter />
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Footer;
