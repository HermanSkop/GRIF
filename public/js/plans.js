function moveToItem(index) {
    document.getElementById('tariffs').scrollIntoView({behavior: 'smooth', block: 'center'});
    chooseItem(index);
}
async function validatePromo(promo) {
    let valid = false;
    fetch('/validate/promo?promo=' + promo)
        .then(async response => {
            if (response.status !== 200) {
                throw await response.text();
            } else valid = true;
        })
        .catch(errorHtml => {
            notify(errorHtml);
        });
    return valid;
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
            document.cookie = 'plan=' + prices[index].plan + '; path=/reserve';
        })
}

function applyPromo() {
    const promo = document.getElementById('promo').value;
    if (validatePromo(promo)) {
        fetch('/promo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({promo: promo}),
        })
            .then(response => response.json())
            .then(data => {
                document.getElementById('plans').innerHTML = data.plansSection;
                document.getElementById('request').innerHTML = data.applicationSection;
            });
    }
}

function submitApplication(){
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
            if (response.status !== 200) await notify(await response.text());
            return response;
        })
        .then(response => response.json())
        .then(async res => {
            await notify(res.message);
            updateHistory();
        })
        .catch(() => {

        });
}
