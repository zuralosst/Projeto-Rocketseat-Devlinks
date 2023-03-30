function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // se tiver light mode, adicionar a imagem light
  // se tiver sem light mode, manter a imagem normal
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Cabeça de um alien cinza com detalhes verdes neon")
  } else {
    img.setAttribute(
      "alt",
      "Foto do olho de Zuralosst de cor verde e pupila de gato"
    )
  }
}
