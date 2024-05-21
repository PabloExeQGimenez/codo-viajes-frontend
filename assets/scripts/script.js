let menu = document.getElementById("menu");

function toggleMenu() {
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  }


  //header stycky

  // let $header = document.querySelector("header")
  // let $a = document.querySelector(".activo")

  // window.addEventListener("scroll", ()=>{
  //   let scroll = window.scrollY
  //   if(scroll<10){
  //     $header.style.backgroundColor='#292D2F'
  //   }else{
  //     $header.style.backgroundColor='transparent'
  //   }

  // })