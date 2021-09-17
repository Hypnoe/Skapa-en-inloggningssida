const session = "username";
 // Försöker att logga in/tries to log in 
function logIn() {

    // Hämtar användarnamn och lösenord /get username and password input objects
    const pass = document.getElementById("lösen"); 
    const name = document.getElementById("namn");

    // sätter värdet ifrån inputs till namn och lösen/set values from inputs to namn and lösen
    const namn = name.value;
    const lösen = pass.value;

    // om rätt "refernser" /if credentials are correct
    if (namn === "test" && lösen === "1234") {
        
        // Sätter 'test' med värdet 'namn' till local storage/set 'test' with value 'namn' to local storage
        localStorage.setItem(session, namn)

        // visa page sidan/display page view
        displayView('pageView')
    } else {

        // annars om fel referenser angivits, visa varnings sidan /otherwise user provided wrong credentials, display varning view
        displayView('varningView') 

    }

};

// tar bort 'test' från locale storage och visa login sidan/removes 'test' from local storage and displays login view
function logOut (){
    localStorage.removeItem(session) 
    displayView('loginView')
};

// visa login sidan eftersom användaren angivit fel referenser/login information/displays login view, because user made mistake with his credentials
function tillbaka (){
    displayView('loginView')
};

// visa specifik sida/shows specified view
function displayView(view) {
    console.log(view);
    // hämta alla sidor/get all views
    const pageView = document.getElementById("page1") 
    const loginView = document.getElementById("logIn") 
    const varningView = document.getElementById("varning") 
     
    
     // dölj alla sidor/hide all views
    pageView.style.display = "none"
    loginView.style.display = "none"
    varningView.style.display = "none" 
     

    // visa den specifika sidan/display specified view
    if (view === 'pageView') {
        pageView.style.display = "block"
    }
    
    if (view === 'loginView') {
        loginView.style.display = "block"
    }

    if (view === 'varningView') {
        varningView.style.display = "block"
    } 
    
}

// IIFEe som bestämmer vilken sida som ska visas/immediately-invoked function expresion which determines which view should be displayed
(function() { 

    // När sidan blir refreshad, dölj alla sidor/when the page is refreshed, hide all views
    displayView('none')

    // hämta 'username' värdet ifrån locale storage/get 'username' value from local storage
    const isValidated = localStorage.getItem(session) 

    // om 'username' värdet finns/if 'username' value exist
    if (isValidated){ 

        // visa page sidan/display page view
        displayView('pageView')
    } else {

        // annars om användaren inte är inloggad visa login sidan/otherwise user is not logged in, so display login view
        displayView('loginView')
    }

})();