import Cookies from 'js-cookie';

export const getUserId = () => {
    // console.log('user_id:', Cookies.get('user_id'));
    return localStorage.getItem('user_id');
};



export const getUserMoney = () => {
    return localStorage.getItem('user_money');
};

export const getUserName = () => {
    return localStorage.getItem('user_name');
};

export const getName = () => {
    return localStorage.getItem('name');
};

export const baseUrl = 'https://betting-mzo7.onrender.com';
export const socketUrl = 'wss://betting-mzo7.onrender.com';