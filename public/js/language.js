function changeLanguage(lang) {
    document.cookie = 'lang=' + lang+';';
    window.location.reload();
}
document.addEventListener('DOMContentLoaded', ()=>{
    let lang = document.cookie.split('; ').find(row => row.startsWith('lang')).split('=')[1];
    if(lang === 'en') {
        document.getElementById('en-language').classList.add('language-active');
        document.getElementById('ru-language').classList.remove('language-active');
    } else {
        document.getElementById('en-language').classList.remove('language-active');
        document.getElementById('ru-language').classList.add('language-active');
    }
});