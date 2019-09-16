import React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import ReactDOM from "react-dom";

/*Setting up interceptors with axios*/

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return {
        statusCode: response.status,
        data: (typeof response.data === 'boolean' && response.data === false ? 'false' : response.data) || []
    };
}, function (error) {
    if (!error.response && error.message === 'Network Error') {
        //alert("Couldn't connect to server.");

        ReactDOM.render(<ToastContainer hideProgressBar closeOnClick={false} />, document.getElementById('toastr'));

        toast("Couldn't connect to server. Please try again later.", { type: "info" });
        return Promise.reject();
    }
    // Do something with response error
    return Promise.reject(error.response.data);
});


export default class HTTP {
    static Request(method, url, data = null) {
        return new Promise((resolve, reject) => {
            let request = {
                method: method,
                url: url,
                [method.toUpperCase() === 'GET' ? "params" : "data"]: data
            };

            axios(request)
                .then(response => resolve(response))
                .catch(error => reject(error));
        });
    }
}