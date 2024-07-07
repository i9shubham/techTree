import React, { useState } from 'react';
import './Input.css';
import { createTree } from '../../Services/tree';
import Popup from '../../Utils/Popup';
import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    padding: 0.5rem 0 0.5rem 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 1rem;
    //margin-top: 1rem;
    color: #000;
    transition: 0.4s;
    &:focus {
        outline: none;
        box-shadow: 0 0 4px #000;
    }
    border: 1px solid #502274;
`;

const LinkInput = () => {
    const [error, setError] = useState(null);
    const [inputs, setInputs] = useState([{ name: '', link: '' }]);
    // console.log('inputs ', inputs);

    const setDefaultError = () => {
        setError(null);
    };

    const handleAddSocial = (e) => {
        e.preventDefault();
        setInputs([...inputs, { name: '', link: '' }]);
    };

    const handleRemoveSocial = (e, i) => {
        e.preventDefault();
        console.log(i);
        let list = [...inputs];
        list.splice(i, 1);
        setInputs(list);
        console.log(list);
    };

    const handleOnUrlChange = (e, index) => {
        const { value, name } = e.target;
        let list = [...inputs];
        list[index][name] = value;
        setInputs(list);
    };

    const handleSelect = (e, index) => {
        const { value, name } = e.target;
        let list = [...inputs];
        list[index][name] = value;
        setInputs(list);
    };

    const options = [
        'LinkedIn',
        'Instagram',
        'YouTube',
        'GitHub',
        'Facebook',
        'Twitter',
        'Blog',
        'Codepen',
        'Portfolio',
        'Snapchat',
        'Reddit',
        'Other',
    ];

    const username = window.localStorage.getItem('user');
    const updateTree = (e) => {
        e.preventDefault();
        const socials = [...inputs];
        createTree(username, { socials: socials })
            .then((res) => {
                if (res.data.code === 201) {
                    window.location.href = `/${username}`;
                } else {
                    setError(res?.data?.message);
                }
            })
            .catch((err) => {
                setError('Internal Server Error');
            });
    };

    if (error !== null) {
        return <Popup overlay setError={setDefaultError} error={error} />;
    }
    return (
        <>
            <form style={{ boxShadow: 'none' }}>
                {inputs.map((e, index) => (
                    <div
                        className='singleSocial'
                        key={index}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <div>
                            {/* <label htmlFor='socialHandle'>Social Media</label> */}
                            <select
                                value={inputs[index].name}
                                name='name'
                                id='socialHandle'
                                onChange={(e) => {
                                    handleSelect(e, index);
                                }}
                            >
                                <option value='nan'>
                                    {' '}
                                    -- select an option --{' '}
                                </option>
                                {/* <option value='nan'>
                                    Select Social Media Platform
                                </option> */}
                                {options.map((data, i) => (
                                    <option value={data} key={i}>
                                        {data}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            {/* <label htmlFor='urlInput'>URL</label> */}
                            <Input
                                name='link'
                                type='text'
                                // id='urlInput'
                                value={inputs[index].link}
                                onChange={(e) => {
                                    handleOnUrlChange(e, index);
                                    // console.log(url);
                                }}
                                placeholder='Enter Url'
                            />
                        </div>

                        {inputs.length > 1 ? (
                            <button
                                className='addSocial'
                                onClick={(e) => {
                                    console.log(index);
                                    handleRemoveSocial(e, index);
                                }}
                            >
                                - Remove Social
                            </button>
                        ) : (
                            <></>
                        )}

                        {index === inputs.length - 1 ? (
                            <button
                                className='addSocial'
                                onClick={handleAddSocial}
                            >
                                + Add Social
                            </button>
                        ) : (
                            <></>
                        )}
                    </div>
                ))}
                {/* <div className='submitSocial'>
                    <button onClick={updateTree} className='addSocial'>
                        Create Tree
                    </button>
                </div> */}
            </form>
        </>
    );
};

export default LinkInput;
