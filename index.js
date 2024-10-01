const libro = {
    titolo: "Delitto e Castigo",
    autore: "Fëdor Dostoevskij",
    genere: "Romanzo filosofico",
    annoPubblicazione: "1866",

    descrizione: function() {
        return `Titolo: ${this.titolo}, Autore: ${this.autore}, Genere: ${this.genere}, Anno di pubblicazione: ${this.annoPubblicazione}`;
    },

    isClassico: function() {
        const annoCorrente = new Date().getFullYear();
        return (annoCorrente - parseInt(this.annoPubblicazione)) > 50 ? true : false;
    }
};

// Esempi di utilizzo
console.log(libro.descrizione());
console.log(libro.isClassico());
