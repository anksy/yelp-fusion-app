'use strict';

const BusinessListController = require("../controller/business.controller");

module.exports = class AppRouter {
    constructor(app, router){
        this.app = app;
        this.router = router;
    }

    loadAppRoutes(){
        this.router.get('/search', BusinessListController.searchRecords);
    }

    init(){
        /* registering route */
        this.loadAppRoutes();

        /* return route instance */
        return this.router;
    }
}