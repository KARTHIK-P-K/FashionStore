import axios from "axios";

export const makeRequest = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: "http://localhost:1337/api",
  // headers: {
  //   Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
  // },
  headers: {
    Authorization:
      "bearer 52153aa5ea141c1c117ed93b9a903a91b11484a1ba62dafc9814581c9b7b0253f213ddf3641258bfdfbd5fa75662ae108dac8f2d7c427a70e6fba7da622b9436f43bd13ee83011385e25728dad17bade85be380ca3363b2382a248c2667de591a2e8af4044ea1fa4668488c14db714dff4333292252755ea31abccc499a5dcd9",
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
