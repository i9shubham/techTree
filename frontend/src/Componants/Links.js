import './Links.css';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

const LinkDiv = styled.div`
    margin-top: 4rem;
`;

const Greet = styled.p`
    font-weight: bold;
    margin-bottom: 20px;
    color: ${(props) => props.theme.button.text};
`;

const Link = styled.div`
    display: flex;
    justify-content: center;
    width: 50vw;
    margin: 0 auto;
    border: 1px solid #fff;
    background-color: ${(props) => props.theme.button.bg};
    border-radius: 5rem;
    margin-bottom: 1.2rem;
    transition: 0.3s;
    color: ${(props) => props.theme.button.text};
    &:hover {
        background-color: ${(props) => props.theme.button.text};
        color: ${(props) => props.theme.button.bg};
    }
`;

const LinkName = styled.a`
    font-weight: 500;
    font-size: 1rem;
    line-height: 3;
    width: 100%;
    text-align: center;
`;

const Links = (props) => {
    console.log(props.theme);
    return (
        <>
            <ThemeProvider theme={props.theme}>
                <LinkDiv>
                    <Greet>Let's Connect</Greet>
                    {props.link.map((data, key) => (
                        <Link key={key}>
                            <LinkName href={data.link}>{data.name}</LinkName>
                        </Link>
                    ))}
                </LinkDiv>
            </ThemeProvider>
        </>
    );
};
export default Links;
