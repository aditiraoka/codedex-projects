const memeArray = [
  "https://i.imgur.com/bSi4xLb.png",
  "https://i.imgur.com/6y0G7N0.png",
  "https://i.imgur.com/LXnRao1.png",
  "https://i.imgur.com/Qqoxh1N.png"
];

const captionArray = [
    "Can you smell what The Rock is cooking?",
    "Can't cause a lab accident if I am not in the lab",
    "Not sure if I want to hit you or hug you for that",
    "Me waking up every 5 seconds to check my alarm",
];

let memeImg = document.querySelector("#random-meme")
//console.log(memeImg)
let memeCaption = document.getElementById("random-caption")
let memeButton = document.getElementById("generator-button")

memeButton.addEventListener("click", function(){
    let randomIdx = Math.floor(Math.random()*memeArray.length)
    memeImg.src = memeArray[randomIdx]
    memeCaption.innerText = captionArray[randomIdx]
})