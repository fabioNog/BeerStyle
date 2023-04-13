import axios from "axios";
import { TemperatureType, BeerType } from "interfaces";

const BASE_URL = "https://beearstyledeploy.onrender.com";

export const beerApi = {
  create: async (beer: BeerType) => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "https://beer-style.vercel.app",
      },
    };
    const res = await axios.post(`${BASE_URL}/beerstyle`, beer, config);
    return res.data;
  },
  getBeer: async (temperature: TemperatureType) => {
    console.log(temperature);
    const res = await axios.patch(
      `${BASE_URL}/beerstyle_temperature`,
      temperature
    );

    return res.data;
  },
  getAll: async (): Promise<BeerType[]> => {
    const res = await axios.get(`${BASE_URL}/beerstyle`);
    return res.data;
  },
  update: async (task: BeerType) => {
    const res = await axios.patch(
      `${BASE_URL}/beerstyle/${task.mintemperature}`,
      task
    );
    return res.data;
  },
  delete: async (id: string) => {
    const res = await axios.delete(`${BASE_URL}/beerstyle/${id}`);
    return res.data;
  },
};
