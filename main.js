addEventListener("load", init);
function init() {
    console.log("Helló!");

    const articleElem = document.getElementById("tarolo");

    console.log(articleElem)
    articleElem.innerHTML = "<h1>Legjobb dolgok</h1>";
    const list = [
        "Végre meg tudtam akadályozni, hogy a kutya hátraszökjön a kertbe",    
        "Tudtam ültetni és van két virágom",
            "Lebetegedtem",
            "Tegnapi adatbázis-kezelés",
            "Kupcsik tanárnő vicces",
            "Tegnap kialaudtam magam",
            "Sikerült Csolti Péteres feladatot teljesen megcsinálni! ",    "Jó edzés volt a héten!",
        

    ];
    megjelenit(list, articleElem);




}

function megjelenit(list, articleElem){
    let txt = "<ul>";
    for (i=0; i<list.length; i++) {
        txt += "<li>" + list[i] + "</li>"
     

    }
    txt+= "</ul>";
    articleElem.innerHTML = txt;
    
}
