    // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBVWGwFlCnUquC89_CloJwoncnvNZEv97U",
    authDomain: "fbrealtimemustafa.firebaseapp.com",
    projectId: "fbrealtimemustafa",
    storageBucket: "fbrealtimemustafa.appspot.com",
    messagingSenderId: "520720962876",
    appId: "1:520720962876:web:88a30e209fdfb1d3477a39",
    measurementId: "G-1Q8W1L60YX"
  };
  

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app); 
  const auth = getAuth();

var firstName = document.getElementById('fname');
var lastName = document.getElementById('lname');
var email = document.getElementById('email');
var pass = document.getElementById('pass');

window.signup = function(e){
  e.preventDefault();

  var model = {
    firstname : firstName.value,
    lastname : lastName.value,
    email : email.value,
    password : pass.value,
  };

createUserWithEmailAndPassword(auth, model.email, model.password)
  .then(function(success) {
    // Signed in 
    console.log(success.user.uid);
    window.location.href = "login.html";
    // ...
  })
  .catch(function(error) {
console.log(err); 
  });
  console.log(model);
}