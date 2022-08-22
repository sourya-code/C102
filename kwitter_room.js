//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyC6krga9XIBk_bjJI1gTO-vSPBTsOvQq60",
      authDomain: "kwitter-7391c.firebaseapp.com",
      databaseURL: "https://kwitter-7391c-default-rtdb.firebaseio.com",
      projectId: "kwitter-7391c",
      storageBucket: "kwitter-7391c.appspot.com",
      messagingSenderId: "796007544002",
      appId: "1:796007544002:web:59c021b4ee757ef570775b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

            localStorage.setItem("room_name", room_name);

            window.location = "kwiiter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName (name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
