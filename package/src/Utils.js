import Cookies from 'js-cookie';

export const getUserId = () => {
    // console.log('user_id:', Cookies.get('user_id'));
    return localStorage.getItem('user_id');
};



export const getUserMoney = () => {
    return localStorage.getItem('user_money');
};

export const baseUrl = 'https://betting-production.up.railway.app';
export const socketUrl = 'wss://betting-production.up.railway.app';