const signUp = document.querySelector(".sign-up");
const logIn = document.querySelector(".log-in");
const btnTop = document.querySelector(".btn-top");
const loginFormBtn = document.querySelector(".login-form-btn");
const modelPostBtn = document.querySelector(".model-header button");
const modelFooterPlus = document.querySelector(".model-footer span");


const modelInput = document.querySelector(".model-input");


const postBtn = document.querySelector(".post-btn");
const modelWrapper = document.querySelector(".model-wrapper");
const model = document.querySelector(".model");
const postmodelX = document.querySelector(".model-header i");


const loginModel = document.querySelector(".login-model");
const modelX = document.querySelector(".login-model i");



const mainPage = document.querySelector(".main-page");
const loginPage = document.querySelector(".login-page");
const newsFeedPage = document.querySelector(".feeds-page");

// user section
const user = document.querySelector(".user");
const sidebar = document.querySelector(".sidebar");
const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const xBtn = document.querySelector(".sidebar-header i");


// dark mode
const toggle = document.querySelector(".toggle");
const circle = document.querySelector(".circle");


function goToLogInPage() {
    mainPage.style.display = "none";
    loginPage.style.display = "grid";
}


signUp.addEventListener("click", () => {
    goToLogInPage();
})


logIn.addEventListener("click", () => {
    goToLogInPage();
})


// when both fields of input of main page is filled then direct to feeds page

// when Only one field of input of main page is filled then direct to login page

btnTop.addEventListener("click", () => {
    const inputUserInfo = document.querySelector(".user-info");
    const inputPassword = document.querySelector(".password");

    if (inputUserInfo.value !== "" && inputPassword.value !== "") {
        mainPage.style.display = "none";
        newsFeedPage.style.display = "block";
    } else if (inputUserInfo.value !== "" || inputPassword.value !== "") {
        goToLogInPage();
        loginModel.style.display = "block";
    } else {

    }
})

// login model pg
loginPage.addEventListener("click", () => {
    loginModel.style.display = "none";
})


// login form btn
loginFormBtn.addEventListener("click", () => {
    const loginUserInfo = document.querySelector(".login-user-info");
    const loginPassword = document.querySelector(".login-password");

    if (loginUserInfo.value !== "" && loginPassword.value !== "") {
        loginPage.style.display = "none";
        newsFeedPage.style.display = "block";
    }else {
        // remaining
        loginModel.style.display ="block";
    }
})


// once post button is clicked post model should be trigered

postBtn.addEventListener("click",()=>{
    model.style.display="block";    
    modelWrapper.classList.add("model-wrapper-display");
})

postmodelX.addEventListener("click",()=>{
    model.style.display="none";    
    modelWrapper.classList.remove("model-wrapper-display");

    if (modelInput.value !== "") {
        modelInput.value = "";
        changeOpacity(.5);
    }

})



// changing opacity on the basis of some conditions

const changeOpacity= x => {
    modelPostBtn.style.opacity=x;
    modelFooterPlus.style.opacity=x;
}

modelInput.addEventListener("keypress",(e)=>{
    if (e.target.value !== "") {
        changeOpacity(1);
    }
})
modelInput.addEventListener("blur",(e)=>{
    if (e.target.value === "") {
        changeOpacity(.5);
    }
})

// sidebar
user.addEventListener("click",()=>{
    sidebar.classList.add("sidebar-display");
    sidebarWrapper.classList.add("sidebar-wrapper-display")
})

xBtn.addEventListener("click",()=>{
    sidebar.classList.remove("sidebar-display");
    sidebarWrapper.classList.remove("sidebar-wrapper-display")
})

// dark mode



const darkElements1 = document.querySelectorAll(".dark-mode-1");
const darkElements2 = document.querySelectorAll(".dark-mode-2");
const lightText = document.querySelectorAll(".light-text");
const border = document.querySelectorAll(".border");




toggle.addEventListener("click",()=>{
    circle.classList.toggle('move');
    Array.from(darkElements1).map(darkEl1 => darkEl1.classList.toggle('dark-1'));
    Array.from(darkElements2).map(darkEl2 => darkEl2.classList.toggle('dark-2'));
    Array.from(lightText).map(lightText => lightText.classList.toggle('light'));
    Array.from(border).map(border => border.classList.toggle('border-color'));

});