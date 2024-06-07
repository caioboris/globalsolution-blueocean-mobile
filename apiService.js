// apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/plantations';

export const getPlantations = () => {
  return axios.get(API_URL);
};

export const updatePlantation = (id, data) => {
  return axios.put(`${API_URL}/${id}`, data);
};

export const deletePlantation = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export const createPlantation = (data) => {
  return axios.post(API_URL, data);
};