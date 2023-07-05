const eventos = [
  {
    "nome" : "bingo",
    "data" : "todos os sabados",
    "horario" : "ah parti das 19:00hs"
  }
]
const main = document.querySelector("main")

eventos.forEach(evento =>{
  const container = document.createElement("div")
  container.className = "container"

  const profile = document.createElement("div")
  profile.className = "profile"

  
  const ul = document.createElement("ul")
  ul.className = "img"

  const li = document.createElement("li")
  const li2 = document.createElement("li")
  const li3 = document.createElement("li")

  li.innerHTML = evento.nome
  li2.innerHTML = evento.data
  li3.innerHTML = evento.horario

  
  ul.append(li)
  
  ul.append(li2)
  
  ul.append(li3)

  profile.append(ul)

  
  container.append(profile)

  main.append(container)
})