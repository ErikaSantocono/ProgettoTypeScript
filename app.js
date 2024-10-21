"use strict";
class ProfessionistaMedia {
    constructor(nome, cognome, specializzazione, esperienza, interessi) {
        this.nome = nome;
        this.cognome = cognome;
        this.specializzazione = specializzazione;
        this.esperienza = esperienza;
        this.interessi = interessi;
    }
    partecipaProgramma(programma) {
        programma.aggiungiPartecipante(this);
        console.log(`${this.nome} ${this.cognome} si è iscritta al programma: ${programma.titolo}`);
    }
}
class ProgrammaFormazione {
    constructor(titolo, descrizione, ambitoSpecializzazione, durata) {
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.ambitoSpecializzazione = ambitoSpecializzazione;
        this.durata = durata;
        this.partecipanti = [];
    }
    aggiungiPartecipante(professionista) {
        this.partecipanti.push(professionista);
        console.log(`Aggiunta ${professionista.nome} ${professionista.cognome} al programma ${this.titolo}`);
    }
}
class Piattaforma {
    constructor(nome, tipo, descrizione, categorieContenuto) {
        this.nome = nome;
        this.tipo = tipo;
        this.descrizione = descrizione;
        this.categorieContenuto = categorieContenuto;
    }
    pubblicaContenuto(professionista, contenuto) {
        console.log(`${professionista.nome} ${professionista.cognome} ha pubblicato: "${contenuto}" su ${this.nome}`);
    }
}
const professionista1 = new ProfessionistaMedia("Anna", "Rossi", "Giornalismo", 5, ["Politica", "Cultura"]);
const professionista2 = new ProfessionistaMedia("Maria", "Bianchi", "Regia", 3, ["Cinema", "Documentari"]);
const professionista3 = new ProfessionistaMedia("Lara", "Verdi", "Produzione", 7, ["TV", "Produzione esecutiva"]);
const programma1 = new ProgrammaFormazione("Mentorship Giornalistica", "Programma di mentorship per giornaliste emergenti", "Giornalismo", 6);
const programma2 = new ProgrammaFormazione("Regia Creativa", "Sviluppo di competenze avanzate nella regia di documentari", "Regia", 4);
professionista1.partecipaProgramma(programma1);
professionista2.partecipaProgramma(programma2);
const piattaforma1 = new Piattaforma("Voci Blog", "online", "Piattaforma online per articoli e interviste", ["Giornalismo", "Cultura"]);
const piattaforma2 = new Piattaforma("Voci TV", "audiovisivo", "Piattaforma video per contenuti multimediali", ["Regia", "Documentari", "Interviste"]);
piattaforma1.pubblicaContenuto(professionista1, "Articolo su parità di genere nella politica");
piattaforma2.pubblicaContenuto(professionista2, "Documentario sui cambiamenti climatici");
const outputDiv = document.getElementById("output");
if (outputDiv) {
    outputDiv.innerHTML = `
        <p>${professionista1.nome} ${professionista1.cognome} si è iscritta al programma "${programma1.titolo}".</p>
        <p>${professionista2.nome} ${professionista2.cognome} si è iscritta al programma "${programma2.titolo}".</p>
        <p>${professionista1.nome} ha pubblicato un articolo su "${piattaforma1.nome}".</p>
        <p>${professionista2.nome} ha pubblicato un documentario su "${piattaforma2.nome}".</p>
    `;
}
