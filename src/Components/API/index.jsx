
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Squares } from "react-activity";
import "react-activity/dist/library.css";
import { GetCookie, RemoveCookie } from "../Cookies";
const index = () => {
    const [loader, setLoader] = useState(false);
    const [token, settoken] = useState(null);

    useEffect(() => {
        const { token } = GetCookie();
        settoken(token);
    })

    const APIcall = async (url, method, body = null, action = null) => {
        setLoader(true)

        const requestOptions = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: body ? JSON.stringify(body) : null,
        };
        const response = await fetch(`http://127.0.0.1:8000/api${url}`, requestOptions);
        const data = await response.json();

        if (data.success) {
            toast.success(data.success, {
                position: "bottom-right", theme: "dark"
            });
            action?.resetForm();

        } else {
            toast.error(data.error ? data.error : "Something Went Wrong", {
                position: "bottom-right", theme: "dark"
            });
        }


        setLoader(false)
        return data;
    }
    return { APIcall, loader }
}
export default index;

