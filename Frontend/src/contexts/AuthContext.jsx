import axios from 'axios';
import { Children } from 'react';
import { createContext, useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom';

const AuthContext = createContext();
const client=axios.create({
    baseURL:"http://localhost:8000/api/users"    
});

export const AuthProvider=({Children})=>{
    
}