

function background(element){

    let imgsrc = element.querySelector(".pcture > img").src;
    let house = element.querySelector(".labelsok > .housename").innerText;
    let owner = element.querySelector(".labelsok > .ownername").innerText;
    let type = element.querySelector(".labelsok > .housetype").innerText;
    let price = element.querySelector(".labelsok > .price").innerText;

    let nimg = document.getElementById("backimg");
    let nhouse = document.getElementById("backname");
    let nowner = document.getElementById("backowner");
    let nspace = document.getElementById("housespace");
    let ntypr = document.getElementById("backtype");
    let ndes = document.getElementById("backdes");
    let nprice = document.getElementById("backprice");

    nimg.src = imgsrc;
    nhouse.innerText = house;
    nowner.innerText = owner;
    nspace.innerText = "space";
    ntypr.innerText = type;
    ndes.innerText = "thiiiiiiis";
    nprice.innerText = price;

    let back = document.getElementById("back")
    back.classList.toggle("back");
}

function esit(){
    let back = document.getElementById("back")
    back.classList.toggle("back");
}