import axios from "axios";

const BASE_URL = "http://localhost:5000/";
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDc1NzFiMGYyNWMwMWI2OWJlMTE1ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mjc5ODcyNiwiZXhwIjoxNjQzMDU3OTI2fQ.l3e1qxM4KAiBgqZIamcTri0W3zgPEWI7BIUGHLQjFg0';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
