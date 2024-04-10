import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3003/api';
// const BASE_URL = 'http://localhost:3005/api';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  config => {
    const localStorageData = localStorage.getItem('persist:auth');
    if (localStorageData) {
      const token = JSON.parse(localStorageData).token.replace(/"/g, '');

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      console.log(data);
      return data.result;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    console.log(newContact);
    try {
      const { data } = await axios.post('/contacts', newContact, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(data);
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (_id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${_id}`);
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);
