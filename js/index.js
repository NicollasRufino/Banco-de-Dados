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
db = firebase.database();

function CreateGraphics(valores) {
    //     db.ref("Pacientes").once("value").then(function(snapshot){
    //     valores = snapshot.val()
    //     console.log(valores);  
    // })
    console.log(valores);
    listaNomes = []
    listaBatimentos = []
    listaOxigenacao = []
    for (i in valores) {
        listaNomes.push(i)
        listaBatimentos.push(valores[i]["batimentos"])
        listaOxigenacao.push(valores[i]["oxigenacao"])
    }
    let ctx = document.getElementById('chart').getContext('2d');
    let chart = new Chart(ctx, {
        type: 'bar',

        data: {
            labels: listaNomes,
            datasets: [
                {
                    label: "Oxigenação",
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: listaOxigenacao,
                },
                {
                    label: "Batimentos Cardíacos",
                    backgroundColor: 'rgb(0, 99, 132)',
                    borderColor: 'rgb(0, 99, 132)',
                    data: listaBatimentos,
                }



            ]
        },

        options: {}
    });
}

function SearchData() {
    db.ref("Pacientes").once("value").then(function (snapshot) {
        valores = snapshot.val()
        CreateGraphics(valores);
        // valores["batimentos"];
        // valores["oxigenacao"];
        // console.log(valores);
        // console.log(valores["batimentos"]);
        // console.log(valores["oxigenacao"]);
        // CreateGraphics(valores["batimentos"], valores["oxigenacao"]);

    })
}

SearchData();