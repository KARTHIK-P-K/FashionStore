import axios from "axios";

export const makeRequest = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,

  headers: {
    Authorization: "bearer " + import.meta.env.VITE_REACT_APP_API_TOKEN,
  },
});

export const api = {
  post: async (url, data) => {
    try {
      const response = await makeRequest.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
