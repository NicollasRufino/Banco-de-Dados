
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
monitor_speed = 115200;
    
firebase.initializeApp(firebaseConfig);

db = firebase.database()

function BuscarDados(){
  try{
    db
      .ref('test')
      .once('value')
      .then(function(snapshot){
        resposta = snapshot.val()
        resposta = JSON.stringify(resposta)
        console.log(resposta)
      
      

      })
  }
  catch(error){
    alert('Problema')
  }
  var var_lista = document.getElementById("lista");
  var saida = ""
  
  saida = "<table>" +"<tr><td>" +resposta+"</td></tr>" +saida;
  var_lista.innerHTML = saida;
}
    
