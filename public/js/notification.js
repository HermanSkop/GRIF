const notificationTimeout = 4000;
let timeout;

async function notify(htmlError) {
    let notification = document.getElementById('notification');
    notification.classList.add('showError');
    notification.innerHTML = htmlError;
    timeout ? clearTimeout(timeout) : null;
    timeout = setTimeout(
        () => document.getElementById('notification').classList.remove('showError'),
        notificationTimeout);
}
