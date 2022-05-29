import axios from "axios";



const postDB = axios.create({    
    baseURL: 'http://192.168.1.6:5010',    
    timeout: 5000, 
});


export default postDB;