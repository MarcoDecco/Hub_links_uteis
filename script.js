function toggleMode () {
  const html = document.documentElement;

  /*
  if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }

  A linha abaixo faz exatamente o que a estrutura condicinal acima faz, porém de forma sucinta
  */
  html.classList.toggle('light');


  /*
  Abaixo, pego a outra imagem para troca-lá entre os modos claro e escuro
  */
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}