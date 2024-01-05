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
}
async function logout() {
    fetch('/user/logout')
        .then(async response => {
            if (response.status !== 200) throw await response.text();
            return response;
        })
        .then(response => response.json())
        .then(async res => {
            await notify(res.logoutMessage);
            switchStatus(toggleLogin, res.login);
        })
        .catch(errorHtml => {
            notify(errorHtml);
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
            if (response.status !== 200) throw await response.text();
            return response;
        })
        .then(response => response.json())
        .then(async res => {
            await notify(res.loginMessage);
            switchStatus(logout, res.logout);
        })
        .catch(errorHtml => {
            notify(errorHtml);
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
            if (!response || response.status !== 200) throw await response.text();
            return response;
        })
        .then(response => response.json())
        .then(async res => {
            await notify(res.loginMessage);
            switchStatus(logout, res.logout);
        })
        .catch(async errorHtml => {
            await notify(errorHtml);
        });
}

