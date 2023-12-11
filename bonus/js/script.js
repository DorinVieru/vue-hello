// DICHIARO VARIABILE DEL METODO createApp
const { createApp } = Vue;

// INIZIALIZZAZIONE createApp E CREAZIONE ISTANZA DELL'APPLICAZIONE VUE
createApp({
    // DEFINISCO IL METODO data () NEL QUALE INSERIRO' UN RETURN
    data(){
        return {
            message: "Buongiorno! E, casomai non ti rivedessi, buon pomeriggio, buonasera e buonanotte!",
            imageName: "the_truman_show.jpg",
        }
    } 
}).mount('#app')