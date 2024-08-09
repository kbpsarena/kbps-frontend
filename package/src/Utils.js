import Cookies from 'js-cookie';

export const getUserId = () => {
    // console.log('user_id:', Cookies.get('user_id'));
    return Cookies.get('user_id');
};



export const getUserMoney = () => {
    return Cookies.get('user_money');
};
