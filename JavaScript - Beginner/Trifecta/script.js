let drakePicTwo = document.getElementById("drake-pic-2");
let heading = document.getElementById("heading-2")

console.log("Before Change")
console.log(drakePicTwo.src)
console.log(heading.innerText)

drakePicTwo.src = "https://i.imgur.com/RGbh6zY.png"
heading.innerText = "Learn By Doing"

console.log("Changed")
