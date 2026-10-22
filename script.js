// query selectors
const signUpCard = document.querySelector(".sign-up")
const form = document.querySelector("form")
const input = form.querySelector("input")
const errorMessage = form.querySelector("#email-error")
const submitButton = form.querySelector("button")

const successCard = document.querySelector(".success")
const successButton = document.querySelector(".success button")

// handlers
function handleSubmit(e) {
  e.preventDefault()

  const email = input.value
  const emailRegex = /^\S+@\S+\.\S+$/;

  if (!emailRegex.test(email)) {
    errorMessage.style.opacity = "1"
    input.classList.add("error")
  } else {
    signUpCard.classList.toggle("confirmed")
    successCard.classList.toggle("confirmed")
  }
}

// event listeners

successCard.addEventListener("click", () => {
  successCard.classList.toggle("confirmed")
  signUpCard.classList.toggle("confirmed")
})

// clear error message when the user start typing
form.addEventListener("input", () => {
  errorMessage.style.opacity = "0"
  input.classList.remove("error")
})

form.addEventListener("focusin", () => {
  submitButton.classList.toggle("active")
})

form.addEventListener("focusout", () => {
  submitButton.classList.toggle("active")
})

if (input !== document.activeElement) {
  submitButton.classList.remove("active")
}

form.addEventListener("submit", handleSubmit)
