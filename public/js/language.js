function changeLanguage(lang) {
    Cookies.set('lang', lang);
    window.location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
    let lang = Cookies.get('lang');
    if (lang === 'en') {
        document.getElementById('en-language').classList.add('language-active');
        document.getElementById('ru-language').classList.remove('language-active');
    } else {
        document.getElementById('en-language').classList.remove('language-active');
        document.getElementById('ru-language').classList.add('language-active');
    }
});