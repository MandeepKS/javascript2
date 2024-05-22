import { API_SOCIAL_URL } from "../constants.mjs";
 
const API_AUTH = `/auth`;
const API_REGISTER = `/register`;
const API_REGISTER_URL = `${API_SOCIAL_URL}${API_AUTH}${API_REGISTER}`;

export async function register(profile) {
    console.log(API_REGISTER_URL);
    try {
    const body = JSON.stringify(profile);
    const response = await fetch(API_REGISTER_URL,{
        headers:{
            "Content-Type": "application/json",
        },
        method:'POST',
        body,
    });
    const result = await response.json();
    console.log(result);
    if(!response.ok){
      alert("Register failed: " + result.errors[0].message);
    }else{
      alert('User register sucessfully, Redirecting to login page!');
      window.location.href = "/index";
    }

  } catch (error) {
    console.log(error);
  }
    
    
}