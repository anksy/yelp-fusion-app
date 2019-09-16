import http from "../services/http";
import { __api_searchBusinesses } from "./endpoint";

export const getBusinesses = data => {
    return http.Request("GET", __api_searchBusinesses, data);
}
