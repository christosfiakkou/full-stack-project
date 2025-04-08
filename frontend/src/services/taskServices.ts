import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL}/api/tasks/`;

export const fetchTasks = async () => {
  try {
    console.log('Fetching tasks from:', API_URL);
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};
