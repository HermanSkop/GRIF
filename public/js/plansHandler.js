function moveToItem(index) {
    document.getElementById('tariffs').scrollIntoView({ behavior: 'smooth', block: 'center' });
    chooseItem(index);
}
function chooseItem(index) {
    let item = document.getElementById('tariffs').getElementsByTagName('li')[index];
    fetch('/prices')
        .then(response => response.json())
        .then(prices=>{
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