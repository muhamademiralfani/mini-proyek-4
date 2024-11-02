import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL;

export const fetchStudent = async () => {
  const response = await axios.get(`${API_URL}/students`, {
    headers: {
      'Content-Type': 'application/json',
      'api-key': 'RJS1-202413',
    },
  });
  return response.data;
};

export const postStudent = async (data) => {
  const response = await axios.post(`${API_URL}/students`, data, {
    headers: {
      'Content-Type': 'application/json',
      'api-key': 'RJS1-202413',
    },
  });
  return response.data;
};
export const putStudent = async (data, id) => {
  const response = await axios.put(`${API_URL}/students/${id}`, data, {
    headers: {
      'Content-Type': 'application/json',
      'api-key': 'RJS1-202413',
    },
  });
  return response.data;
};

export const detailStudent = async (id) => {
  const response = await axios.get(`${API_URL}/students/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'api-key': 'RJS1-202413',
    },
  });
  return response.data;
};
export const deleteStudent = async (id) => {
  const response = await axios.delete(`${API_URL}/students/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'api-key': 'RJS1-202413',
    },
  });
  return response.data;
};
