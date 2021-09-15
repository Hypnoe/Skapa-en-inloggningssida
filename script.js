const namn= document.getElementById("namn");  
const lösen= document.getElementById("lösen"); 
const loginButton = document.getElementById("login-form-submit"); 

 
 
loginButton.addEventListener("click", function() {  
    const name= document.getElementById("namn");  
const pass= document.getElementById("lösen"); 

    
    
    const namn = name.value;
    const lösen = pass.value;
    if (namn === "test" && lösen === "1234") {  
        
        const varning = document.getElementById("varning") 
        varning.innerHTML = ""    
        
        localStorage.setItem("loginForm", true); 
        const loginView = document.getElementById("logIn") 
        const pageView = document.getElementById("page1") 
        loginView.style.display = "none"
        pageView.style.display = "block"
          
    
        
    }
     else {
     const varning = document.getElementById("varning") 
     varning.innerHTML = "Fel anvädnarnamn eller lösenord" 
     varning.style.color = "red"
     }

});

(function() { 


    const loginView = document.getElementById("logIn") 
    const pageView = document.getElementById("page1") 
   
    const isValidated = localStorage.getItem("loginForm") 
    console.log(isValidated)
    if (isValidated){ 
           
        loginView.style.display = "none"
        pageView.style.display = "block"  
        console.log(true) 
    }
   else { 
     
    loginView.style.display = "block"
    pageView.style.display = "none"  
    console.log(false) 
   }
   
})(); 
function logOut (){  
    const loginView = document.getElementById("logIn") 
    const pageView = document.getElementById("page1") 
    localStorage.removeItem("loginForm") 
    loginView.style.display = "block"
    pageView.style.display = "none"  
    console.log("logOut") 
}

