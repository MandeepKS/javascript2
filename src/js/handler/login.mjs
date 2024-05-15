import { login } from "../api/auth/login.mjs";

export function loginFormListner() {
    const logInForm = document.getElementById("loginForm");
    
    if (!logInForm) {
        console.error("Login form not found!");
        return;
    }
    // SignIn form submit
    logInForm.addEventListener("submit",(event)=>{
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());
        login(profile);
    });
}