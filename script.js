// query selectors
const form = document.querySelector("form")
const input = form.querySelector("input")
const errorMessage = form.querySelector("#email-error")
const button = form.querySelector("button")

// handlers
function handleSubmit(e) {
  e.preventDefault()

  const email = input.value
  const emailRegex = /^\S+@\S+\.\S+$/;

  if (!emailRegex.test(email)) {
    errorMessage.style.opacity = "1"
    input.classList.add("error")
  }
}

// event listeners

// clear error message when the user start typing
form.addEventListener("input", () => {
  errorMessage.style.opacity = "0"
  input.classList.remove("error")


})

form.addEventListener("focusin", () => {
  button.classList.toggle("active")
})

form.addEventListener("focusout", () => {
  button.classList.toggle("active")
})

if (input !== document.activeElement) {
  button.classList.remove("active")
}

form.addEventListener("submit", handleSubmit)
