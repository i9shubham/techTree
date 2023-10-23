import './Links.css';
const Links = (props) => {
    // console.log(props.link);
    return (
        <div className='linkDiv'>
            <p>Let's Connect</p>
            {props.link.map((data, key) => (
                <div className='link' key={key}>
                    <a className='linkName' href={data.link}>
                        {data.name}
                    </a>
                </div>
            ))}
        </div>
    );
};
export default Links;
