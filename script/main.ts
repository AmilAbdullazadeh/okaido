const toggle = document.getElementById("toggle");
const refresh = document.getElementById("refresh");
const theme = localStorage.getItem('theme'); // dark, light

if (theme === 'dark') document.body.classList.add('dark')

function handleTheme() {
  document.body.classList.toggle('dark')

  if (theme === 'dark') {
    localStorage.setItem('theme', 'light')
  } else {
    localStorage.setItem('theme', 'dark')
  }
}

toggle?.addEventListener('click', handleTheme)

refresh?.addEventListener('click', function() {
  window.location.reload();
})