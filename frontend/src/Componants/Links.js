import './Links.css';
const Links = () => {
    return (
        <div className='linkDiv'>
            <div className='link'>
                <a
                    className='linkName'
                    href='https://www.linkedin.com/in/shubham-ingole'
                >
                    Linkedin
                </a>
            </div>

            <div className='link'>
                <a className='linkName' href='https://www.twitter.com/twtShubz'>
                    Twitter
                </a>
            </div>

            <div className='link'>
                <a
                    className='linkName'
                    href='https://www.github.com/Shubham7350'
                >
                    Github
                </a>
            </div>

            <div className='link'>
                <a
                    className='linkName'
                    href='https://www.instagram.com/ishubham___'
                >
                    Instagram
                </a>
            </div>

            <div className='link'>
                <a className='linkName' href='https://shubhamingole.me/'>
                    Website
                </a>
            </div>
        </div>
    );
};
export default Links;
