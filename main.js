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
            "Sikerült Csolti Péteres feladatot teljesen megcsinálni! ",    
        "Jó edzés volt a héten!",
        

    ];
    const adat1 ={
        nev: "Benedek",
        mondat: "Kupcsik tanárnő vicces",


    };
    console.log(adat1);

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
function megjelenit2(list, SzuloElem){
    let text = "";
    let tablazat = "<table>";
    for (let index = 0; index < list.length; index++){
        text += "<div>" + "<h3>" + list[index].nev + "</h3>" + "<p>" + list[index];
        tablazat +="<tr>";
        tablazat += "<th>" + list[index].nev + "</th>" + "<td>" + list[index].mondat+"</td>";
        tablazat +="</tr>";
    }
    

tablazat += "</table>"
console.log(tablazat);
SzuloElem[0].innerHTML += text;
tablazatelem.innerHTML += tablazat;

    
 }


