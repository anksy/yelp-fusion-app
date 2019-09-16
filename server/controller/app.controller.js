'use strict';

module.exports = class App {
    success(res, json){
        return res.json({ success: true, message: "Request Completed", ...json});
    }

    error(res, errors){
        let error = [];

        /* error.message */
        if(errors && errors.error && errors.error.errors){
            for(let e in errors.error.errors){
                error.push(errors.error.errors[e].message);
            }
        }else if(errors.error && errors.error.message){
            error.push(errors.error.message);
        }else if(errors.message){
            error.push(errors.message);
        } 
        
        return res.json({ success: false, message: errors.message || "Request Failed",  errors: error.join("|")});
    }
}