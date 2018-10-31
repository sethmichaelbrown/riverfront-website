document.addEventListener('DOMContentLoaded', function(event) {

  //Favorite Button Action - Local Storage
    let favorite = document.getElementsByClassName("favoriteButton")
    let aidName = document.getElementsByClassName("aidName")
    console.log(aidName);

    for(let i = 0; i < favorite.length; i++){
      favorite[i].addEventListener("click", function(event){
        localStorage.setItem(aidName[i].innerText, "Favorited!")
        favorite[i].style.backgroundColor = "green"
      })

      }

}) // DOMContentLoaded;
