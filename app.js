'use strict';

require('dotenv').config({silent: true});
const express 		= require('express'),
	helmet 			= require('helmet'),
	cors 			= require('cors'),
	bodyParser 		= require('body-parser'),
	http 			= require('http'),
	path 			= require('path'),
    router          = express.Router(),
    routes          = require('./server/routes');
    

class Server{
    constructor(){
        /*  */
        this.port   = process.env.PORT || 4000;
        /*init express app*/
		this.app    = express();
		/*init a sever*/
        this.server = http.createServer(this.app);
        
        
		/*init helmets for securing http headers*/
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
        
        /* registering routes */
        this.routes = new routes(this.app, router).init();
    }

    /* server initailze method */
    init(){
        this.app.use(express.static(__dirname + '/app/build'));

        /* listing apis on /api path */
        this.app.use('/api', this.routes);

        /* server static file on / */
        this.app.get(/^((?!\/(api)).)*$/, (req, res) => res.sendFile(path.resolve('./app/build/index.html')));

        /* listening server on port */
        this.server.listen(this.port, () => console.log('App running on ', this.server.address().port));
    }
}

new Server().init();