import axios from "axios";
import { AsyncStorage } from "react-native"

const instance = axios.create({
  baseURL: "http://df918785fa67.ngrok.io"
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
)

export default instance;

// in track server, type ngrok http 3000 replace the above baseURL with the one generated.
// "http://[12charCode].ngrok.io"