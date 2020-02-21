import React from 'react';

export const getArrFromStorage = () => {
    const arrayOfUsersFromLS = JSON.parse(localStorage.getItem('arrOfUsersLS'));
    return arrayOfUsersFromLS || []
}

export const setToLocalStorage = (obj) => {
    localStorage.setItem('arrOfUsersLS', JSON.stringify(obj));
}