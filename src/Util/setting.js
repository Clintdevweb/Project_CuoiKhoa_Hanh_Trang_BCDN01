import axios from "axios";

export const domain = 'https://elearningnew.cybersoft.edu.vn'

// Cấu hình interceptor
export const http = axios.create({
    baseURL:'https://elearningnew.cybersoft.edu.vn',
    timeout:30000,
   
})

http.interceptors.request.use((config) => {
    config.headers ={
        ...config.headers,
        'TokenCybersoft': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwMSIsIkhldEhhblN0cmluZyI6IjEyLzA0LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0OTcyMTYwMDAwMCIsIm5iZiI6MTYyMDkyNTIwMCwiZXhwIjoxNjQ5ODY5MjAwfQ.RkFKrifGWTY3MP0bQtIpvA5WpWWrcSkGjDSw01LwhuI'
    }
    const getToken = () => {
        let credentials = localStorage.getItem('credentials');
        credentials = JSON.parse(credentials);
        return credentials&&credentials.accessToken;
    };
    const token= getToken();
    if(token){
        config.headers ={
            ...config.headers,
            "Authorization": `Bearer ${token}`
    }
    };
    return config
}, (errors) => {
    return Promise.reject(errors)
})