// Cupcake beats cookie, cookie beats candy and candy beats cupcake
let choice = prompt("Pick from candy, cookie, cupcake")
document.getElementById("img1").setAttribute("src","/images/"+ choice + ".png")

let game = ["candy","cookie","cupcake"]
let random = Math.floor(Math.random()*3);

document.getElementById("img2").setAttribute("src","/images/"+ game[random] + ".png")

if(choice == game[random]){
    document.querySelector("h1").innerHTML="It's a draw"
} else if (choice == 'candy'){
    if(game[random] == 'cookie'){
        document.querySelector("h1").innerHTML="Computer won"
    } else {
        document.querySelector("h1").innerHTML="You won"
    }
} else if (choice == 'cookie'){
    if(game[random] = 'cupcake'){
        document.querySelector("h1").innerHTML="Computer won"
}else {
    document.querySelector("h1").innerHTML="You won"
}
} else if (choice == 'cupcake'){
    if(game[random] == 'candy'){
        document.querySelector("h1").innerHTML="Computer won"
    } else{
        document.querySelector("h1").innerHTML="You won"
    }
}
function myfunc_2() {
	location.reload();}
