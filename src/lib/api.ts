import axios from "axios";



export const api = axios.create({
  baseURL: "https://api.sofascore.com/api/v1/sport/football/events"
})