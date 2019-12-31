LOGGED_IN_USER_ID = 39
ASSET_ROOT = "http://localhost:3000"
CONTAINER = document.getElementById("container")
MAINTAG = document.querySelector("main")
MESSAGES = document.getElementById("messages")
IMAGE_PATH = "./src/img"

//IDEA: CHARACTER ONLY MOVES WHEN HOVERING OVER It


document.addEventListener("DOMContentLoaded", () => {
    loadMain()
})

function loadMain(){
        getCharactersByUserId(LOGGED_IN_USER_ID).then((characterList) => {
            console.log(characterList)
            if(characterList.length >= 1){
                CONTAINER.innerHTML = ""
                MESSAGES.innerHTML = ""
                backGroundHandeler()
            }else{
                createAlert("#messages", "Please chose your character!", "success", "prepend")
                addCharacter()
            }
        })
        showMoney(LOGGED_IN_USER_ID)
}

function backGroundHandeler() {
    const shopImage = document.getElementById("shop-building")
    shopImage.addEventListener("click", () => showShopMenue())
}


