const loginRegisterId = 'user-register';
const historyId = 'history';

function toggleLogin() {
    const login = document.getElementById('popup');
    login.classList.contains('active')?login.classList.remove('active'):login.classList.add('active');
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
function switchStatus(func, buttonText) {
    toggleLogin();
    let history = document.getElementById(historyId);
    let loginRegister = document.getElementById(loginRegisterId);
    loginRegister.onclick = func;
    loginRegister.firstChild.textContent = buttonText;
    history.classList.toggle('hidden');
    updateHistory();
}
async function updateHistory(){
    fetch('/user/purchases')
        .then(async response => {
            if (!response || response.status !== 200) {
                await notify(await response.text());
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
            if (response.status !== 200){
                await notify(await response.text());
                throw await response.text();
            }
            return response;
        })
        .then(response => response.json())
        .then(async res => {
            await notify(res.logoutMessage);
            switchStatus(toggleLogin, res.login);
        });
}
async function register() {
    let username;
    let password;
    try {
        username = document.getElementById('registerUsername').value;
        password = document.getElementById('registerPassword').value;
    }
    catch (e) {
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
            switchStatus(logout, res.logout);
        });
}
async function login() {
    let username;
    let password;
    try {
        username = document.getElementById('loginUsername').value;
        password = document.getElementById('loginPassword').value;
    }
    catch (e) {
        return;
    }

    fetch('/user/login?username=' + username + '&password=' + password)
        .then(async response => {
            if (!response || response.status !== 200){
                await notify(await response.text());
                throw await response.text();
            }
            return response;
        })
        .then(response => response.json())
        .then(async res => {
            await notify(res.loginMessage);
            switchStatus(logout, res.logout);
        });
}
async function loginOnLoad(){
    fetch('/user')
        .then(async response => {
            if (!response || response.status !== 200) {
                await notify(await response.text());
                throw await response.text();
            }
            return response;
        })
        .then(response => response.json())
        .then(async res => {
            res.user.username?switchStatus(logout, res.logout):switchStatus(toggleLogin, res.login);
        })
}
document.addEventListener('DOMContentLoaded', function() {
    loginOnLoad().then(() => updateHistory);
});
