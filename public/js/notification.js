const notificationTimeout = 4000;

async function notify(htmlError) {
    document.getElementById('notification').classList.add('showError');
    document.getElementById('notification').innerHTML = htmlError;
    setTimeout(function () {document.getElementById('notification').classList.remove('showError');},
        notificationTimeout);
    // TODO timeout visual bug fix
}
