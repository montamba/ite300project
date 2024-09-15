

function uncover(){
    let cov = document.getElementById("cov");
    let xx = document.getElementById("xx");
    let rentinfo = document.getElementById("rentmodal")

    xx.classList.toggle("xx");
    cov.classList.toggle("cover");
    setTimeout(showthis(rentinfo),1000)
    

}


function showthis(here){
    here.classList.toggle("rentinfo")

}


function cover(here){
    let picture = document.getElementById("pichere");
    let housename = document.getElementById("namehere");
    let housetype = document.getElementById("typehere");
    let housespace = document.getElementById("spacehere");
    let housedes = document.getElementById("deshere");
    let houseowner = document.getElementById("ownerhere");


    let pic = here.querySelector(".firstcontainer > img").src;
    let name = here.querySelector(".secondcon > .itemname").innerText;
    let type = "exampletype";
    let space = "50";
    let des = here.querySelector(".secondcon > .item").innerText;
    let owner = "Quiboloy";

    picture.src = pic;
    housename.innerText = name;
    housetype.innerText = type;
    housespace.innerText = space
    housedes.innerText = des;
    houseowner.innerText = "Owner:" + owner;




    let cov = document.getElementById("cov");
    let xx = document.getElementById("xx");
    let rentinfo = document.getElementById("rentmodal")

    xx.classList.toggle("xx");
    cov.classList.toggle("cover");
    setTimeout(showthis(rentinfo),1000)




}