let promoInput = "promo-name-input";
let page = 1;

function togglePromos() {
    let promoToggler = document.getElementById("promos-container");
    promoToggler.classList.toggle("hidden");
    const overlay = document.getElementById(overlayId);
    promoToggler.classList.contains('hidden') ? overlay.classList.add('hidden') : overlay.classList.remove('hidden');
}

async function deletePromo(id) {
    fetch('promo', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({promoId: id}),
    })
        .then(async response => {
            if (!response.ok) {
                await notify(await response.text());
                throw await response.text();
            }
            return response;
        })
        .then(response => response.json())
        .then(async res => {
            await updatePromos();
            await notify(res.message);
        });
}

async function putPromo() {
    fetch('promo', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            promo: {
                name: document.getElementById(promoInput).value,
                discount: getInputDiscount(),
            }
        }),
    })
        .then(async response => {
            if (!response.ok) {
                await notify(await response.text());
                throw await response.text();
            }
            return response;
        })
        .then(response => response.json())
        .then(async res => {
            await updatePromos();
            await notify(res.message);
        });
}

function getInputDiscount() {
    let discount = document.getElementById("promo-discount").value;
    if (discount > 100) discount = 100;
    if (discount < 0) discount = 0;
    return 1 - discount / 100;
}

async function getPagesCount() {
    return await fetch('/promo/pages-count')
        .then(async response => {
            if (!response || !response.ok) {
                await notify(await response.text());
                throw await response.text();
            }
            return response;
        })
        .then(response => response.json())
        .then(res => res.pagesCount)
}

async function updatePromos() {
    fetch('/promo/page?page=' + page)
        .then(async response => {
            if (!response || !response.ok) {
                throw await response.text();
            }
            return response;
        })
        .then(response => response.json())
        .then(res => {
            document.getElementById('promos-table').innerHTML = res.promos;
        })
}

async function nextPromos() {
    let pagesCount = await getPagesCount();
    page >= pagesCount ? page = pagesCount : page++;
    await updatePromos();
}

function prevPromos() {
    page--;
    if (page < 1) page = 1;
    updatePromos();
}

function homePromos() {
    page = 1;
    updatePromos();
}