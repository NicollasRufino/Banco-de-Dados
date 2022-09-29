const firebaseConfig = {
    apiKey: "AIzaSyD8N-mQsRzq0p-U7PyKDS-YeK673kLwhXU",
    authDomain: "wall-e-457e1.firebaseapp.com",
    databaseURL: "https://wall-e-457e1-default-rtdb.firebaseio.com",
    projectId: "wall-e-457e1",
    storageBucket: "wall-e-457e1.appspot.com",
    messagingSenderId: "801182372746",
    appId: "1:801182372746:web:3c99d511b379d9ec60ae73",
    measurementId: "G-KC175GPV3T"
  }; 
  firebase.initializeApp(firebaseConfig);

  var var_lista = document.getElementById("lista");
  var dados = ""

  var db = firebaseRef = firebase.database().ref().child("test");
  db.on('child_added',function(snapshot){
    var adicionado = snapshot.val();

    dados = "<table>" +"<tr><td>"+adicionado+"</td></tr>" + dados;

    var_lista.innerHTML = dados;
  })