function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  const buttonImg = document.querySelector("#switch img")

  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./Assets/avatar.png") // Imagem para light mode
    buttonImg.setAttribute("src", "./Assets/sun.svg") // Ícone para light mode
  } else {
    img.setAttribute("src", "./Assets/Avatar Diogo.png") // Imagem para dark mode
    buttonImg.setAttribute("src", "./Assets/moon-stars.svg") // Ícone para dark mode
  }
}
