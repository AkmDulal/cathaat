// import axios from 'axios';
// const instance = axios.create({
//    baseURL: 'https://demo.zontropati.shop/api',
// });
// export default instance;
import axios from 'axios';
const BASE_URL = 'https://demo.zontropati.shop/api';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL
});