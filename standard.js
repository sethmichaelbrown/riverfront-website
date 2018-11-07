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
  let form = document.querySelector("form")
  let remove = document.querySelector(".remove")
  let message = document.createElement("div")
  let ok = document.createElement("a")

  submit.addEventListener("click", function(event){
      event.preventDefault()
      remove.removeChild(form)

      message.setAttribute("class", "message-form")
      message.innerHTML = "Thank you for your inquiry! We will reach out soon."

      ok.setAttribute("class", "waves-effect ok-button waves-light btn-large orange darken-1 blue-grey-text hoverable")
      ok.innerHTML = "OK"

      remove.appendChild(message)
      remove.appendChild(ok)

      ok.addEventListener("click", function(){
        document.location.reload()
      })
  }) // End Submit Button Action








}); // DOMContentLoaded End
