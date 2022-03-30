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


function addUser() {

    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user-name", user_name);

      window.location = "kwitter_room.html";
}