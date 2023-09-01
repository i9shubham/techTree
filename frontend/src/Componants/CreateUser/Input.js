import React, { useState, useEffect } from 'react';
import './Input.css';
const Input = () => {
    const [inputs, setInputs] = useState([{ socialHandle: '', url: '' }]);
    // console.log('inputs ', inputs);

    const handleAddSocial = (e) => {
        e.preventDefault();
        setInputs([...inputs, { socialHandle: '', url: '' }]);
    };

    const handleRemoveSocial = (i) => {
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

    return (
        <>
            {inputs.map((e, i) => (
                <div key={i} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <form>
                        <div>
                            {/* <label htmlFor='socialHandle'>Social Media</label> */}
                            <select
                                value={inputs[i].socialHandle}
                                name='socialHandle'
                                id='socialHandle'
                                onChange={(e) => {
                                    handleSelect(e, i);
                                }}
                            >
                                <option value='nan'>
                                    Select Social Media Platform
                                </option>
                                <option value='LinkedIn'>LinkedIn</option>
                                <option value='Instagram'>Instagram</option>
                                <option value='YouTube'>YouTube</option>
                                <option value='GitHub'>GitHub</option>
                                <option value='Facebook'>Facebook</option>
                                <option value='Twitter(x)'>Twitter(x)</option>
                                <option value='Blog'>Blog</option>
                                <option value='Codepen'>Codepen</option>
                                <option value='Portfolio'>Portfolio</option>
                                <option value='Snapchat'>Snapchat</option>
                                <option value='Reddit'>Reddit</option>
                            </select>
                        </div>
                        <div>
                            {/* <label htmlFor='urlInput'>URL</label> */}
                            <input
                                name='url'
                                type='text'
                                id='urlInput'
                                value={inputs[i].url}
                                onChange={(e) => {
                                    handleOnUrlChange(e, i);
                                    // console.log(url);
                                }}
                                placeholder='Enter Url'
                            />
                        </div>

                        {inputs.length > 1 ? (
                            <button
                                onClick={(e) => {
                                    handleRemoveSocial(i);
                                }}
                            >
                                - Remove Social
                            </button>
                        ) : (
                            <></>
                        )}
                    </form>
                    {i === inputs.length - 1 ? (
                        <button className='addSocial' onClick={handleAddSocial}>+ Add Social</button>
                    ) : (
                        <></>
                    )}
                </div>
            ))}
        </>
    );
};

export default Input;
