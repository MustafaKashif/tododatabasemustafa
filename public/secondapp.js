// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
import {
  getAuth,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

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

var todoinp = document.getElementById('todoInput');
var parent = document.getElementById('parent');

var arr = [];

function renderUL() {
  parent.innerHTML = "";
  for (var i = 0; i < arr.length; i++) {
    parent.innerHTML += `<li>${arr[i].task}</li><br><span id = 'label'>${arr[i].time}</span>`
  }
}

window.addTask = function (e) {
  e.preventDefault();

  var model = {
    task: todoinp.value,
    time: `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()} Time ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
    username: "ABC",
  };
  arr.push(model);
  todoinp.value = " ";
  console.log(arr);
  renderUL();
};

window.logout = function () {
  signOut(auth)
    .then(function () {
      console.log("Log Out Successfully");
      window.location.replace('login.html');

    }).catch(function (error) {
      console.log(error);
    });
  };
  checkAuthentication();

  function checkAuthentication() {
    onAuthStateChanged(auth, function (user) {
      if(user) {
        const uid = user.uid;
        console.log(uid);
        // ...
      } else {
        // User is signed out
        window.location.href = 'login.html';
        // ...
      }
    });
}
