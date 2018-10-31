document.addEventListener('DOMContentLoaded', function() {

// NavBar
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

//Contact Page Dropdown
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);

//Submit Button Action

  let field = document.querySelector(".form-set-field")
  let submit = document.querySelector("#submit-button")

  submit.addEventListener("click", function(event){
    alert("Thank you for you inquiry, we'll reach out soon!")
  }) // Submit Button End

//Favorite Button - Local Storage

  let favorite = document.querySelector(".product-wrapper")
  let aidName = document.querySelector(".card-title")

  favorite.addEventListener("click", function(){
    localStorage.setItem("favorite", aidName.innerText)
  }) // Fav Button End





}); // DOMContentLoaded End
