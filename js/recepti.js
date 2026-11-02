document.querySelectorAll(".vnos-oseb").forEach(vnos => {
    vnos.addEventListener("input", function() {
        if (vnos.value === "") return

        let novoStOseb = Number(vnos.value)

        if (novoStOseb < 1) novoStOseb = 1
        if (novoStOseb > 12) novoStOseb = 12
        vnos.value = novoStOseb

        const defaultStOseb = Number(vnos.getAttribute("data-defult-oseb"))
        const TimesbyDivideby = novoStOseb / defaultStOseb

        const dataContainer = vnos.closest(".container-top-2")

        dataContainer.querySelectorAll(".sestavina-kolicina").forEach(span => {
            const izhodnaKolicina = Number(span.getAttribute("data-kolicina"))
            const novaKolicina = izhodnaKolicina * TimesbyDivideby
            span.textContent = Math.round(novaKolicina * 10) / 10
        })

    })
})