var firebaseConfig = {
      apiKey: "AIzaSyCiJOPrxuY0uLN-veYalx4kCPuyiv6o8Mw",
      authDomain: "plugintwitter-687fe.firebaseapp.com",
      databaseURL: "https://plugintwitter-687fe-default-rtdb.firebaseio.com",
      projectId: "plugintwitter-687fe",
      storageBucket: "plugintwitter-687fe.appspot.com",
      messagingSenderId: "614955712166",
      appId: "1:614955712166:web:bb31218152c90aafc3fe67"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

//     please add username below the code inside the bracket
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome !"+user_name;
    function addRoom(){
          
      //     please use room_name instead of Room_name
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
          
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div>";
      document.getElementById("output").innerHTML+=row;

      });});}
getData();
function logout(){
      localStorage.removeItem("user_name");
      // please write room_name inside the bracket
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
} 