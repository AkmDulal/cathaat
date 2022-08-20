import { cookiRemove, getCookie } from './Cookies';

const logout = () => {
    // let cRemove = cookiRemove(COOKIE_NAME);
    let cRemove = cookiRemove("token");
    localStorage.removeItem("Username")
    return cRemove;
};

const getCurrentUser = () => {
   let usertoken = getCookie("token");
    return usertoken;
};
const privateoRouter = () => {
   let usertoken = getCookie("token");
   console.log(usertoken, "usertoken")
   if(Number(usertoken) === 0){
       return  false
   }   else {
       return  true
   }
};
const AuthService = {
    logout,
    getCurrentUser,
    privateoRouter
};

export default AuthService;