function moveToItem(index) {
    document.getElementById('tariffs').scrollIntoView({behavior: 'smooth', block: 'center'});
    chooseItem(index);
}

function chooseItem(index) {
    let item = document.getElementById('tariffs').getElementsByTagName('li')[index];
    fetch('/prices')
        .then(response => response.json())
        .then(prices => {
            const itemList = document.getElementById('tariffs').getElementsByTagName('li');
            for (let i = 0; i < itemList.length; i++) {
                itemList[i].classList.remove('selected-tariff');
            }
            item.classList.add('selected-tariff');

            const total_price = document.getElementById('total_price');
            total_price.textContent = item.childNodes[1].childNodes[1].textContent;

            Cookies.set('plan', prices[index].name, {path: '/reserve'});
        });
}
async function applyPromo() {
    const promo = document.getElementById('promo').value;
    fetch('/promo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({promo: promo}),
    })
        .then(async response => {
            if (response.status !== 200) {
                await notify(await response.text());
                throw new Error();
            }
            return response;
        })
        .then(response => response.json())
        .then(async res => {
            await notify(res.message);
            document.getElementById('plans').innerHTML = res.plansSection;
            document.getElementById('request').innerHTML = res.applicationSection;
        });
}

function submitApplication() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const data = {
        name: name,
        phone: phone,
        email: email
    };
    fetch('/reserve', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
        .then(async response => {
            if (response.status !== 200) {
                await notify(await response.text());
                throw new Error();
            }
            return response;
        })
        .then(response => response.json())
        .then(async res => {
            await notify(res.message);
            document.getElementById('history-table').innerHTML = res.history;
            await updateHistory();
        });
}
function resetPlanCookie() {
    Cookies.remove('plan', {path: '/reserve'});
}
document.addEventListener('DOMContentLoaded', function() {
    resetPlanCookie();
});