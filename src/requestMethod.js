import axios from "axios";

const BASE_URL = "http://localhost:5000/";
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDc1NzFiMGYyNWMwMWI2OWJlMTE1ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjM2NjE5NSwiZXhwIjoxNjQyNjI1Mzk1fQ.06-TMzGu4dlJWW0JiN7AHJN7VEnvDdETBd698rXmEQI';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
