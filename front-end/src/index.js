LOGGED_IN_USER_ID = 3
ASSET_ROOT = "http://localhost:3000"
MAINTAG = document.querySelector("main")
IMAGE_PATH = "./src/img"

//IDEA: CHARACTER ONLY MOVES WHEN HOVERING OVER It
        //menue items only show up when in the homepage
        //mouse becomes special image
        //special image gets different color when moving over building


        //make index.js the login file???????????
            //now file structure makes no sence

document.addEventListener("DOMContentLoaded", () => {
    loginForm(MAINTAG)
    CONTAINER = document.getElementById("container")
})

function loadMain(){
    MESSAGES = document.getElementById("messages")

    document.body.style.background=  "#2b0200 url(./src/img/backgrounds/forest4.png) no-repeat center top"
    document.body.style.backgroundSize= "auto 750px"

    createPrependElement("div", "", MAINTAG, {id: "messages"})
    createPrependElement("img", "", MAINTAG, {id: "character-building", src: "./src/img/buildings/character_building.png", onclick: "characterMenue()", width: "281px", height: "255px"})
    createPrependElement("img", "", MAINTAG, {id: "shop-sign", src: "./src/img/buildings/shop_sign.png", width: "104px", height: "126px"})
    createPrependElement("img", "", MAINTAG, {id: "shop-building", src: "./src/img/buildings/shop_building.png", onclick: "showShopMenue()", width:"281px", height: "255px"})

    getCharactersByUserId(LOGGED_IN_USER_ID).then((characterList) => {
        if (MESSAGES) MESSAGES.innerHTML = ""
        console.log(characterList)
        if(characterList.length >= 1){
            CONTAINER.innerHTML = ""
        }else{
            createAlert("#messages", "Please chose your character!", "success", "prepend")
            addCharacter()
        }
    })
    showMoney(LOGGED_IN_USER_ID)
}



