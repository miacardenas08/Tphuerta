import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyDllEU7AG4Alvu8pPADt-TSlFMR5clNBj8",
    authDomain: "proyectogrupohuerta-9e970.firebaseapp.com",
    databaseURL: "https://proyectogrupohuerta-9e970-default-rtdb.firebaseio.com",
    projectId: "proyectogrupohuerta-9e970",
    storageBucket: "proyectogrupohuerta-9e970.firebasestorage.app",
    messagingSenderId: "104414144386",
    appId: "1:104414144386:web:da627197af20c48eb7119b"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let parrafo = document.querySelector("p");

const refDatos = ref(db, "huerta");

onValue(refDatos, (snapshot) => {
    console.log(snapshot.val())
    let huerta = snapshot.val()

     document.getElementById("temp").textContent = `${huerta.tempSuelo}°C`;
    document.getElementById("hum").textContent = `${huerta.humSuelo}%`;
    document.getElementById("luz").textContent = `${huerta.luzSolar} lux`;
    document.getElementById("agua").textContent = `${huerta.nivelAgua} litros`;
   
})
