'use strict';

/* import App Class */
const App = require("./app.controller");

/* import fusion service */
const FUSION = require("../services/yelp.fusion.service");

class BusinessesListController extends App{
    constructor(){
        super();
        /* bind this with methods */
        this.searchRecords = this.searchRecords.bind(this);
    }
    
    /**
     * 
     * @param req - Request came through Express Server
     * @param res  - Express Renponse Object
     */

    async searchRecords(req, res){
        /* extract query string */
        let query = req.query;

        try {
            /* get businesses based on user search */
            let data = await FUSION.getBusinesses(query);
            /* if no data */
            if(!data || !data.businesses) throw new Error("No Data Found");

            data = await Promise.all(data.businesses.map(async business => {
                /* get business latest review */
                let reviews = await FUSION.getReviews(business.id) || [];

                /* return desired obj */
                return {
                    name: business.name, 
                    location:{
                        address: `${business.location.address1 || ""} ${business.location.address2 || ""}`.trim(),
                        city : business.location.city
                    },
                    review: (reviews.reviews && reviews.reviews.length && reviews.reviews[0].text) || "",
                    reviewedBy: (reviews.reviews && reviews.reviews.length && reviews.reviews[0].user && reviews.reviews[0].user.name) || ""
                };
            }));

            /* return the response */
            return this.success(res, {data});

        } catch (error) {
            /* catch and throw error */
            return this.error(res, {error})
        }
    }
}

module.exports = new BusinessesListController();