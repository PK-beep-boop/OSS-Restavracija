const jedilnik = [
    {
        naziv: "L'Antica Pirano",
        opis: "Neapolitanska klasika z gamberi, češnjevci, česnom in limoninim oljem, potresena z grobo piransko soljo. Okus pravega morja.",
        kategorija: "Le Specialità della Casa (Hišne specialitete)",
        alergeni: "gluten, mleko/laktoza, raki",
        cena: 14.90
    },
    {
        naziv: "Tartinijeva rapsodija",
        opis: "Prefinjena harmonija bivolje mocarele, istrskega pršuta, sveže rukole, parmezana in bogate kreme iz črnih istrskih tartufov.",
        kategorija: "Le Specialità della Casa (Hišne specialitete)",
        alergeni: "gluten, mleko/laktoza",
        cena: 15.80
    },
    {
        naziv: "Forno d'Oro (Zlata peč)",
        opis: "Divji okus krušne peči s pikantno 'Ndujo, salamo, črnimi olivami, kaprami in domačim pekočim čilijevim oljem. ",
        kategorija: "Le Specialità della Casa (Hišne specialitete)",
        alergeni: "gluten, mleko/laktoza",
        cena: 13.90
    },
    {
        naziv: "Maestral",
        opis: "Lahkotna bela pica z domačim pestom bazilike in pinjol, sušenimi paradižniki ter svežo, kremno burrato po peki.",
        kategorija: "Le Specialità della Casa (Hišne specialitete)",
        alergeni: "gluten, mleko/laktoza, oreščki",
        cena: 14.20
    },
    {
        naziv: "Margherita",
        opis: "Brezčasna klasika s paradižnikovo omako San Marzano, vrhunsko bivoljo mocarelo, svežo baziliko in kapljico oljčnega olja.",
        kategorija: "Le Classiche Rosse (Rdeče klasike)",
        alergeni: "gluten, mleko/laktoza",
        cena: 9.80
    },
    {
        naziv: "Capricciosa",
        opis: "Tradicionalni okusi paradižnikove omake, mocarele, kuhanega pršuta, pečenih gobe, artičok in nepogrešljivih črnih oliv.",
        kategorija: "Le Classiche Rosse (Rdeče klasike)",
        alergeni: "gluten, mleko/laktoza",
        cena: 11.50
    },
    {
        naziv: "Marinara",
        opis: "Preprosta, a bogata pica brez sira. Paradižnikova omaka, tanek nasekljan česen, istrski origano in ekstra deviško oljčno olje.",
        kategorija: "Le Classiche Rosse (Rdeče klasike)",
        alergeni: "gluten",
        cena: 8.20
    },
    {
        naziv: "Vesuvio",
        opis: "Okusna kombinacija za ljubitelje klasike s paradižnikovo omako, fino mocarelo in izbrano domačo italijansko šunko.",
        kategorija: "Le Classiche Rosse (Rdeče klasike)",
        alergeni: "gluten, mleko/laktoza",
        cena: 10.20
    },
    {
        naziv: "Ortolana",
        opis: "Paradižnikova omaka, mocarela in bogata obloga iz pečene mediteranske zelenjave (bučke, jajčevci, paprika) s svežo peteršiljevo omako.",
        kategorija: "Orto e Natura (Zeleni vrt | Vegetarijanske in veganske)",
        alergeni: "gluten, mleko/laktoza",
        cena: 11.80
    },
    {
        naziv: "Zeleni val",
        opis: "Bela pica z mocarelo, mlado špinačo, češnjevci, domačo skuto z zelišči in hrustljavimi praženimi pinjolami.",
        kategorija: "Orto e Natura (Zeleni vrt | Vegetarijanske in veganske)",
        alergeni: "gluten, mleko/laktoza, oreščki",
        cena: 12.50
    },
    {
        naziv: "Vegana Istriana",
        opis: "Paradižnikova omaka, veganski sir, na soncu sušeni paradižniki, kapre, črne olive, sveža rukola in ekstra deviško oljčno olje.",
        kategorija: "Orto e Natura (Zeleni vrt | Vegetarijanske in veganske)",
        alergeni: "gluten",
        cena: 12.90
    },
    {
        naziv: "Zeleni dragulj",
        opis: "Lahkotna pica s paradižnikovo omako, vegansko mocarelo, artičokami, svežo baziliko in sezonskimi divjimi šparglji z obale.",
        kategorija: "Orto e Natura (Zeleni vrt | Vegetarijanske in veganske)",
        alergeni: "gluten",
        cena: 13.20
    },
];

function izrisiJedilnik() {
    const vsebnik = document.getElementById("jedilnik");

    const kategorije = [
        "Le Specialità della Casa (Hišne specialitete)",
        "Le Classiche Rosse (Rdeče klasike)",
        "Orto e Natura (Zeleni vrt | Vegetarijanske in veganske)"
    ];

    kategorije.forEach((kat) => { // isto kot py: for kat in kategorije
        const jediVKategoriji = jedilnik.filter(jed => jed.kategorija === kat); // isto kot py: jedi_v_kategoriji = [jed for jed in jedilnik if jed['kategorija'] == kat]

        const divOdzivna = document.createElement("div");
        divOdzivna.className = "tabela-odzivna";
        vsebnik.appendChild(divOdzivna)

        const tabela = document.createElement("table");
        tabela.className = "jedilnik-table";
        divOdzivna.appendChild(tabela)


        const caption = document.createElement("caption");
        const h2 = document.createElement("h2");

        h2.textContent = kat;
        caption.appendChild(h2);
        tabela.appendChild(caption);

        const thead = document.createElement("thead");
        const trGlava = document.createElement("tr");
        const stolpci = ["Pizza", "Opis", "Alergeni", "Cena"];

        stolpci.forEach(imeStolpca => {
            const th = document.createElement("th");
            th.textContent = imeStolpca;
            trGlava.appendChild(th);
        });
        thead.appendChild(trGlava)
        tabela.appendChild(thead)

        const tbody = document.createElement("tbody")
        tabela.appendChild(tbody)

        jediVKategoriji.forEach((jed) => {
            const trPodatki = document.createElement("tr")

            const tdNaziv = document.createElement("td")
            tdNaziv.textContent = jed.naziv
            trPodatki.appendChild(tdNaziv)

            const tdOpis = document.createElement("td")
            tdOpis.textContent = jed.opis
            trPodatki.appendChild(tdOpis)

            const tdAlergeni = document.createElement("td")
            tdAlergeni.textContent = jed.alergeni
            trPodatki.appendChild(tdAlergeni)

            const tdCena = document.createElement("td")
            tdCena.textContent = jed.cena.toFixed(2).replace(".", ",") + "\u00A0€"
            trPodatki.appendChild(tdCena)

            tbody.appendChild(trPodatki)
        })
    })
}

document.addEventListener("DOMContentLoaded", izrisiJedilnik);
// Event listener listens for an event to happen. In this case "DOMContentLoaded" (for the page to load). After the listener "hears" that the page has loaded it runs the function listed.