var pocet = 0;

function tBarAlert() {
    if (pocet == 0) {
        alert("To nedělej...");
        pocet++;
    }
    else if (pocet == 1) {
        alert("Já tě varoval.");
        pocet++;
    }
    else {
        alert("...");
        pocet++;
    }
}