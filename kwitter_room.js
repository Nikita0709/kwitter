// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkSQ4BEJkhkl_PcEokpy-_hfZwfW-9Oqg",
    authDomain: "kwitter-project-3eac0.firebaseapp.com",
    projectId: "kwitter-project-3eac0",
    storageBucket: "kwitter-project-3eac0.appspot.com",
    messagingSenderId: "732940791337",
    appId: "1:732940791337:web:e147bcf12e11e5a5793638"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
