import './Links.css';
import styled from 'styled-components';

const LinkDiv = styled.div`
    margin-top: 1rem;
`;

const Greet = styled.p`
    font-weight: bold;
    margin-bottom: 20px;
`;

const Link = styled.div`
    display: flex;
    justify-content: center;
    width: 50vw;
    margin: 0 auto;
    border: 1px solid #fff;
    border-radius: 5rem;
    margin-bottom: 1.2rem;
    transition: 0.3s;
    background-color: #502274;
    color: #fff;
    &:hover {
        background-color: #fff;
        color: #502274;
        border: 1px solid #502274;
    }
`;

const LinkName = styled.a`
    font-weight: 500;
    font-size: 1rem;
    line-height: 3;
    width: 100%;
    font-family: cursive;
    text-align: center;
`;

const Links = (props) => {
    return (
        <>
            <LinkDiv>
                <Greet>Let's Connect</Greet>
                {props.data.links.map((data, key) => (
                    <Link key={key}>
                        <LinkName href={data.url}>{data.title}</LinkName>
                    </Link>
                ))}
            </LinkDiv>
        </>
    );
};
export default Links;
