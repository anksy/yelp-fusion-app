'use strict';
const needle = require("needle");
const { FUSION_API, FUSION_ENDPOINT } = require("../constants");

class Needle{
    constructor(){
        this.options = {
            headers: { 'Authorization': `Bearer ${FUSION_API}` }
        }
    }
    async request(method, path, data){
        let response = await needle(method, [FUSION_ENDPOINT, path].join("/"), data, this.options);
        return response.body;
    }
}

module.exports = new Needle();