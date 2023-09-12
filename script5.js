// Definerer funktionen beregnGennemsnittet()
function beregnGennemsnit() {
    // Definerer konstante variabler og bruger parseInt for at sikre, at værdierne er numeriske.
    // Number () kan også bruges
    const terning1Value = parseInt(document.getElementById('terning1').value);
    const terning2Value = parseInt(document.getElementById('terning2').value);
    const antalForsøg = parseInt(document.getElementById('antalForsøg').value);

    // Opretter en variabel til at holde styr på antal slag.
    let totalSlag = 0;

    // Loop, der gentages de gange 'antalForsøg'.
    for (let i = 0; i < antalForsøg; i++) {
        let slag = 0;

        // While loop, der kører, indtil betingelsen i 'while' er sand (true).
        while (true) {
            slag++;
            // Genererer tilfældige terningslag mellem 1 og 6 for to terninger med ceil for at få hele tal.
            const resultat1 = Math.ceil(Math.random() * 6);
            const resultat2 = Math.ceil(Math.random() * 6);

            // Hvis resultaterne for begge terninger matcher de ønskede værdier, afbrydes while loopet .
            if (resultat1 === terning1Value && resultat2 === terning2Value) {
                break;
            }
        }

        // Lægger det aktuelle antal slag til det samlede antal slag.
        totalSlag += slag;
    }

    // Beregner gennemsnittet ved at dividere det samlede antal slag med antallet af forsøg.
    const gennemsnit = totalSlag / antalForsøg;

    // Opdaterer indholdet af det beregnede gennemsnit, med toFixed for at afrunde til 2 decimaler.
    document.getElementById('result').textContent = gennemsnit.toFixed(2);
}
