let pChange = document.getElementsByTagName("p");
let currentP = 0;
let cacher = function(i){
    pChange[i].style.display = "none";
};
let afficher = function(i){
    pChange[i].style.display = "block";
};

cacher(currentP+1);
pChange[currentP].addEventListener("click", function(){
    cacher(currentP);
    if(currentP == 1){
        currentP--;
    }else{
        currentP++;
    }
    afficher(currentP);
    return currentP;
});
console.log(currentP);