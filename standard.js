// NavBar
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

//Contact Page Dropdown
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});

//Submit Button Action
document.addEventListener('DOMContentLoaded', function() {
  let field = document.querySelector(".form-set-field")
  let submit = document.querySelector("#submit-button")

  submit.addEventListener("click", function(event){
    alert("Thank you for you inquiry, we'll reach out soon!")
  })
})
