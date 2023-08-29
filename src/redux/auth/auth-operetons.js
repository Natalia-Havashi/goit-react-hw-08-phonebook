import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    reset(){
        axios.defaults.headers.common.Authorization = '';
    }
}

export const registerUserThunk = createAsyncThunk('auth/register', async (credentials, {rejectWithValue}) => {
    try {
        const {data} = await axios.post('/users/signup', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});

export const loginUserThunk = createAsyncThunk('auth/login', async(credentials, {rejectWithValue}) => {
    try {
        const {data} = await axios.post('/users/login', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const logOutThunk = createAsyncThunk('auth/logout', async(_, {rejectWithValue}) => {
    try {
        await axios.post('/users/logout');
        token.reset()
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const refreshThunk = createAsyncThunk('auth/refresh', async(_, {rejectWithValue, getState}) => {
    try {
    const token = getState().auth.token;
    if(!token) {
        return rejectWithValue('')
    }
    token.set(token);
    const {data} = await axios.get('/users/current');
    return data;
    } catch (error) {
        return rejectWithValue(error)
    }
})
