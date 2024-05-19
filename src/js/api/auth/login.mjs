import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";
const API_AUTH = '/auth';
const API_LOGIN = '/login';
const API_LOGIN_URL = API_SOCIAL_URL+API_AUTH+API_LOGIN;



export async function login(profile) {
    try {
        const body = JSON.stringify(profile);
        const response = await fetch(API_LOGIN_URL,{
            headers:{
                "Content-Type": "application/json",
            },
            method:'POST',
            body,
        });

        const {accessToken, ...user} = await response.json();
        if(!response.ok){
            alert("Login failed: " + user.errors[0].message);
        }else{
            storage.save("token",accessToken);
            storage.save("profile",user);
            alert('Login sucessful, redirecting to profile page!');
            window.location.href = "/profile/index.html";
        }
      
      
    } catch (error) {
        console.log(error);
    }
}