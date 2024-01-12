import axios from "axios";

const wodfulApi = axios.create({
  baseURL: `${process.env.GATSBY_BASE_SERVER_URL}/api`,
});

export default wodfulApi;
