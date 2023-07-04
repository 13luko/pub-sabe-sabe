function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

   // pegar a tag img
  const img = document.querySelector("#profile img")

    //subustituir a imagem
  if (!html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
  img.setAttribute("src", "./assets/pub.jpg")
  } else {
   // set tiver sem light, manter a imagem normal
  img.setAttribute("src", './assets/pub.jpg')
  }
}
