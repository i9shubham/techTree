export const setToLS = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLS = (key) => {
    const value = window.localStorage.getItem(key);
    // console.log(value)
    if (value !== 'undefined') {
        // console.log(value)
        return JSON.parse(value);
    } else {
        return null;
    }
};
