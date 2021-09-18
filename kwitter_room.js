// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBp_T8pwFn4H0InxYz5PsO2CdB3_pXjLg8",
    authDomain: "kwitter-project-3333b.firebaseapp.com",
    projectId: "kwitter-project-3333b",
    storageBucket: "kwitter-project-3333b.appspot.com",
    messagingSenderId: "896719526358",
    appId: "1:896719526358:web:59f52513b133a8236aac77",
    measurementId: "G-XZFWZCPQ0Y"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";
function addRoom() {
      room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room_name"
});
}