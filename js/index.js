const elPokemonslist = document.querySelector(".pakemons-list")



for(let pokemon of pokemons){

    // CREATE ELEMENT
    const pakemonItem = document.createElement("li")
    const pakemonTitleimg = document.createElement("img")
    const pakemonItemDiv = document.createElement("div")
    const pakemonDiv = document.createElement("div")
    const pakemonDivleft = document.createElement("div")
    const pakemonTitle = document.createElement("h5")
    const pakemonText = document.createElement("p")
    const pakemonImg = document.createElement("img")
    const pakemonDivbuttom = document.createElement("div")
    const pakemonWeight = document.createElement("h5")
    const pakemonHeight = document.createElement("h5")

    // SET ATRIBUTE
    pakemonItem.setAttribute("class" , "card mb-3 rounded-4  border-2 border border-dark")
    pakemonItem.style.width ="14rem"
    pakemonTitleimg.classList.add("card-img-top")
    pakemonTitleimg.setAttribute("src", pokemon.img )
    pakemonItemDiv.setAttribute("class" ," p-3 rounded-bottom border-2 border-top border-dark")
    pakemonDiv.setAttribute("class","card-body d-flex justify-content-between p-0")
    pakemonDivleft.classList.add("card-body-left")
    pakemonTitle.classList.add("card-title")
    pakemonText.classList.add("card-text")
    pakemonImg.classList.add("card-body-img")
    pakemonImg.setAttribute("src","./images/heart.png" )
    pakemonImg.style.width = "30px"
    pakemonImg.style.height = "30px"
    pakemonHeight.style.marginLeft = "15px"
    pakemonDivbuttom.setAttribute("class","card-buttom mt-3 d-flex")

    // TEXTCONTENT
    pakemonTitle.textContent = pokemon.name
    pakemonText.textContent = pokemon.type
    pakemonWeight.textContent = pokemon.weight
    pakemonHeight.textContent = pokemon.height

    // APPAND
    elPokemonslist.appendChild(pakemonItem)
    pakemonItem.appendChild(pakemonTitleimg)
    pakemonItem.appendChild(pakemonItemDiv)
    pakemonItemDiv.appendChild(pakemonDiv)
    pakemonDiv.appendChild(pakemonDivleft)
    pakemonDivleft.appendChild(pakemonTitle)
    pakemonDivleft.appendChild(pakemonText)
    pakemonDiv.appendChild(pakemonImg)
    pakemonDivbuttom.appendChild(pakemonWeight)
    pakemonDivbuttom.appendChild(pakemonHeight)
    pakemonItemDiv.appendChild(pakemonDivbuttom)


}