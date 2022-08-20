import { axiosPrivate } from "./Config";
import { useEffect } from "react";
import AuthService from "./Auth.Services";

const useAxiosPrivate = () => {
    const token = AuthService.getCurrentUser();
    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                config.headers['Authorization'] = `Bearer ${token}`
                return config;
            }, (error) => Promise.reject(error)
        );
        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
        }
    }, [token])

    return axiosPrivate;
}

export default useAxiosPrivate;