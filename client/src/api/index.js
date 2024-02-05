import axios from 'axios'
const API = axios.create({baseURL:`http://localhost:5500/`});
API.interceptors.request.use(req=>{
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const login=(authData)=>API.post("/user/login",authData);

export const updateChanelData = (id, updateData) =>
  API.patch(`/user/update/${id}`, updateData);
export const fetchAllChanel = () => API.get("/user/getAllChanels");