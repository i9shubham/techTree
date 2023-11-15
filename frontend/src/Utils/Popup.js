import React from 'react';
import styled from 'styled-components';

const Error = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 2rem;
    height: 100%;
    border-radius: 4px;
    background-color: #ffffff50;
    color: #000;
    font-weight: bold;
`;

const Popup = (props) => {

    if (props.error !== null) {
        setTimeout(() => {
            props.setError();
        }, 3000);
    }
    
    return (
        <div>
            {props.error !== null && (
                <Error>
                    <p style={{ color: '#000' }}>{props.error}</p>
                </Error>
            )}
        </div>
    );
};

export default Popup;
