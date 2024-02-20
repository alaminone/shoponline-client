import axios from 'axios';

const publicApi = axios.create({
  baseURL: 'http://localhost:5000',
});

const usePublicApi = () => {
  return publicApi;
};

export default usePublicApi;
