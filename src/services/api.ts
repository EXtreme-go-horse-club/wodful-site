import axios from "axios";

const wodfulApi = axios.create({
  baseURL: "http://localhost:3333/api",
});

export default wodfulApi;
