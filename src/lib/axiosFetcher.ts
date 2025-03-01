import Cookies from 'js-cookie';
import axios from "axios";
import axiosInstance from './axios';


export default async function getAllData(endPoint : string) {
  
  try {
    const authToken = Cookies.get("auth_token");
    if (!authToken) {
      return;
    }
      const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/${endPoint}`, {
        headers: {
          "Authorization": `Bearer ${authToken}`,
        },
      });
      console.log('Data : ', response.data);
      return response.data;

  }catch (err) {
    if (axios.isAxiosError(err)) {
      // const axEr = err as AxiosError;
      return err;
    }
  }
}