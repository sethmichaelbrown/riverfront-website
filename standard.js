document.addEventListener('DOMContentLoaded', function() {

// NavBar
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

//Contact Page Dropdown
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);

//Submit Button Action
  let submit = document.querySelector("#submit-button")
  let name = document.querySelector(".first-name")

  submit.addEventListener("click", function(){
    if(name.innerText != ""){
      alert("Thank you for your inquiry! We will reach out soon.")
    }
    else{
      alert("Please enter valid name or email")
      event.preventDefault()
    }
  }) // End Submit Button Action








}); // DOMContentLoaded End
