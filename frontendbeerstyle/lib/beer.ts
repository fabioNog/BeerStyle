import axios from 'axios';
import { TemperatureType,BeerType } from 'interfaces';

const BASE_URL = 'http://localhost:3001';

export const beerApi = {
  create: async (beer: BeerType) => {
    const res = await axios.post(`${BASE_URL}/beerstyle`, beer);
    return res.data;
  },
  getBeer: async (temperature: TemperatureType) => {
    console.log(temperature);
    const res = await axios.patch(`${BASE_URL}/beerstyle_temperature`, temperature);
    
    return res.data;
  },
  getAll: async (): Promise<BeerType[]> => {
    const res = await axios.get(`${BASE_URL}/beerstyle`);
    return res.data;
  },
  update: async (task: BeerType) => {
    const res = await axios.patch(`${BASE_URL}/beerstyle/${task.mintemperature}`, task);
    return res.data;
  },
  delete: async (id: string) => {
    const res = await axios.delete(`${BASE_URL}/beerstyle/${id}`);
    return res.data;
  },
};
