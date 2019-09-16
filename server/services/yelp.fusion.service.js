'use strict';

/* addding http service */
const HTTP = require("./http.service")

class Fusion{
    async getBusinesses(data){
        /* get business based on search */
        return await HTTP.request("GET", "search", data);
    }

    async getReviews(id){
        /* get reviews */
        return await HTTP.request("GET", id+'/reviews');
    }
}

module.exports = new Fusion();