

//let button = document.querySelectorAll(".bi-bi-heart");
//for (let i=0 ; button.length ; i++){
//button[i].style.border = "10px solid red";

//button[i].addEventListener("click",() =>{
  //  if (button.classList.contains("liked")) {
   //     button.classList.remove("liked");
   // } else {
   //     button.classList.add("liked");
   // });
//};

var btnplus = document.getElementsByClassName("btn-plus");
console.log("btnplus", btnplus);

for (i=0 ; i<btnplus.length ; i++){
    
    btnplus[i].addEventListener("click", function(){
        if (btnplus[i].previousElementSibling !== null){
    btnplus[i].previousElementSibling.innertext++ }totalPrice();})
};






