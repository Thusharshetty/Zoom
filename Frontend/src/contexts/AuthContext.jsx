import axios from 'axios';
import { Children } from 'react';
import { createContext, useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom';

 export const AuthContext = createContext({});
const client=axios.create({
    baseURL:"http://localhost:8000/api/users"    
});

export const AuthProvider=({Children})=>{
    const authContext=useContext(AuthContext);
    const [userData,setUserData]=useState(authContext);
    const router=useNavigate();

    const handleRegister=async(name,email,password)=>{
        try{
            const response=await client.post("/register",{name:name,username:email,password:password});
            if(response.status===201){
                alert("Registration successful! Please login.");
                router("/login");
            }
        }catch(error){
            throw new Error(`Error occurred during registration: ${error.message}`);
        }
    }
    const handleLogin=async(email,password)=>{
        try{
            const response=await client.post("/login",{username:email,password:password});
            if(response.status===200){
                const {token}=response.data;
                setUserData({token:token});
                localStorage.setItem("token",token);
                alert("Login successful!");
                router("/home");
            }
        }catch(error){
            throw new Error(`Error occurred during login: ${error.message}`);

        }
    }

    const  getHistoryOfUser=async()=>{
        try{
            const token=localStorage.getItem("token");
            const response=await client.get("/get_all_activity",{params:{token:token}});
            if(response.status===200){
                return response.data;
            }
        }catch(error){
            throw new Error(`Error occurred while fetching user history: ${error.message}`);
        }
}

const addToUserHistory =async(meetingCode)=>{
    try{
        const token=localStorage.getItem("token");
        const request=await client.post("/add_to_activity",{token:token,meeting_code:meetingCode});
        
            return request;
}catch(error){
    throw new Error(`Error occurred while adding to user history: ${error.message}`);
}
}
const data={ userData, setUserData, addToUserHistory, getHistoryOfUser, handleRegister, handleLogin};
return(
    <AuthContext.Provider value={data}>
        {Children}
    </AuthContext.Provider>
)
}