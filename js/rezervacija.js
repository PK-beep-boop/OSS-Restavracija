const imeInput = document.getElementById("ime")
const imeError = document.getElementById("ime-error")

const priimekInput = document.getElementById("priimek")
const priimekError = document.getElementById("priimek-error")

const emailInput = document.getElementById("email")
const emailError = document.getElementById("email-error")

const telInput = document.getElementById("telefon")
const telError = document.getElementById("telefon-error")

const datumInput = document.getElementById("datum")
const datumError = document.getElementById("datum-error")

const casInput = document.getElementById("cas")
const casError = document.getElementById("cas-error")

const st_gostovInput = document.getElementById("st_gostov")
const st_gostovError = document.getElementById("st_gostov-error")


const soglasjeInput = document.getElementById("soglasje")
const soglasjeError = document.getElementById("soglasje-error")

imeInput.addEventListener("input", function() {
    const value = imeInput.value.trim()
    if (value === "") {
        imeError.textContent = "Ime je obvezen podatek"
        imeInput.classList.add("invalid")
    }
    else if (value.length < 2) {
        imeError.textContent = "Ime mora vsebovati vsaj dve črki"
        imeInput.classList.add("invalid")
    }
    else {
        imeError.textContent = ""
        imeInput.classList.remove("invalid")
        imeInput.classList.add("valid")
    }
})

priimekInput.addEventListener("input", function() {
    const value = priimekInput.value.trim()
    if (value === "") {
        priimekError.textContent = "Priimek je obvezen podatek"
        priimekInput.classList.add("invalid")
    }
    else if (value.length < 2) {
        priimekError.textContent = "Priimek mora vsebovati vsaj dve črki"
        priimekInput.classList.add("invalid")
    }
    else {
        priimekError.textContent = ""
        priimekInput.classList.remove("invalid")
        priimekInput.classList.add("valid")
    }
})

emailInput.addEventListener("input", function() {
    const value = emailInput.value.trim()
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (value === "") {
        emailError.textContent = "E-mail je obvezen podatek"
        emailInput.classList.add("invalid")
    }
    else if (!emailRegex.test(value)) {
        emailError.textContent = "Neveljaven format E-maila"
        emailInput.classList.add("invalid")
    }
    else {
        emailError.textContent = ""
        emailInput.classList.remove("invalid")
        emailInput.classList.add("valid")
    }
})

telInput.addEventListener("input", function() {
    const value = telInput.value.trim()
    const telRegex = /^[0-9]{9}|[0-9]{3}[ ][0-9]{3}[ ][0-9]{3}$/

    if (value === "") {
        telError.textContent = "Tel. št. je obvezen podatek"
        telInput.classList.add("invalid")
    }
    else if (!telRegex.test(value)) {
        telError.textContent = "Neveljaven format tel. št."
        telInput.classList.add("invalid")
    }
    else {
        telError.textContent = ""
        telInput.classList.remove("invalid")
        telInput.classList.add("valid")
    }
})

datumInput.addEventListener("input", function() {
    const value = datumInput.value

    if (!value) {
        datumError.textContent = "Celoten datum je obvezen"
        datumInput.classList.add("invalid")
        return
    }

    const chosenDate = new Date(value)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (chosenDate < today) {
        datumError.textContent = "Datum ne sme biti v preteklosti"
        datumInput.classList.add("invalid")
    }
    else if (chosenDate.getDay() === 1) {
        datumError.textContent = "V ponedeljek ne obratujemo"
        datumInput.classList.add("invalid")
    }
    else {
        datumError.textContent = ""
        datumInput.classList.remove("invalid")
        datumInput.classList.add("valid")
    }
})

casInput.addEventListener("input", function() {
    const value = casInput.value
    if (!value) {
        casError.textContent = "Čas je obvezen"
        casInput.classList.add("invalid")
        return
    }
    const [hours, minutes] = value.split(":").map(Number) // Najprej .split splita string pri dvopičju in nove (2) stringe da v array. Potem .map da vsako (2) število v Number function, ki pretvori string v dobesedno število
    if (hours < 12 || hours > 22 || (hours === 22 && minutes > 0)) {
        casError.textContent = "Rezervacija je možna le med 12:00 in 22:00"
        casInput.classList.add("invalid")
    }
    else {
        casError.textContent = ""
        casInput.classList.remove("invalid")
        casInput.classList.add("valid")
    }
})

st_gostovInput.addEventListener("input", function() {
    const value = st_gostovInput.value

    if (!value) {
        st_gostovError.textContent = "Št. gostov je obvezen podatek"
        st_gostovInput.classList.add("invalid")
        return
    }

    if (value < 1 || value > 12) {
        st_gostovError.textContent = "Št. gostov mora biti med 1 in 12"
        st_gostovInput.classList.add("invalid")
    }
    else {
        st_gostovError.textContent = ""
        st_gostovInput.classList.remove("invalid")
        st_gostovInput.classList.add("valid")
    }
})

soglasjeInput.addEventListener("input", function() {
    const value = soglasjeInput.checked
    if (!value) {
        soglasjeError.textContent = "Soglasje je obvezno"
        soglasjeInput.classList.add("invalid")
    }
    else {
        soglasjeError.textContent = ""
        soglasjeInput.classList.remove("invalid")
        soglasjeInput.classList.add("valid")
    }
})

const obrazec = document.getElementById("obrazec-rezervacija")
const povzetek = document.getElementById("povzetek")

obrazec.addEventListener("submit", function(event) {
    event.preventDefault();

    const vsaPolja = [imeInput, priimekInput, emailInput, telInput, datumInput, casInput, st_gostovInput, soglasjeInput]
    vsaPolja.forEach(input => {
        input.dispatchEvent(new Event("input")) // Sproži input event na vseh poljih (tudi tistih katerih uporabnik ni dotaknil)
    })

    const obstajaNapaka = document.querySelector(".invalid") // Potrebujemo je en napačen vnos

    if (obstajaNapaka) {
        return
    }
    else {
        const slovenskiDatum = new Date(datumInput.value)
        povzetek.innerHTML = `
        <h3>Povzetek rezervacije</h3>
        <p>Ime in priimek: ${imeInput.value.trim()} ${priimekInput.value.trim()}</p>
        <p>Datum in čas: ${slovenskiDatum.toLocaleDateString("sl-SI")} ob ${casInput.value}</p>
        <p>Št. oseb: ${st_gostovInput.value}</p>
        `
    }

    obrazec.reset()

    vsaPolja.forEach(input => input.classList.remove("valid"))
    
})