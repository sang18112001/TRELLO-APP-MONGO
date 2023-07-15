import axios from 'axios';

const BASE_URL = 'http://localhost:8080/v1';
const trelloAPI = {
  getAllCards: async () => {
    const response = await axios.get(`${BASE_URL}/boards/`);
    return response.data;
  },
  getAllTasks: async () => {
    const response = await axios.get(`${BASE_URL}/columns/`);
    return response.data
  },
  getTasksByIdCard: async (id: string) => {
    const response = await axios.get(`${BASE_URL}/boards/${id}`);
    return response.data;
  },
  addCard: async (data: any) => {
    const response = await axios.post(`${BASE_URL}/boards/`, data);
    return response.data.insertedId;
  },
  addTask: async (data: any) => {
    const response = await axios.post(`${BASE_URL}/columns`, data);
    return response.data.insertedId;
  },
  deleteCard: async (id: string) => {
    const response = await axios.delete(`${BASE_URL}/boards/${id}`);
    return response.data.insertedId;
  },
  deleteTask: async (id: string) => {
    const response = await axios.delete(`${BASE_URL}/columns/${id}`);
    return response.data.insertedId;
  },
  editTitleCard: async (id: string, newTitle: any) => {
    const response = await axios.put(`${BASE_URL}/boards/${id}`, newTitle);
    return response.data;
  },
  editTitleTask: async (id: string, newTitle: any) => {
    const response = await axios.put(`${BASE_URL}/columns/${id}`, newTitle);
    return response.data;
  },
};

export default trelloAPI;
