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


const infoHuerta = document.getElementById("infoHuerta");
const temp = document.getElementById("temp");
const hum = document.getElementById("hum");
const luz = document.getElementById("luz");

// Referencia de datos en Firebase
const refDatos = ref(db, "huerta");

// Escuchar datos en tiempo real
onValue(refDatos, (snapshot) => {
    const huerta = snapshot.val();
    console.log("Datos recibidos:", huerta);

    if (!huerta) {
        infoHuerta.textContent = "No hay datos disponibles.";
        return;
    }

    infoHuerta.textContent = ""; // borrar mensaje

    temp.textContent = huerta.temp + "°C";
    hum.textContent = huerta.humSuelo + "%";
    luz.textContent = huerta.humAire + "%";
});

