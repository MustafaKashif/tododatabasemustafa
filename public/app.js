// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getDatabase,remove, update, ref, set, push, onChildAdded } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

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
const database = getDatabase();
var display = document.getElementById('emptyDiv');
var inputData = document.getElementById('task');
window.sendData = function(){
    var objMustafa = {
      Tasks : inputData.value,
      date : JSON.stringify(new Date()),
    };
    const keyMustafa = ref(database, 'Mustafa/');
    objMustafa.id = push(keyMustafa).key;
    console.log(objMustafa.id);

    const referenceMustafa = ref(database,`Mustafa/${objMustafa.id}/`);
    set(referenceMustafa, objMustafa);
    console.log(objMustafa);
}

window.getData = function(){
    list = [];
    const referenceMustafa = ref(database, 'Mustafa');
    onChildAdded(referenceMustafa, function(anonymous){
        list.push(anonymous.val());
        console.log(list);
        runlist();
    })
}

var list = [];
function runlist(){
  display.innerHTML = " ";
  for(var i = 0; i < list.length; i++){
    display.innerHTML += `<li>${list[i].Tasks}
    <br>
    ${list[i].date}
    <button class = "btn btn-outline-danger m-2" onclick = "delTasks('${list[i].id}')">Delete</button>
    <button class = "btn btn-outline-success m-2" onclick = "editTasks('${list[i].id}')">Edit</button>
    </li>`
  }
  window.delTasks = function(deleteValue){
    var referenceMustafa = ref(database, `Mustafa/${deleteValue}/`);
    remove(referenceMustafa);  
    getData();
}

window.removeAll = function(){
  var referenceMustafa = ref(database, `Mustafa/`);
   remove(referenceMustafa);
   list = [];
   getData();
}

window.editTasks = function(editPara){
  var updatedTodo = prompt("Enter a new Todo that you want to update : ");
  var referenceMustafa = (ref(database, `Mustafa/${editPara}`));
  update(referenceMustafa, {Tasks : updatedTodo});
  getData();
}
}

// Database authentication code

