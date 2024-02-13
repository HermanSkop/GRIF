let stripe = Stripe('pk_test_51Oj66fC0thQyOQDadjcQBNcmOFB0T78o1wg1efnFXyMZsZLEHRqLITD8mIFlUuOXJKoSN0U8rjZvUIQxuWc9RQ9r00CuUdSGnl');
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

            Cookies.set('plan', prices[index].name, {path: '/pay/createOrder'});
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
            updatePlans()
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
    fetch('/pay/createOrder', {
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
            stripe.redirectToCheckout({ sessionId: res.id });
        });
}

function updatePlans() {
    fetch('/promo')
        .then(response => response.json())
        .then(res => {
            document.getElementById('plans').innerHTML = res.plansSection;
            document.getElementById('request').innerHTML = res.applicationSection;
        });
}

function resetPlanCookie() {
    Cookies.remove('plan', {path: '/pay/createOrder'});
}
