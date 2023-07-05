const bebidas = [
  {
    "nome": "Sucos",
    "imagem": "./bebidas/sucos.jpg",
    "descricao": "Laranja, Morango, Limão, Maracuja"
  },
  {
    "nome": "Refrigerantes",
    "imagem": "./bebidas/refrigerantes.jpg",
    "descricao": "Cola, Guarana, Laranja, Limão"
  },
  {
    "nome": "Vinhos",
    "imagem": "./bebidas/vinho.jpg",
    "descricao": "Suave, Seco, Tinto, Rose"
  },
  {
    "nome": "Cachaças",
    "imagem": "./bebidas/cachaça.jpg",
    "descricao": "51, Pitu, ypioca, 88, Salinas"
  }
  ,
  {
    "nome": "Cervejas",
    "imagem": "./bebidas/cerveja.jpg",
    "descricao": "Brahma, Skol, Antartica, Heineken, Budweiser"
  },
  {
    "nome": "Whisky",
    "imagem": "./bebidas/whisky.jpg",
    "descricao": "12Anos, 18Anos"
  },
  {
    "nome": "Vodkas",
    "imagem": "./bebidas/vodkas.jpg",
    "descricao": "Smirnoff, Absolut, Ciroc, Orloff"
  },
  {
    "nome": "destiladas",
    "imagem": "./bebidas/destiladas.jpg",
    "descricao": "Martini, Conhaques, Licor, Campari, Gym"
  }
]


const main = document.querySelector("main")

bebidas.forEach(bebida => {

  const container = document.createElement("div")
  container.className = "container"

  const profile = document.createElement("div")
  profile.className = "profile"

  const img = document.createElement("img")
  img.setAttribute("src", bebida.imagem)
  
  const ul = document.createElement("ul")
  ul.className = "img"

  const li = document.createElement("li")
  const li2 = document.createElement("li")

  const p1 = document.createElement("p1")
  p1.innerHTML = bebida.nome

  const p2 = document.createElement("p2")
  p2.innerHTML = bebida.descricao

  li.append(p1)

  li2.append(p2)

  ul.append(li)

  ul.append(li2)

  profile.append(img)

  profile.append(ul)

  
  container.append(profile)

  main.append(container)
})
