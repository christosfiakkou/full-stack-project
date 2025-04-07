import axios from "axios";

const API_URL = "http://localhost:8000/api/tasks/";

export const fetchTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
