window.onload = function() {
  getThemeFromLocalStorage()
}

const rootElement = document.documentElement
const inputContainer = document.querySelector('.theme-on-off')

const lightTheme = {
  '--background-color': '#F5F5F5',
  '--text-color': '#000',
  '--line-color': '#000',
}

const darkTheme = {
  '--background-color': '#10181E',
  '--text-color': '#F1F1F1',
  '--line-color': '#f1f1f1',
}

inputContainer.addEventListener('change', function() {
  const isChecked = inputContainer.checked
  if (isChecked) {
      changeTheme(darkTheme)
  } else {
      changeTheme(lightTheme)
  }
})

function changeTheme(theme) {
  for (let prop in theme) {
      changeProperty(prop, theme[prop])
  }
  saveThemeToLocalStorage(theme)
}

function changeProperty(property, value) {
  rootElement.style.setProperty(property, value)
}

function saveThemeToLocalStorage(theme) {
  localStorage.setItem('theme', JSON.stringify(theme))
}

function getThemeFromLocalStorage() {
  const theme = JSON.parse(localStorage.getItem('theme'))
  changeTheme(theme)
  if (isThemeEqual(theme, darkTheme)) inputContainer.checked = true
}

function isThemeEqual(firstTheme, secondTheme) {
  for (let prop in firstTheme) {
      if (firstTheme[prop] !== secondTheme[prop]) return false
  }
  return true
}