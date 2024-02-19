const logoutId = 'logout';
const overlayId = 'overlay';
const loginId = 'login';
const historyId = 'history';
const historyTableId = 'history-table';
const promosId = 'promos-toggler';
const promoTableId = 'promos-container';

function toggleLogin() {
    const login = document.getElementById('login-popup');
    login.classList.contains('hidden') ? login.classList.remove('hidden') : login.classList.add('hidden');
    const overlay = document.getElementById(overlayId);
    login.classList.contains('hidden') ? overlay.classList.add('hidden') : overlay.classList.remove('hidden');
}
function toggleHistory() {
    const historyTable = document.getElementById(historyTableId);
    historyTable.classList.contains('hidden') ? historyTable.classList.remove('hidden') : historyTable.classList.add('hidden');
    const overlay = document.getElementById(overlayId);
    historyTable.classList.contains('hidden') ? overlay.classList.add('hidden') : overlay.classList.remove('hidden');
}
function switchLoginContent(contentType) {
    const loginContent = document.getElementById('loginContent');
    const registerContent = document.getElementById('registerContent');

    if (contentType === 'user') {
        loginContent.classList.add('active');
        registerContent.classList.remove('active');
    } else {
        loginContent.classList.remove('active');
        registerContent.classList.add('active');
    }
}

function switchStatus(role) {
    toggleLogin();
    let history = document.getElementById(historyId);
    let historyTable = document.getElementById(historyTableId);
    let logout = document.getElementById(logoutId);
    let login = document.getElementById(loginId);
    let promos = document.getElementById(promosId);
    let promoTable = document.getElementById(promoTableId);
    if (role === 'customer') {
        history.classList.remove('hidden');
        logout.classList.remove('hidden');
        login.classList.add('hidden');
        promos.classList.add('hidden');
        promoTable.classList.add('hidden');
        updateHistory();
    } else if (role === 'admin') {
        history.classList.add('hidden');
        logout.classList.remove('hidden');
        login.classList.add('hidden');
        promos.classList.remove('hidden');
        updatePromos();
    } else {
        history.classList.add('hidden');
        logout.classList.add('hidden');
        login.classList.remove('hidden');
        promos.classList.add('hidden');
        promoTable.classList.add('hidden');
    }
    historyTable.classList.add('hidden');
    updatePlans();
}

async function updateHistory() {
    fetch('/user/purchases')
        .then(async response => {
            if (!response || response.status !== 200) {
                throw await response.text();
            }
            return response;
        })
        .then(response => response.json())
        .then(res => {
            document.getElementById('history-table').innerHTML = res.history;
        })
}

async function logout() {
    fetch('/user/logout')
        .then(async response => {
            if (response.status !== 200) {
                await notify(await response.text());
                throw await response.text();
            }
            return response;
        })
        .then(response => response.json())
        .then(async res => {
            await notify(res.logoutMessage);
            switchStatus(res.role);
        });
}

async function register() {
    let username;
    let password;
    try {
        username = document.getElementById('registerUsername').value;
        password = document.getElementById('registerPassword').value;
    } catch (e) {
        return;
    }

    fetch('/user/register?' + 'username=' + username + '&password=' + password)
        .then(async response => {
            if (response.status !== 200) {
                await notify(await response.text());
                throw await response.text();
            }
            return response;
        })
        .then(response => response.json())
        .then(async res => {
            await notify(res.loginMessage);
            switchStatus(res.user.role);
        });
}

async function login() {
    let username;
    let password;
    try {
        username = document.getElementById('loginUsername').value;
        password = document.getElementById('loginPassword').value;
    } catch (e) {
        return;
    }

    fetch('/user/login?username=' + username + '&password=' + password)
        .then(async response => {
            if (!response || response.status !== 200) {
                await notify(await response.text());
                throw await response.text();
            }
            return response;
        })
        .then(response => response.json())
        .then(async res => {
            switchStatus(res.user.role);
            await notify(res.loginMessage);
        });
}

async function loginOnLoad() {
    fetch('/user')
        .then(async response => {
            if (!response || response.status !== 200) {
                switchStatus('guest')
                throw await response.text();
            }
            return response;
        })
        .then(response => response.json())
        .then(async res => {
            res.user ? switchStatus(res.user.role) : switchStatus('guest');
        })
}
