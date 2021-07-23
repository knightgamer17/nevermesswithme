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
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send(){
      msg=document.getElementById("msg.value");
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,like:0
      });
      document.getElementById("msg").value="";

  }
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
    
  }