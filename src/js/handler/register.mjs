import { register } from "../api/auth/register.mjs";

export function signUpFormListner() {
    const signUpform = document.getElementById("signUp");
    
    //Signup form submit
    signUpform.addEventListener("submit",(event)=>{
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());
        console.log(profile);
        register(profile);
    });
}