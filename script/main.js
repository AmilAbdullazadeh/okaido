var toggle = document.getElementById("toggle");
var refresh = document.getElementById("refresh");
var theme = localStorage.getItem('theme'); // dark, light
if (theme === 'dark')
    document.body.classList.add('dark');
function handleTheme() {
    document.body.classList.toggle('dark');
    if (theme === 'dark') {
        localStorage.setItem('theme', 'light');
    }
    else {
        localStorage.setItem('theme', 'dark');
    }
}
toggle === null || toggle === void 0 ? void 0 : toggle.addEventListener('click', handleTheme);
refresh === null || refresh === void 0 ? void 0 : refresh.addEventListener('click', function () {
    window.location.reload();
});
