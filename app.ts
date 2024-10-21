interface IProfessionistaMedia {
    nome: string;
    cognome: string;
    specializzazione: string;
    esperienza: number; // anni di esperienza
    interessi: string[];
    partecipaProgramma(programma: IProgrammaFormazione): void;
}

interface IProgrammaFormazione {
    titolo: string;
    descrizione: string;
    ambitoSpecializzazione: string;
    durata: number; // durata in mesi
    partecipanti: IProfessionistaMedia[];
    aggiungiPartecipante(professionista: IProfessionistaMedia): void;
}

interface IPiattaforma {
    nome: string;
    tipo: string; // stampato, online, audiovisivo
    descrizione: string;
    categorieContenuto: string[];
    pubblicaContenuto(professionista: IProfessionistaMedia, contenuto: string): void;
}

// Implementazione delle classi

class ProfessionistaMedia implements IProfessionistaMedia {
    constructor(
        public nome: string,
        public cognome: string,
        public specializzazione: string,
        public esperienza: number,
        public interessi: string[]
    ) {}

    partecipaProgramma(programma: IProgrammaFormazione): void {
        programma.aggiungiPartecipante(this);
        console.log(`${this.nome} ${this.cognome} si è iscritta al programma: ${programma.titolo}`);
    }
}

class ProgrammaFormazione implements IProgrammaFormazione {
    partecipanti: IProfessionistaMedia[] = [];

    constructor(
        public titolo: string,
        public descrizione: string,
        public ambitoSpecializzazione: string,
        public durata: number
    ) {}

    aggiungiPartecipante(professionista: IProfessionistaMedia): void {
        this.partecipanti.push(professionista);
        console.log(`Aggiunta ${professionista.nome} ${professionista.cognome} al programma ${this.titolo}`);
    }
}

class Piattaforma implements IPiattaforma {
    constructor(
        public nome: string,
        public tipo: string,
        public descrizione: string,
        public categorieContenuto: string[]
    ) {}

    pubblicaContenuto(professionista: IProfessionistaMedia, contenuto: string): void {
        console.log(`${professionista.nome} ${professionista.cognome} ha pubblicato: "${contenuto}" su ${this.nome}`);
    }
}

// Creazione degli oggetti ProfessionistaMedia

const professionista1 = new ProfessionistaMedia("Anna", "Rossi", "Giornalismo", 5, ["Politica", "Cultura"]);
const professionista2 = new ProfessionistaMedia("Maria", "Bianchi", "Regia", 3, ["Cinema", "Documentari"]);
const professionista3 = new ProfessionistaMedia("Lara", "Verdi", "Produzione", 7, ["TV", "Produzione esecutiva"]);

// Creazione degli oggetti ProgrammaFormazione

const programma1 = new ProgrammaFormazione(
    "Mentorship Giornalistica",
    "Programma di mentorship per giornaliste emergenti",
    "Giornalismo",
    6
);

const programma2 = new ProgrammaFormazione(
    "Regia Creativa",
    "Sviluppo di competenze avanzate nella regia di documentari",
    "Regia",
    4
);

// Le professioniste partecipano ai programmi

professionista1.partecipaProgramma(programma1);
professionista2.partecipaProgramma(programma2);

// Creazione degli oggetti Piattaforma

const piattaforma1 = new Piattaforma(
    "Voci Blog",
    "online",
    "Piattaforma online per articoli e interviste",
    ["Giornalismo", "Cultura"]
);

const piattaforma2 = new Piattaforma(
    "Voci TV",
    "audiovisivo",
    "Piattaforma video per contenuti multimediali",
    ["Regia", "Documentari", "Interviste"]
);

// Pubblicazione di contenuti

piattaforma1.pubblicaContenuto(professionista1, "Articolo su parità di genere nella politica");
piattaforma2.pubblicaContenuto(professionista2, "Documentario sui cambiamenti climatici");

// Output nella pagina HTML

const outputDiv = document.getElementById("output");

if (outputDiv) {
    outputDiv.innerHTML = `
        <p>${professionista1.nome} ${professionista1.cognome} si è iscritta al programma "${programma1.titolo}".</p>
        <p>${professionista2.nome} ${professionista2.cognome} si è iscritta al programma "${programma2.titolo}".</p>
        <p>${professionista1.nome} ha pubblicato un articolo su "${piattaforma1.nome}".</p>
        <p>${professionista2.nome} ha pubblicato un documentario su "${piattaforma2.nome}".</p>
    `;
}
