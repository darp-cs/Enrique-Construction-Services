import React from 'react';
import axios from 'axios'
const defaultInstance = axios.create({
    baseURL: 'https://localhost:5000/',
    timeout: 1000,
  });

  export default defaultInstance