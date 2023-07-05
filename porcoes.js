const bebidas = [
  {
    "nome": "Frango a Passarinho",
    "imagem": "https://cooknenjoy.com/wp-content/uploads/2023/01/frango-a-passarinho-1200x901.jpg",
    "descricao": "frango frito a passarinho"
  },
  {
    "nome": "Carne Frita",
    "imagem": "https://espetinhodesucesso.com.br/wp-content/uploads/2022/08/melhor-receita-de-picadinho-de-carne-acebolado.jpg",
    "descricao": "Carne frita acebolada"
  },
  {
    "nome": "Batatinha Frita",
    "imagem": "https://www.sabornamesa.com.br/media/k2/items/cache/377829b055e89e3afb894e7528a10996_XL.jpg",
    "descricao": "batata frita "
  },
  {
    "nome": "Frango com Mandioca",
    "imagem": "https://i.ytimg.com/vi/Tj8M7lehcUo/hqdefault.jpg",
    "descricao": "Frango ao molho com mandioca"
  }
  ,
  {
    "nome": "Costela com Mandioca",
    "imagem": "https://guiadacozinha.com.br/wp-content/uploads/2019/10/costela-assada-mandioca.jpg",
    "descricao": "Costela cozida com mandioca"
  },
  {
    "nome": "Peixe Frito",
    "imagem": "https://assets.delirec.com/images%2FVn5zWzT2NLQOWsdQjJvK6P7rO752%2Frecipe%2Fe64db74b-aed5-441a-9776-c272c2a852d5-Peixe-frito-gallery-0",
    "descricao": "peixe frito empanado"
  },
  {
    "nome": "Calabresa",
    "imagem": "https://www.nutribrasalimentos.com.br/wp-content/uploads/2021/09/Calabresa-Acebolada-destaque.jpg",
    "descricao": "Calabresa acebolada"
  },
  {
    "nome": "Carne com Batata",
    "imagem": "https://as2.ftcdn.net/v2/jpg/04/03/52/95/1000_F_403529544_O3I6AqSTx9eWjhy8THHDMMXTbVyaFjQT.jpg",
    "descricao": "Carne frita com batata"
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
