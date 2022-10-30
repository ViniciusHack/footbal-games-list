import axios from "axios";

export const externalApi = axios.create({
  baseURL: "https://webws.365scores.com/web/games/allscores"
})