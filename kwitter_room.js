const firebaseConfig = {
  apiKey: "AIzaSyDvjNtJgyEI4FOWIKJEY1Ifnd4wHQcHC4s",
  authDomain: "kwitter-758aa.firebaseapp.com",
  databaseURL: "https://kwitter-758aa-default-rtdb.firebaseio.com",
  projectId: "kwitter-758aa",
  storageBucket: "kwitter-758aa.appspot.com",
  messagingSenderId: "679733313923",
  appId: "1:679733313923:web:8544d2d817bd6b418bb6b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_room.html";
}
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
   });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_room.html";
}