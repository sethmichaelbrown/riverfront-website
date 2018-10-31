document.addEventListener('DOMContentLoaded', function() {

// NavBar
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

//Contact Page Dropdown
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);

//Submit Button Action
  let submit = document.querySelector("#submit-button")

  submit.addEventListener("click", function(){
    alert("Thank you for your inquiry! We will reach out soon.")
  }) // End Submit Button Action








}); // DOMContentLoaded End
